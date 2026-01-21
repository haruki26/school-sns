import { Link } from '@tanstack/react-router'
import MaterialIcon from '../../../components/MaterialIcon'
import Avatar from '../../../components/ui/Avatar'
import type { ArtifactTimelineItem } from '../types'

type ArtifactTimelineCardProps = {
  item: ArtifactTimelineItem
}

export default function ArtifactTimelineCard({
  item,
}: ArtifactTimelineCardProps) {
  return (
    <Link
      to="/artifacts/$artifactId"
      params={{ artifactId: item.id }}
      className="block p-3 border-b border-slate-200 hover:bg-slate-50 transition-colors"
      aria-label={`${item.title} details`}
    >
      <div className="flex items-start gap-3">
        <Avatar
          src={item.avatar}
          alt={item.name}
          size="md"
          fallback={
            <span className="text-[10px] font-bold text-slate-500">
              {item.name ? item.name[0] : '?'}
            </span>
          }
        />
        <div className="w-full">
          <div className="flex items-center justify-between h-4 mb-2">
            <div className="flex items-center gap-2 truncate">
              <p className="text-slate-900 text-sm font-bold">{item.name}</p>
              <span className="text-slate-500 text-[11px]">
                • Artifact • {item.time}
              </span>
            </div>
            <span className="text-slate-500">
              <MaterialIcon name="more_horiz" className="text-[16px]" />
            </span>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-lg">
            <div
              className="aspect-[2/1] w-full bg-cover bg-center"
              style={{ backgroundImage: `url('${item.image}')` }}
            />
            <div className="p-3">
              <h3 className="font-bold text-slate-900 text-base">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 mt-1">{item.description}</p>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex -space-x-2">
                  {item.contributors.slice(0, 2).map((src) => (
                    <Avatar
                      key={src}
                      src={src}
                      alt="Contributor"
                      size="sm"
                      className="border border-white"
                    />
                  ))}
                  <div className="size-6 rounded-full border border-white bg-slate-200 flex items-center justify-center text-[8px] text-slate-700">
                    +{item.contributorsCount}
                  </div>
                </div>
                <span className="text-blue-500 text-xs font-bold">
                  View Project
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
