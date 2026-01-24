import { createClient } from 'backend/src/createClient'

const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'

export const apiClient = createClient(baseUrl).api.v2
