export default function TimelineFilters() {
  return (
    <div className="sticky top-[57px] z-20 bg-white/95 backdrop-blur-md px-4 py-2 border-b border-slate-200 flex gap-2">
      <button className="px-4 py-1.5 rounded-full bg-slate-900 text-white text-[11px] font-bold uppercase tracking-wide shadow-sm hover:opacity-90 transition-opacity">
        All
      </button>
      <button className="px-4 py-1.5 rounded-full bg-slate-50 text-slate-500 border border-slate-200 text-[11px] font-bold uppercase tracking-wide hover:border-slate-400/30 transition-colors">
        Following
      </button>
    </div>
  )
}
