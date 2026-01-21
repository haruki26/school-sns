import { Link, useNavigate } from '@tanstack/react-router'
import MaterialIcon from '../../components/MaterialIcon'
import AuthInputField from './components/AuthInputField'
import PasswordField from './components/PasswordField'

export default function SignupScreen() {
  const navigate = useNavigate()

  return (
    <>
      <main className="flex-1 overflow-y-auto scrollbar-hide px-6 pb-8">
        <div className="pt-6 pb-8 text-center">
          <div className="mx-auto mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
            <MaterialIcon name="school" className="text-white text-3xl" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-800 mb-2">
            Create Account
          </h1>
          <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-[280px] mx-auto">
            あなたのScrapとArtifactsを共有しましょう。
            <br />
            学内の新しいつながりがここから始まります。
          </p>
        </div>

        <form
          className="space-y-5"
          onSubmit={(event) => {
            event.preventDefault()
            navigate({ to: '/' })
          }}
        >
          <AuthInputField
            label="名前"
            placeholder="例: 山田 太郎"
            icon="person"
          />
          <AuthInputField
            label="メールアドレス"
            placeholder="student@university.edu"
            icon="mail"
            type="email"
          />
          <PasswordField label="パスワード" placeholder="8文字以上の英数字" />
          <PasswordField
            label="パスワード（確認）"
            placeholder="パスワードを再入力"
          />

          <div className="pt-4">
            <button
              className="w-full h-12 bg-blue-500 hover:bg-blue-600 active:scale-[0.98] text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
              type="submit"
            >
              登録する
              <MaterialIcon name="arrow_forward" className="text-sm" />
            </button>
          </div>
        </form>
        <p className="mt-6 text-xs text-center text-slate-400 leading-relaxed px-4">
          登録ボタンを押すことで、
          <Link className="text-blue-600 hover:underline" to="/settings">
            利用規約
          </Link>
          および
          <Link className="text-blue-600 hover:underline" to="/settings">
            プライバシーポリシー
          </Link>
          に同意したものとみなされます。
        </p>
      </main>
      <div className="p-6 bg-slate-100 border-t border-slate-200">
        <p className="text-center text-sm text-slate-500">
          すでにアカウントをお持ちですか？
          <Link
            className="font-bold text-blue-600 hover:text-blue-400 ml-1 transition-colors"
            to="/login"
          >
            ログインはこちら
          </Link>
        </p>
      </div>
    </>
  )
}
