interface Props {
  appName?: string
  version?: string
}

const VersionInfo: React.FC<Props> = ({
  version = import.meta.env.VITE_APP_VERSION || '1.0.0',
}) => {
  return <p className="text-xs text-slate-400">v{version}</p>
}

export default VersionInfo
