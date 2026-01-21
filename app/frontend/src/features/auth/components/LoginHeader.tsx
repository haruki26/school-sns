import { useNavigate } from '@tanstack/react-router'
import MaterialIcon from '../../../components/MaterialIcon'

export default function LoginHeader() {
  const navigate = useNavigate()

  return (
    <div className="flex items-center px-4 py-3 justify-between">
      <button
        className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-slate-200 transition-colors cursor-pointer text-slate-800"
        aria-label="Back"
        onClick={() => navigate({ to: '/' })}
        type="button"
      >
        <MaterialIcon name="arrow_back" />
      </button>
      <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-10 text-slate-800">
        ログイン
      </h2>
    </div>
  )
}
