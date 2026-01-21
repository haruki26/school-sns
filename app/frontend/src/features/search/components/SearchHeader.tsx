import { useNavigate } from '@tanstack/react-router'
import MaterialIcon from '../../../components/MaterialIcon'

export default function SearchHeader() {
  const navigate = useNavigate()

  return (
    <>
      <div className="flex items-center gap-3 px-4 py-3">
        <div className="relative flex-1 group">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500 transition-colors group-focus-within:text-blue-600">
            <MaterialIcon name="search" className="text-[22px]" />
          </span>
          <input
            className="w-full py-2.5 pl-11 pr-8 bg-slate-100 border-none rounded-xl text-[15px] leading-relaxed text-slate-900 placeholder:text-slate-500/70 focus:ring-2 focus:ring-blue-600/20 focus:bg-white transition-all shadow-sm"
            placeholder="投稿、タグ、ユーザーを検索"
            type="search"
          />
          <span className="absolute inset-y-0 right-0 flex items-center pr-3">
            <MaterialIcon
              name="cancel"
              className="text-[20px] text-slate-500/50 opacity-0 group-focus-within:opacity-100 transition-opacity cursor-pointer"
            />
          </span>
        </div>
        <button
          className="text-slate-900 font-bold text-sm hover:opacity-70 transition-opacity whitespace-nowrap"
          onClick={() => navigate({ to: '/' })}
          type="button"
        >
          キャンセル
        </button>
      </div>
      <div className="px-4 pb-3 flex gap-2 overflow-x-auto scrollbar-hide">
        <button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-slate-900 text-white text-[13px] font-bold shadow-md transition-transform active:scale-95 border border-transparent">
          すべて
        </button>
        <button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-white text-slate-500 border border-slate-200 text-[13px] font-bold shadow-sm hover:bg-slate-50 transition-colors">
          ユーザー
        </button>
        <button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-white text-slate-500 border border-slate-200 text-[13px] font-bold shadow-sm hover:bg-slate-50 transition-colors">
          タグ
        </button>
        <button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-white text-slate-500 border border-slate-200 text-[13px] font-bold shadow-sm hover:bg-slate-50 transition-colors flex items-center gap-1">
          <MaterialIcon name="grid_view" className="text-[16px]" /> Artifacts
        </button>
        <button className="whitespace-nowrap px-4 py-1.5 rounded-full bg-white text-slate-500 border border-slate-200 text-[13px] font-bold shadow-sm hover:bg-slate-50 transition-colors flex items-center gap-1">
          <MaterialIcon name="chat_bubble_outline" className="text-[16px]" />
          Scraps
        </button>
      </div>
    </>
  )
}
