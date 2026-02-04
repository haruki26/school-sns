import { Pencil } from 'lucide-react'
import IconWithLabel from '@/components/ui/IconWithLabel'

const EditButton: React.FC = () => {
  return (
    <button
      type="button"
      className="px-4 py-1 rounded-4xl border border-slate-800 text-sm hover:bg-slate-800/10"
    >
      <IconWithLabel icon={() => <Pencil size={15} />} label="Edit" />
    </button>
  )
}

export default EditButton
