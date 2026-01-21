import MaterialIcon from '../../../components/MaterialIcon'

export default function PostFooter() {
  return (
    <div className="absolute bottom-0 w-full bg-white border-t border-slate-200 px-5 py-4 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_20px_-5px_rgba(0,0,0,0.05)] z-20">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative inline-flex items-center cursor-pointer">
              <input className="sr-only peer" type="checkbox" value="" />
              <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-slate-900" />
            </div>
            <span className="text-xs font-bold text-slate-500 group-hover:text-slate-900 transition-colors">
              Preview
            </span>
          </label>
          <div className="flex items-center gap-1.5">
            <div className="size-1.5 rounded-full bg-amber-400" />
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
              Draft Saved
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-bold text-sm hover:bg-slate-100 hover:border-slate-300 active:scale-[0.98] transition-all">
            <MaterialIcon name="save" className="text-[18px]" />
            Save Draft
          </button>
          <button className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 active:scale-[0.98] transition-all shadow-lg shadow-slate-900/25">
            Publish
            <MaterialIcon name="send" className="text-[18px]" />
          </button>
        </div>
      </div>
    </div>
  )
}
