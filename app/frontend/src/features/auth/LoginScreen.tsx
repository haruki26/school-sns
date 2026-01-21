import { Link, useNavigate } from '@tanstack/react-router'
import MaterialIcon from '../../components/MaterialIcon'

export default function LoginScreen() {
  const navigate = useNavigate()

  return (
    <>
      <section className="flex flex-col items-center justify-center px-6 pt-8 pb-6 bg-slate-100">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-800/10 text-slate-800">
          <MaterialIcon name="school" className="text-4xl" />
        </div>
        <h1 className="text-[32px] font-bold leading-tight text-center text-slate-800 mb-2">
          おかえりなさい
        </h1>
        <p className="text-base font-normal leading-normal text-center text-slate-500">
          学内コミュニティへようこそ
        </p>
      </section>

      <section className="mx-6 mb-6 mt-4 p-6 bg-white rounded-xl shadow-lg relative z-10 flex flex-col gap-4">
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium leading-normal text-slate-800">
            メールアドレス
          </span>
          <div className="relative flex items-center">
            <span className="absolute left-4 text-slate-400">
              <MaterialIcon name="mail" className="text-xl" />
            </span>
            <input
              className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl border border-slate-200 bg-white focus:border-slate-700 focus:ring-1 focus:ring-slate-700 h-14 pl-12 pr-4 text-base font-normal leading-normal text-slate-800 placeholder:text-slate-400 transition-colors"
              placeholder="example@university.edu"
              type="email"
            />
          </div>
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium leading-normal text-slate-800">
            パスワード
          </span>
          <div className="relative flex items-center">
            <span className="absolute left-4 text-slate-400">
              <MaterialIcon name="lock" className="text-xl" />
            </span>
            <input
              className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl border border-slate-200 bg-white focus:border-slate-700 focus:ring-1 focus:ring-slate-700 h-14 pl-12 pr-12 text-base font-normal leading-normal text-slate-800 placeholder:text-slate-400 transition-colors"
              placeholder="パスワードを入力"
              type="password"
            />
            <button
              className="absolute right-0 flex h-full w-12 items-center justify-center text-slate-400 hover:text-slate-700 cursor-pointer"
              type="button"
              aria-label="Toggle password"
            >
              <MaterialIcon name="visibility_off" className="text-xl" />
            </button>
          </div>
        </label>
        <div className="flex justify-end pt-1 pb-2">
          <Link
            className="text-sm font-medium text-slate-700 hover:text-slate-600 transition-colors"
            to="/settings"
          >
            パスワードをお忘れですか？
          </Link>
        </div>
        <button
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-800 px-6 py-4 text-base font-bold leading-normal text-white shadow-lg shadow-slate-800/20 hover:bg-slate-700 hover:shadow-slate-800/30 active:scale-[0.98] transition-all"
          onClick={() => navigate({ to: '/' })}
          type="button"
        >
          ログイン
        </button>
        <div className="relative my-2">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-slate-200" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-slate-400">または</span>
          </div>
        </div>
        <button
          className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-base font-medium leading-normal text-slate-600 hover:bg-slate-50 transition-colors"
          onClick={() => navigate({ to: '/' })}
          type="button"
        >
          <img
            alt="Google Logo"
            className="h-5 w-5"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD95SjkVNavBIXigQ7G2d_sThdDHsopk8_5Z3uQzshFxy7k642dKMVmiyMO0x2-F94BS3rb0kGwCxsdSN_SsEuOZ_iH2YrsPNNHLEkngNlQzL13LGumnDzwv7c0rEaOKIECOgzQsVKHUrOxS2XHG3FBy3h5K77p9VsS74bBJeLNn-eZim9xlylSw4up10fGEcHuARoJTMuQCyWigIrffqBChwaoZHNTsAEN3clg3P8uw7EEstWu6X1j4CK-_os4wookxKGgAIzDkjnM"
          />
          Googleで続行
        </button>
      </section>

      <div className="flex-1" />

      <section className="flex flex-col items-center justify-center py-6 px-4 pb-8 bg-slate-100">
        <p className="text-sm text-slate-500">
          アカウントをお持ちでないですか？{' '}
          <Link
            className="font-bold text-slate-800 hover:underline"
            to="/signup"
          >
            新規登録はこちら
          </Link>
        </p>
      </section>

      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10 opacity-15">
        <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] rounded-full bg-slate-800/10 blur-[80px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[250px] h-[250px] rounded-full bg-blue-300/10 blur-[60px]" />
      </div>
    </>
  )
}
