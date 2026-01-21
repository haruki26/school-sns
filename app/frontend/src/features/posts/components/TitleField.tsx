export default function TitleField() {
  return (
    <div className="space-y-1">
      <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider">
        Title <span className="text-red-500">*</span>
      </label>
      <input
        className="w-full text-xl font-bold text-slate-900 placeholder:text-slate-300 border-none p-0 focus:ring-0 bg-transparent"
        placeholder="Project Title"
        type="text"
      />
    </div>
  )
}
