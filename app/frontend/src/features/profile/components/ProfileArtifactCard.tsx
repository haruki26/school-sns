import { useNavigate } from '@tanstack/react-router'
import Avatar from '../../../components/ui/Avatar'
import type { ProfileArtifact } from '../types'

type ProfileArtifactCardProps = {
  artifact: ProfileArtifact & { contributorsCount: string }
}

export default function ProfileArtifactCard({
  artifact,
}: ProfileArtifactCardProps) {
  const navigate = useNavigate()

  return (
    <div className="p-4 border-b border-slate-200 hover:bg-slate-50 transition-colors">
      <div className="flex items-start gap-3">
        <Avatar src={artifact.avatar} alt={artifact.name} size="lg" />
        <div className="w-full">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-bold text-sm text-slate-900">
              {artifact.name}
            </span>
            <span className="text-xs text-slate-500">{artifact.time}</span>
          </div>
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-lg">
            <div
              className="aspect-[2/1] w-full bg-cover bg-center"
              style={{ backgroundImage: `url('${artifact.image}')` }}
            />
            <div className="p-3">
              <h3 className="font-bold text-slate-900 text-base">
                {artifact.title}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {artifact.description}
              </p>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex -space-x-2">
                  {artifact.contributors.slice(0, 2).map((src) => (
                    <Avatar
                      key={src}
                      src={src}
                      alt="Contributor"
                      size="sm"
                      className="border border-white"
                    />
                  ))}
                  <div className="size-6 rounded-full border border-white bg-slate-200 flex items-center justify-center text-[8px] text-slate-700">
                    +{artifact.contributorsCount}
                  </div>
                </div>
                <button
                  className="text-blue-500 text-xs font-bold hover:underline"
                  onClick={() => navigate({ to: '/artifacts' })}
                  type="button"
                >
                  View Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
