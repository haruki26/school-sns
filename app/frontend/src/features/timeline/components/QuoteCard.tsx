import Avatar from '../../../components/ui/Avatar'

export default function QuoteCard() {
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white group/card hover:border-blue-400/40 transition-colors shadow-sm">
      <div className="flex p-3 gap-3">
        <div className="flex-shrink-0 w-20 h-20 rounded-lg bg-slate-100 overflow-hidden relative">
          <img
            alt="Futuristic white robot arm working on a circuit board"
            className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3WtEeHEDoT_8v9Yd7tdb5KweGExE24omLbn2VU7fyjm_BdhQ0lS8hRWGAnNImfX3vlZE2yNeCRCi06AHE_yZ4Xh6l0WcaKEB94-l6fVoAQYGJ3NFlsV-A7lqxTAek-mT1rhgJBijf9bbkL_QC1XjdMr7X1niNZNSwJDzVfRYQSGsS7DpZ3J0IGaq9Z_NqkBlG2aokXosEILNv5I26EOhUFIZ6YCs4xI80RRqE7ShSlhD4z7RY0Iae1vAnhMiHH16memcRkH6yeJ-c"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-lg" />
        </div>
        <div className="flex flex-col justify-center min-w-0 flex-1">
          <div className="flex items-center gap-1.5 mb-1.5">
            <Avatar
              alt="Avatar of Team Alpha lead"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuACO9NFPX3tuRRZmsg-zDmyrRcZm270CNjDNbp_g3RysXQPEQLuy8pYhnYmG2bDSScEEEw66YXw7hyKLKGE40nykU15s9wp6EwfjRvpX4Gc_uV0BbzJtIyIC2byau90Vn4AVrtQWBb-PdPAvQRMwCTzB6mftqTepMB71oUky4JT4PLJYN3SfhidxytM1HJILPB0oZ6bhl3BROtEMZwouobDiH5TMP_C9qVwVRYPTy5SfNYaIeLKWz9ZjL1BPnia8vtNnx_IZzTWUYfZ"
              size="xs"
            />
            <span className="text-slate-500 text-xs font-medium truncate">
              Team Alpha
            </span>
          </div>
          <h4 className="font-bold text-slate-900 text-[15px] leading-snug line-clamp-2 mb-0.5 group-hover/card:text-blue-500 transition-colors">
            Autonomous Arm Project Final
          </h4>
          <p className="text-[11px] text-slate-500 truncate">
            Engineering • Prototype Phase
          </p>
        </div>
      </div>
    </div>
  )
}
