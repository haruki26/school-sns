import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import AppShell from '../layouts/AppShell'

import type { QueryClient } from '@tanstack/react-query'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <AppShell>
      <Outlet />
    </AppShell>
  ),
})
