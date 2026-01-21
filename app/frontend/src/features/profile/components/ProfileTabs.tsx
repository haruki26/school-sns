type ProfileTabsProps = {
  activeTab: 'scraps' | 'artifacts' | 'assets'
  onTabChange: (tab: 'scraps' | 'artifacts' | 'assets') => void
}

export default function ProfileTabs({
  activeTab,
  onTabChange,
}: ProfileTabsProps) {
  return (
    <div className="sticky top-[60px] z-40 bg-white/95 backdrop-blur-md pt-2">
      <div className="flex border-b border-slate-200 px-4 justify-between gap-4">
        <button
          className="relative flex flex-col items-center justify-center pb-3 pt-2 flex-1 group"
          onClick={() => onTabChange('scraps')}
          type="button"
        >
          <p
            className={
              activeTab === 'scraps'
                ? 'text-blue-500 text-sm font-bold tracking-[0.015em] mb-1'
                : 'text-slate-500 group-hover:text-slate-900 transition-colors text-sm font-medium tracking-[0.015em] mb-1'
            }
          >
            Scraps
          </p>
          <div
            className={
              activeTab === 'scraps'
                ? 'absolute bottom-0 w-full h-[3px] bg-blue-500 rounded-t-sm'
                : 'absolute bottom-0 w-full h-[3px] bg-transparent group-hover:bg-slate-300 rounded-t-sm transition-all'
            }
          />
        </button>
        <button
          className="relative flex flex-col items-center justify-center pb-3 pt-2 flex-1 group"
          onClick={() => onTabChange('artifacts')}
          type="button"
        >
          <p
            className={
              activeTab === 'artifacts'
                ? 'text-blue-500 text-sm font-bold tracking-[0.015em] mb-1'
                : 'text-slate-500 group-hover:text-slate-900 transition-colors text-sm font-medium tracking-[0.015em] mb-1'
            }
          >
            Artifacts
          </p>
          <div
            className={
              activeTab === 'artifacts'
                ? 'absolute bottom-0 w-full h-[3px] bg-blue-500 rounded-t-sm'
                : 'absolute bottom-0 w-full h-[3px] bg-transparent group-hover:bg-slate-300 rounded-t-sm transition-all'
            }
          />
        </button>
        <button
          className="relative flex flex-col items-center justify-center pb-3 pt-2 flex-1 group"
          onClick={() => onTabChange('assets')}
          type="button"
        >
          <p
            className={
              activeTab === 'assets'
                ? 'text-blue-500 text-sm font-bold tracking-[0.015em] mb-1'
                : 'text-slate-500 group-hover:text-slate-900 transition-colors text-sm font-medium tracking-[0.015em] mb-1'
            }
          >
            Assets
          </p>
          <div
            className={
              activeTab === 'assets'
                ? 'absolute bottom-0 w-full h-[3px] bg-blue-500 rounded-t-sm'
                : 'absolute bottom-0 w-full h-[3px] bg-transparent group-hover:bg-slate-300 rounded-t-sm transition-all'
            }
          />
        </button>
      </div>
    </div>
  )
}
