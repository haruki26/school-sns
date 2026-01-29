/** @vitest-environment jsdom */
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import AccountSettings from './index'

describe('AccountSettings', () => {
  it('toggles notification and privacy switches', () => {
    render(<AccountSettings />)

    const emailToggle = screen.getByRole('switch', { name: 'メール通知' })
    expect(emailToggle.getAttribute('aria-checked')).toBe('true')

    fireEvent.click(emailToggle)
    expect(emailToggle.getAttribute('aria-checked')).toBe('false')

    const privacyToggle = screen.getByRole('switch', {
      name: 'プロフィール公開',
    })
    fireEvent.click(privacyToggle)
    expect(privacyToggle.getAttribute('aria-checked')).toBe('false')
  })

  it('shows loading indicator while saving', async () => {
    render(<AccountSettings />)

    const pushToggle = screen.getAllByRole('switch', {
      name: /プッシュ通知/,
    })[0]
    fireEvent.click(pushToggle)

    expect(screen.getByText(/設定を保存しています/)).toBeTruthy()

    await waitFor(() => {
      expect(screen.queryByText(/設定を保存しています/)).toBeNull()
    })
  })
})
