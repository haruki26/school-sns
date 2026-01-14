import MaterialIcon from '../../../components/MaterialIcon'

type PasswordFieldProps = {
  label: string
  placeholder: string
}

export default function PasswordField({
  label,
  placeholder,
}: PasswordFieldProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-slate-800">
        {label}
      </label>
      <div className="relative flex items-center">
        <input
          className="w-full h-12 pl-4 pr-12 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none text-base"
          placeholder={placeholder}
          type="password"
        />
        <button
          className="absolute right-4 text-slate-400 hover:text-blue-600 transition-colors flex items-center"
          type="button"
          aria-label="Toggle password"
        >
          <MaterialIcon name="visibility_off" className="text-[20px]" />
        </button>
      </div>
    </div>
  )
}
