import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import './override.css'
import { cn } from '@/utils/cn'

interface Props {
  mdSource: string
  className?: string
}

const MarkdownViewer: React.FC<Props> = ({ mdSource, className }) => {
  return (
    <div className={cn('markdown', className)}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{mdSource}</ReactMarkdown>
    </div>
  )
}

export default MarkdownViewer
