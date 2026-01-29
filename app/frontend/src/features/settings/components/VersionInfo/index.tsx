import Card from '@/components/ui/Card'

interface Props {
  appName?: string
  version?: string
}

const VersionInfo: React.FC<Props> = ({
  appName = 'School SNS',
  version = import.meta.env.VITE_APP_VERSION || '1.0.0',
}) => {
  return (
    <Card className="flex items-center justify-between bg-slate-50 text-slate-700">
      <div className="flex flex-col">
        <span className="text-xs uppercase tracking-wide text-slate-500">
          version
        </span>
        <span className="text-sm font-semibold">{appName}</span>
      </div>
      <span className="text-sm font-medium text-slate-600">v{version}</span>
    </Card>
  )
}

export default VersionInfo
