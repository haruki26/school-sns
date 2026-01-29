import { useState } from 'react'
import ConfirmDialog from '@/features/settings/components/ConfirmDialog'
import { useLogoutMutation } from '@/api/routes/auth'

const LogoutSection: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const logoutMutation = useLogoutMutation()

  return (
    <>
      <div className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm">
        <button
          type="button"
          onClick={() => setIsDialogOpen(true)}
          className="w-full p-4 text-center text-base font-medium text-red-500 transition-colors hover:bg-red-50 active:bg-red-100"
        >
          ログアウト
        </button>
      </div>

      <ConfirmDialog
        isOpen={isDialogOpen}
        title="ログアウトしますか？"
        message="現在のセッションを終了し、ログイン画面へ移動します。"
        confirmLabel="ログアウト"
        cancelLabel="キャンセル"
        variant="danger"
        isLoading={logoutMutation.isPending}
        onConfirm={async () => {
          await logoutMutation.mutateAsync()
          setIsDialogOpen(false)
        }}
        onCancel={() => setIsDialogOpen(false)}
      />
    </>
  )
}

export default LogoutSection
