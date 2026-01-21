import MaterialIcon from '../../../components/MaterialIcon'

type AuthInputFieldProps = {
  label: string
  placeholder: string
  icon: string
  type?: string
}

export default function AuthInputField({
  label,
  placeholder,
  icon,
  type = 'text',
}: AuthInputFieldProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-slate-800">
        {label}
      </label>
      <div className="relative flex items-center">
        <input
          className="w-full h-12 pl-4 pr-12 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none text-base"
          placeholder={placeholder}
          type={type}
        />
        <div className="absolute right-4 text-slate-400 pointer-events-none flex items-center">
          <MaterialIcon name={icon} className="text-[20px]" />
        </div>
      </div>
    </div>
  )
}
