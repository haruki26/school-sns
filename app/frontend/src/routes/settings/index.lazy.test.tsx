/** @vitest-environment jsdom */
import { fireEvent, render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { describe, expect, it, vi } from 'vitest'
import { SettingsPage } from './index.lazy'
import { createLazyFileRouteMock } from '@/testing/routerMocks'

const userData = {
  id: 'user-1',
  userName: 'Test User',
  bio: 'こんにちは',
  avatarUrl: 'https://example.com/avatar.png',
}

const mutateAsync = vi.fn().mockResolvedValue({})
const logoutAsync = vi.fn().mockResolvedValue({})

vi.mock('@tanstack/react-router', () => {
  return {
    createLazyFileRoute: createLazyFileRouteMock(userData),
    useNavigate: () => vi.fn(),
  }
})

vi.mock('@/api/routes/users', () => {
  return {
    useUpdateProfileMutation: () => ({ mutateAsync }),
  }
})

vi.mock('@/api/routes/auth', () => {
  return {
    useLogoutMutation: () => ({ mutateAsync: logoutAsync, isPending: false }),
  }
})

const renderPage = () => {
  const client = new QueryClient()
  return render(
    <QueryClientProvider client={client}>
      <SettingsPage />
    </QueryClientProvider>,
  )
}

describe('SettingsPage', () => {
  it('displays profile info and sections', async () => {
    renderPage()

    expect(await screen.findByText('Test User')).toBeTruthy()
    expect(screen.getByText('アカウント設定')).toBeTruthy()
    expect(screen.getByRole('button', { name: 'ログアウト' })).toBeTruthy()
    expect(screen.getByText(/version/i)).toBeTruthy()
  })

  it('allows entering edit mode and opening logout dialog', async () => {
    renderPage()

    const editButton = (
      await screen.findAllByRole('button', {
        name: 'プロフィールを編集',
      })
    )[0]
    fireEvent.click(editButton)
    expect(screen.getByText('保存')).toBeTruthy()

    const logoutButton = (
      await screen.findAllByRole('button', { name: 'ログアウト' })
    )[0]
    fireEvent.click(logoutButton)
    expect(screen.getByText(/ログアウトしますか/)).toBeTruthy()
  })
})
