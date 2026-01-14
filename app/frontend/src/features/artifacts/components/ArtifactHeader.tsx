import { useNavigate } from '@tanstack/react-router'
import MaterialIcon from '../../../components/MaterialIcon'

export default function ArtifactHeader() {
  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-between px-4 py-3">
      <button
        className="p-2 -ml-2 text-slate-900 hover:bg-slate-50 rounded-full transition-colors group"
        aria-label="Back"
        onClick={() => navigate({ to: '/artifacts' })}
        type="button"
      >
        <MaterialIcon
          name="arrow_back"
          className="group-hover:-translate-x-0.5 transition-transform"
        />
      </button>
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 hover:bg-slate-200/50 rounded-full transition-colors text-xs font-bold text-slate-900 border border-slate-200">
          <MaterialIcon name="edit" className="text-[16px]" />
          <span>Edit</span>
        </button>
        <button
          className="p-2 text-slate-900 hover:bg-slate-50 rounded-full transition-colors"
          aria-label="More"
        >
          <MaterialIcon name="more_vert" />
        </button>
      </div>
    </div>
  )
}
