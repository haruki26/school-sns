import { LogOut } from 'lucide-react'
import { useState } from 'react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import ConfirmDialog from '@/features/settings/components/ConfirmDialog'
import { useLogoutMutation } from '@/api/routes/auth'

const LogoutSection: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const logoutMutation = useLogoutMutation()

  return (
    <>
      <Card className="flex items-center justify-between bg-white shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-600">
            <LogOut className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-700">ログアウト</p>
            <p className="text-xs text-slate-500">
              セッションを終了しログイン画面へ移動します
            </p>
          </div>
        </div>
        <Button
          className="bg-red-500 text-white hover:bg-red-600"
          onClick={() => setIsDialogOpen(true)}
        >
          ログアウト
        </Button>
      </Card>

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
