import MaterialIcon from '../../../components/MaterialIcon'
import SectionHeader from '../../../components/ui/SectionHeader'
import type { TrendingItem } from '../types'

type TrendingSectionProps = {
  items: Array<TrendingItem>
}

export default function TrendingSection({ items }: TrendingSectionProps) {
  return (
    <section className="py-5 px-4">
      <SectionHeader title="急上昇トレンド" className="mb-4" />
      <div className="space-y-5">
        {items.map((trend) => (
          <button
            key={trend.rank}
            className="flex items-center justify-between w-full group cursor-pointer active:opacity-60 transition-opacity"
          >
            <div className="flex items-start gap-4 text-left">
              <span
                className={`font-bold text-sm w-4 pt-0.5 text-center ${
                  trend.accent ? 'text-blue-600' : 'text-slate-900'
                }`}
              >
                {trend.rank}
              </span>
              <div>
                <p className="text-[15px] font-bold text-slate-900 mb-0.5">
                  {trend.title}
                </p>
                <p className="text-xs text-slate-500">{trend.meta}</p>
              </div>
            </div>
            <MaterialIcon
              name="trending_up"
              className="text-slate-400/50 text-[20px]"
            />
          </button>
        ))}
      </div>
    </section>
  )
}
