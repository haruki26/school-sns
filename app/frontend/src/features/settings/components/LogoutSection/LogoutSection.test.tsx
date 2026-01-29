/** @vitest-environment jsdom */
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import LogoutSection from './index'

const mutateAsync = vi.fn()

vi.mock('@/api/routes/auth', () => {
  return {
    useLogoutMutation: () => ({ mutateAsync, isPending: false }),
  }
})

vi.mock('../ConfirmDialog', () => {
  return {
    default: ({ isOpen, onConfirm, onCancel }: any) => (
      <div>
        {isOpen ? (
          <div>
            <span>確認</span>
            <button onClick={onConfirm}>ログアウトする</button>
            <button onClick={onCancel}>キャンセル</button>
          </div>
        ) : null}
      </div>
    ),
  }
})

describe('LogoutSection', () => {
  it('opens dialog and triggers logout', () => {
    render(<LogoutSection />)

    fireEvent.click(screen.getByRole('button', { name: 'ログアウト' }))
    expect(screen.getByText('確認')).toBeTruthy()

    fireEvent.click(screen.getByText('ログアウトする'))
    expect(mutateAsync).toHaveBeenCalled()
  })
})
