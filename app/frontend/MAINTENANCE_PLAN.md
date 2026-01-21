# Frontend UI 保守性改善プラン

## 目的

現在の UI 実装は見た目の完成度が高い一方、画面単位で JSX とモックデータが肥大化しており、修正コストが上がりやすい構造です。保守性を上げるために、責務分離と共通化を進める方針を整理します。

## 現状調査（主な課題）

- 画面コンポーネントが肥大化している（例: `src/features/timeline/TimelineScreen.tsx`、`src/features/search/SearchScreen.tsx` など）。
- 1 画面内に UI コンポーネント定義とモックデータが混在している（例: `TimelineScreen` 内の `timelineFeedBase`）。
- レイアウトや UI パーツのパターンが重複している（例: `PhoneFrame`/`ScreenHeader`/`BottomNav` の組み合わせや、カード/ボタン/アバター/タグ/アクション列のスタイル）。
- Tailwind の長いクラス列が至る所にあり、微修正の影響範囲を追いづらい。
- 文言や表示データがハードコードされており、将来的な API 連携や多言語対応に移行しづらい。
- 依存関係に未使用の可能性がある（例: `lucide-react` が UI に未使用）。

## 改善方針（優先度順）

### 1) レイアウト責務の集約

- `AppShell`（仮）を作成し、`PhoneFrame`、`ScreenHeader`、`BottomNav` などのレイアウト共通部分をここに集約。
- TanStack Router の layout route を使って、画面側の記述量を削減。
- 目標: 各画面は「中身のコンテンツ」に集中できる状態にする。

### 2) UI パーツの共通化

- 画面内で定義されている UI パーツを `src/components/ui` もしくは `src/shared` に集約。
- 候補: `Avatar`, `IconButton`, `Chip/Badge`, `SectionHeader`, `Card`, `ActionRow`, `ListItem` など。
- 目標: スタイル修正やデザイン変更が 1 箇所で済む状態にする。

### 3) スタイル設計の整理

- `styles.css` にデザイン変数（色、余白、角丸、影）を定義し、共通スタイルを `@layer components` で抽象化。
- `clsx` + `tailwind-merge` の導入で className 合成を明確化。
- 目標: クラスの重複と差分を減らし、意図が伝わる記述にする。

### 4) データと型の分離

- モックデータを `src/mocks` へ移動し、画面では表示のみを担当。
- `src/types` もしくは `src/features/*/types` で画面に必要な型を定義。
- 将来的な API 連携を意識して、ViewModel 変換層を用意する方針を明記。

### 5) 品質と運用の補強

- 共通コンポーネントに軽量なテスト（レンダリング/表示のスナップ）を追加。
- UI のカタログ化を考える場合は Storybook などを検討。
- 未使用依存の洗い出し（`pnpm lint` / `pnpm check` をベースに整理）。

## 推奨ディレクトリ構成（案）

```
src/
  components/
    ui/
      Avatar.tsx
      Button.tsx
      Card.tsx
      IconButton.tsx
  features/
    timeline/
      components/
      data/
      types.ts
      TimelineScreen.tsx
  layouts/
    AppShell.tsx
  mocks/
  styles/
    theme.css
  utils/
    cn.ts
```

## 進め方（最小リスクでの分割）

1. `AppShell` と `cn` ユーティリティを追加し、既存画面は UI 変更なしで置き換える。
2. 各画面内の小コンポーネントを `features/*/components` に移動し、ファイル分割のみ行う。
3. `Avatar`, `Button` などの共通コンポーネントを作り、重複 UI を順次置き換える。
4. モックデータと型定義を外出しし、画面は表示専用に整理する。
5. 影響が大きい画面（Timeline/Search/Profile）から段階的に適用する。

## 完了条件（Definition of Done）

- 主要画面のファイルサイズが過度に肥大化していない（例: 200 行程度を目標）。
- 共通 UI の修正が 1 箇所で完結する。
- モックデータと UI が分離され、画面は View 層として読める。
- ルーティングのレイアウト化により、画面ごとの重複記述が減っている。
