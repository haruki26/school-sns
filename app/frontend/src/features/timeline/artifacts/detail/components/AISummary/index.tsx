import { Sparkles } from 'lucide-react'
import IconWithLabel from '@/components/ui/IconWithLabel'

interface Props {
  summary: string
}

const AISummary: React.FC<Props> = ({ summary }) => {
  return (
    <div className="bg-slate-500/30 border border-slate-600 rounded-2xl p-4 flex flex-col gap-3 w-full max-w-3xl">
      <IconWithLabel
        icon={() => <Sparkles size={15} className="text-sky-400" />}
        label={() => <span className="font-bold text-sm">AI要約</span>}
      />
      <p className="whitespace-pre-wrap wrap-break-words text-lg">{summary}</p>
    </div>
  )
}

export default AISummary
