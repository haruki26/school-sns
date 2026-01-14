import MaterialIcon from '../../../components/MaterialIcon'

export default function PostTypeSelector() {
  return (
    <div className="px-5 py-4 bg-white">
      <div className="bg-slate-50 p-1 rounded-xl flex relative border border-slate-200/50 shadow-inner">
        <button className="flex-1 flex items-center justify-center gap-1.5 py-2 text-sm font-bold text-slate-900 bg-white rounded-lg shadow-sm border border-slate-200/50 z-10 transition-all ring-1 ring-black/5">
          <MaterialIcon
            name="history_edu"
            className="text-[18px] text-blue-500"
            filled
          />
          Artifacts
        </button>
        <button className="flex-1 flex items-center justify-center gap-1.5 py-2 text-sm font-bold text-slate-500 hover:text-slate-900 transition-all z-10 opacity-70 hover:opacity-100">
          <MaterialIcon name="edit_note" className="text-[18px]" />
          Scrap
        </button>
      </div>
      <p className="text-[11px] text-slate-500 mt-2 px-1 text-center font-medium">
        Share a report, project update, or deliverable.
      </p>
    </div>
  )
}
