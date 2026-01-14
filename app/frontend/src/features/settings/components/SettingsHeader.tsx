import { useNavigate } from '@tanstack/react-router'
import MaterialIcon from '../../../components/MaterialIcon'

export default function SettingsHeader() {
  const navigate = useNavigate()

  return (
    <div className="px-4 h-14 flex items-center justify-between">
      <div className="w-10" />
      <h1 className="text-lg font-bold tracking-tight text-slate-900">設定</h1>
      <button
        className="w-10 h-10 flex items-center justify-center rounded-full text-slate-500 hover:bg-slate-50 active:scale-95 transition-all"
        aria-label="Close"
        onClick={() => navigate({ to: '/profile' })}
        type="button"
      >
        <MaterialIcon name="close" />
      </button>
    </div>
  )
}
