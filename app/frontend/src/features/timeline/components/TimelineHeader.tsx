import { useNavigate } from '@tanstack/react-router'
import Avatar from '../../../components/ui/Avatar'
import IconButton from '../../../components/ui/IconButton'

export default function TimelineHeader() {
  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-between px-4 py-3">
      <h1 className="text-xl font-bold tracking-tight text-slate-900">
        CampusLink
      </h1>
      <div className="flex items-center gap-3">
        <div className="relative">
          <IconButton
            icon="notifications"
            label="Notifications"
            className="p-2 text-slate-500 hover:bg-slate-100"
            iconClassName="text-[24px]"
            onClick={() => navigate({ to: '/settings' })}
          />
          <span className="absolute top-2 right-2 size-2 rounded-full bg-red-500 border-2 border-white" />
        </div>
        <button
          className="size-8 rounded-full overflow-hidden ring-1 ring-slate-200"
          aria-label="Profile"
          onClick={() => navigate({ to: '/profile' })}
          type="button"
        >
          <Avatar
            alt="User profile avatar showing a smiling woman"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyt_hTxNLqx__DZvpDuHuJMc0jggYmEOWAKNw-Owl9W1zeta6w_bNrQgYr29SV9kcSSnf91divylmaBS4w7OcLY9uJUN5VglYcPcHthFRS_MJjCVUin7nRBPmVwOceeeFN4-Y02M1enQ-19ytG9mCPSaBhZytmkDExC2vukI_nYgtDLjqULrTEScFxyM957lh95EOnG7z2AlVWB3gmWN4P4KgYZoVC038QnBQAviKEaxyPixRR3sgn2-VbXtYCaz_Vcaso9UGV9Gj6"
            size="sm"
            ring={false}
            className="h-full w-full rounded-full"
          />
        </button>
      </div>
    </div>
  )
}
