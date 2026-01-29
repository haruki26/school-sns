export const createLazyFileRouteMock =
  <TLoaderData = unknown>(loaderData?: TLoaderData) =>
  () =>
  (options: any) => ({
    ...options,
    useSearch: () => ({}),
    useLoaderData: () => loaderData,
  })
