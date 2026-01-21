import MaterialIcon from '../../../components/MaterialIcon'
import Avatar from '../../../components/ui/Avatar'
import Badge from '../../../components/ui/Badge'

export default function MetadataSection() {
  return (
    <div className="space-y-5 pt-2 border-t border-slate-200/50">
      <div className="flex items-start gap-3">
        <div className="mt-1 size-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
          <MaterialIcon name="tag" className="text-slate-500 text-[18px]" />
        </div>
        <div className="flex-1 flex flex-wrap gap-2 pt-1.5">
          <Badge className="bg-blue-50 text-blue-500 border border-blue-200/50 normal-case">
            UI/UX
            <button className="hover:text-blue-400 flex items-center">
              <MaterialIcon name="close" className="text-[14px]" />
            </button>
          </Badge>
          <input
            className="flex-1 min-w-[100px] text-sm text-slate-900 placeholder:text-slate-400 border-none p-0 focus:ring-0 bg-transparent h-7"
            placeholder="Add tags..."
            type="text"
          />
        </div>
      </div>
      <div className="flex items-start gap-3">
        <div className="mt-1 size-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
          <MaterialIcon
            name="group_add"
            className="text-slate-500 text-[18px]"
          />
        </div>
        <div className="flex-1 flex flex-wrap gap-2 pt-1.5">
          <Badge className="bg-white border border-slate-200 text-slate-900 text-xs font-bold shadow-sm pl-1 pr-2.5 py-0.5 normal-case">
            <Avatar
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuACO9NFPX3tuRRZmsg-zDmyrRcZm270CNjDNbp_g3RysXQPEQLuy8pYhnYmG2bDSScEEEw66YXw7hyKLKGE40nykU15s9wp6EwfjRvpX4Gc_uV0BbzJtIyIC2byau90Vn4AVrtQWBb-PdPAvQRMwCTzB6mftqTepMB71oUky4JT4PLJYN3SfhidxytM1HJILPB0oZ6bhl3BROtEMZwouobDiH5TMP_C9qVwVRYPTy5SfNYaIeLKWz9ZjL1BPnia8vtNnx_IZzTWUYfZ"
              alt="Team Alpha"
              size="xs"
            />
            Team Alpha
            <button className="ml-1 text-slate-500 hover:text-slate-900 flex items-center">
              <MaterialIcon name="close" className="text-[14px]" />
            </button>
          </Badge>
          <input
            className="flex-1 min-w-[120px] text-sm text-slate-900 placeholder:text-slate-400 border-none p-0 focus:ring-0 bg-transparent h-7"
            placeholder="Add collaborators..."
            type="text"
          />
        </div>
      </div>
    </div>
  )
}
