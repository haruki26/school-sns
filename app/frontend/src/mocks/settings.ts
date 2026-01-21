import type { SettingsData } from '../features/settings/types'

export const settingsData: SettingsData = {
  profile: {
    name: '山田 太郎',
    dept: '工学部 情報学科',
    bio: 'UXデザインとモバイル開発に興味があります。最近はSwiftUIを勉強中📱',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDf0hYWRdlQrBVFS6_SiTh4tUFPwiEUcXFniwTTSj_BU_0rplPbivDdnB-jNv6HFPnT0pGlUyaO86N6YrlyecMGU8BhYenXNpveWlor6Cx7Gc72MnxXUoMr7zrOh41Jn8x6EFQ4geR9mo5NEbL11AMoMt_aK-bhfGifCNCF4swqX1ljS_KGNImIohpsdNIFHQhxZIHuQncbcC4NA6CakCwHVZB5N26dAqn7Nso7mjjoi_aHBe2nr8L3oMgI3xa-eWscVYLIQOAxMW70',
  },
  sections: [
    {
      title: 'プロフィール',
      items: [
        {
          icon: 'photo_camera',
          label: 'アイコンを変更',
          iconClassName: 'bg-sky-100 text-indigo-500',
        },
        {
          icon: 'edit_note',
          label: '自己紹介を編集',
          iconClassName: 'bg-pink-100 text-indigo-500',
        },
      ],
    },
    {
      title: 'アカウント',
      items: [
        {
          icon: 'notifications',
          label: '通知設定',
          iconClassName: 'bg-amber-50 text-orange-500',
        },
        {
          icon: 'lock',
          label: 'プライバシー',
          iconClassName: 'bg-emerald-100 text-emerald-500',
        },
      ],
    },
  ],
  versionLabel: 'v1.2.0 (Build 452)',
}
