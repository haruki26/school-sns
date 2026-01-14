import { useNavigate } from '@tanstack/react-router'

export default function PostHeader() {
  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-between px-4 py-3">
      <button
        className="text-slate-500 hover:text-slate-900 font-medium text-[15px] transition-colors p-2 -ml-2 rounded-full hover:bg-slate-100"
        onClick={() => navigate({ to: '/' })}
        type="button"
      >
        Cancel
      </button>
      <h1 className="text-[16px] font-bold text-slate-900 tracking-tight">
        New Post
      </h1>
      <div className="w-[50px]" />
    </div>
  )
}
