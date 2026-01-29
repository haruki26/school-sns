/** @vitest-environment jsdom */
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { describe, expect, it, vi } from 'vitest'
import ProfileEditForm from './index.tsx'

const mutateAsync = vi.fn().mockResolvedValue({})

vi.mock('@/api/routes/users', () => {
  return {
    useUpdateProfileMutation: () => ({ mutateAsync }),
  }
})

const renderWithClient = (ui: React.ReactNode) => {
  const client = new QueryClient()
  return render(<QueryClientProvider client={client}>{ui}</QueryClientProvider>)
}

describe('ProfileEditForm', () => {
  it('shows preview and submits updated values', async () => {
    const onSuccess = vi.fn()
    const onCancel = vi.fn()

    renderWithClient(
      <ProfileEditForm
        initialValues={{ userName: 'Alice', bio: null, avatarUrl: null }}
        onSuccess={onSuccess}
        onCancel={onCancel}
      />,
    )

    const nameInput = screen.getByLabelText<HTMLInputElement>('ユーザー名')
    expect(nameInput.value).toBe('Alice')

    const avatarInput = screen.getByLabelText('アバターURL')
    fireEvent.change(avatarInput, {
      target: { value: 'https://example.com/avatar.png' },
    })

    const bioInput = screen.getByLabelText('自己紹介')
    fireEvent.change(bioInput, { target: { value: 'Hello' } })

    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: '保存' }))
      await Promise.resolve()
    })

    await waitFor(() => {
      expect(mutateAsync).toHaveBeenCalledWith({
        userName: 'Alice',
        bio: 'Hello',
        avatarUrl: 'https://example.com/avatar.png',
      })
      expect(onSuccess).toHaveBeenCalled()
    })
  })
})
