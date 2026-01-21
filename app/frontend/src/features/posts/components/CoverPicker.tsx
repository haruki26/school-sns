import MaterialIcon from '../../../components/MaterialIcon'

export default function CoverPicker() {
  return (
    <div className="relative group cursor-pointer">
      <div className="w-full aspect-[21/9] rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 flex flex-col items-center justify-center gap-2 hover:bg-slate-50 hover:border-blue-400/50 transition-all group-hover:scale-[1.01]">
        <div className="size-10 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center group-hover:text-blue-500 transition-colors">
          <MaterialIcon name="add_photo_alternate" className="text-[20px]" />
        </div>
        <span className="text-xs font-bold text-slate-500 group-hover:text-slate-900">
          Add Cover Image
        </span>
      </div>
    </div>
  )
}
