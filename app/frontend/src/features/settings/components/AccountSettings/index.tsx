import { Bell, ChevronRight, Lock } from 'lucide-react'

const AccountSettings: React.FC = () => {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm">
      <button
        type="button"
        className="flex w-full items-center justify-between border-b border-slate-100 p-4 transition-colors hover:bg-slate-50 active:bg-slate-100"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-600 shadow-sm">
            <Bell className="h-5 w-5" />
          </div>
          <span className="text-base font-medium text-slate-900">通知設定</span>
        </div>
        <ChevronRight className="h-4 w-4 text-slate-400" />
      </button>
      <button
        type="button"
        className="flex w-full items-center justify-between p-4 transition-colors hover:bg-slate-50 active:bg-slate-100"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 shadow-sm">
            <Lock className="h-5 w-5" />
          </div>
          <span className="text-base font-medium text-slate-900">
            プライバシー
          </span>
        </div>
        <ChevronRight className="h-4 w-4 text-slate-400" />
      </button>
    </div>
  )
}

export default AccountSettings
