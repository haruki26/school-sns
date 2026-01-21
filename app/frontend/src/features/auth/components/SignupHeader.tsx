import { useNavigate } from '@tanstack/react-router'
import MaterialIcon from '../../../components/MaterialIcon'

export default function SignupHeader() {
  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-between px-4 pt-12 pb-2">
      <button
        className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 transition-colors text-slate-800"
        aria-label="Back"
        onClick={() => navigate({ to: '/login' })}
        type="button"
      >
        <MaterialIcon name="arrow_back" className="text-2xl" />
      </button>
      <h2 className="text-lg font-bold text-slate-800">新規登録</h2>
      <div className="w-10" />
    </div>
  )
}
