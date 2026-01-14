import { useNavigate } from '@tanstack/react-router'
import IconButton from '../../../components/ui/IconButton'

type ProfileHeaderProps = {
  handle: string
}

export default function ProfileHeader({ handle }: ProfileHeaderProps) {
  const navigate = useNavigate()

  return (
    <div className="px-4 py-3 flex items-center justify-between">
      <IconButton
        icon="arrow_back"
        label="Back"
        className="text-slate-600 size-10 hover:bg-slate-100 active:scale-95"
        onClick={() => navigate({ to: '/' })}
      />
      <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
        {handle}
      </h2>
      <IconButton
        icon="settings"
        label="Settings"
        className="text-slate-600 size-10 hover:bg-slate-100 active:scale-95"
        onClick={() => navigate({ to: '/settings' })}
      />
    </div>
  )
}
