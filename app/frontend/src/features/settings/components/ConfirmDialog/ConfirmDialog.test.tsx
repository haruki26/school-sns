/** @vitest-environment jsdom */
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import ConfirmDialog from './index'

describe('ConfirmDialog', () => {
  it('does not render when closed', () => {
    render(
      <ConfirmDialog
        isOpen={false}
        title="ダイアログ"
        message="メッセージ"
        onConfirm={() => {}}
        onCancel={() => {}}
      />,
    )

    expect(screen.queryByText('ダイアログ')).toBeNull()
  })

  it('calls handlers on confirm and cancel', () => {
    const onConfirm = vi.fn()
    const onCancel = vi.fn()

    render(
      <ConfirmDialog
        isOpen
        title="ログアウト"
        message="本当にログアウトしますか？"
        onConfirm={onConfirm}
        onCancel={onCancel}
      />,
    )

    fireEvent.click(screen.getByRole('button', { name: '確認' }))
    fireEvent.click(screen.getByRole('button', { name: 'キャンセル' }))

    expect(onConfirm).toHaveBeenCalled()
    expect(onCancel).toHaveBeenCalled()
  })
})
