import type {
  TimelineItemRecord,
  TimelineVariant,
} from '../features/timeline/types'

const timelineFeedBase: Array<TimelineItemRecord> = [
  {
    id: 'question',
    kind: 'question',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAIiBPgMsZksHx4TO3tGIOJ4iMxYBbGabB-RBvG2sXXAXKyl6ZaTrVRDM5UVwK7Fa9qtVwDg1Q15aJygpn5zmPOxbYYIo8vb3gU6OXNTvR_iASYqb6JlmHkYlFGCmAWkfAjOhMTKmGOWIy5bD75CZTAbenkY_R33NM92aOZ7uI_7HVr4NjQHgGb_GZK76za4v88l6k_GlpGnav7cjf0_K_DAG6OSmWSfxPlN1nF7_yo8hbfsuX6MZ3XIjWgntUtsujHx4XUboxHTbKb',
    name: 'Kenji Sato',
    time: '2m',
    text: 'Does anyone know the deadline for the Java assignment?',
    tag: '#CS101',
    likes: 12,
    comments: 4,
  },
  {
    id: 'quote',
    kind: 'quote',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAvhQcsJCtpogA351mToT4dQ_jBnCXLs4Q_tm_37zvERG-XV6vqZn6VR9ecxkSvUgQ9lqM202vpJp2aCu4P-BEi93j5fTxNaTE70K_JJ5MHyCg0-XCYh_CAc7Bx9UuOq30sJ9NUquaVpm7jBSclOM9PE4Z_1ToWKH_-6pSOe_99AncsR2E8_AUXkA4b8dfXe-hC5U_oTtW_Fsuk5TiMzclDmO8pv0JRTb72_5wQmiGjYgbp_dG2FOzftu6_LnwZsaItFT_pOfMeZbLE',
    name: 'Yuki Tanaka',
    time: '15m',
    text: 'Just saw this amazing project from Team Alpha! So inspiring.',
    likes: 45,
    comments: 12,
  },
  {
    id: 'official',
    kind: 'official',
    name: 'Admin Dept',
    time: '1h',
    text: '🔔 Reminder: Guest lecture by Dr. Alan Grant in Room 302 at 3 PM today. Topic: "Evolution of AI".',
    likes: 89,
  },
  {
    id: 'request',
    kind: 'request',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDtaoDU0KEuCJ7mCpinOIK349dPCLhsbtrQXPDzZceq1pvmRLw-1lzHMxjt64Y8VqWl3VG0NIfL-oCiYNKBqtMVBTtcg66iA8veFv69HG9Hl-pVcQ66LzYrujeOlJg_VZ6-0eIJBDb5vdXTX8uJl2FX24K9ragumwoijrDv6enY0Vdr_c8emVCaYFqFcjuewmTwfoWQKW14qgbDZRaagkHHodezvKd6RIm3SLUxaB_s7Dk7WWMA9YzgquRpaGVv57dHwKKF3Ek5XXTM',
    name: 'Alex M.',
    time: '2h',
    text: 'Has anyone started on the group project for Marketing? Looking for teammates who are good with data analysis! 📊',
    likes: 2,
    comments: 5,
  },
]

export const timelineFeedByVariant: Record<
  TimelineVariant,
  Array<TimelineItemRecord>
> = {
  scrap: timelineFeedBase,
  artifact: timelineFeedBase,
}
