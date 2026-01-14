import type { SearchData } from '../features/search/types'

export const searchData: SearchData = {
  recentSearches: ['UI Design', '#React', 'Team Alpha'],
  trendingItems: [
    {
      rank: 1,
      title: '#Hackathon2024',
      meta: '1,234 件の投稿 • イベント',
      accent: true,
    },
    {
      rank: 2,
      title: '卒業制作展',
      meta: '890 件の投稿 • 学内ニュース',
    },
    {
      rank: 3,
      title: '#AIResearch',
      meta: '56 件の投稿 • テクノロジー',
    },
  ],
  recommendedUser: {
    name: 'Yuki Tanaka',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAvhQcsJCtpogA351mToT4dQ_jBnCXLs4Q_tm_37zvERG-XV6vqZn6VR9ecxkSvUgQ9lqM202vpJp2aCu4P-BEi93j5fTxNaTE70K_JJ5MHyCg0-XCYh_CAc7Bx9UuOq30sJ9NUquaVpm7jBSclOM9PE4Z_1ToWKH_-6pSOe_99AncsR2E8_AUXkA4b8dfXe-hC5U_oTtW_Fsuk5TiMzclDmO8pv0JRTb72_5wQmiGjYgbp_dG2FOzftu6_LnwZsaItFT_pOfMeZbLE',
    dept: 'Architecture • Design Dept.',
    verified: true,
  },
  recommendedArtifact: {
    title: 'Eco-Food Delivery: サステナブルな配送アプリのデザイン提案',
    tags: ['#UIUX', '#Eco'],
    time: '2時間前',
    thumbnail:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCPVSh0Zy07mgmqjSnjb5dY_neUKhROMSQMRiC7OGaWhJLXxekcLOIAbV--B-mJYKBuY8A3IiWmaAsZ9225iBnKTaDcwdDiEJG4gd33tH_wDhpZ4D0L8ieYtMfoSubS5_kXRm6YT6joeLJRmYJpSyicI6Gc_zuBR7XM0wpR64gvkg8jTGbhxMvYUi_fZE52zDbpyL-jNQnDU_9PFhyE07B9Y33uwGmN5Anqbbi06D3TmQuqPgQdEq7MvtIOgg5urO2L9wIAPKkvDpu2',
    author: {
      name: 'Sarah L.',
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAU_Uevt1sF3Gen13SezwrujCG29Rz41fvFKZIG8S7_VuHeuIYoQdwePML98trQmqpL9R88a0ApQ0syC0o2e1JzwgmI3a6XRK45Y7Nw2ELwqn18yJRxNwPE8I3sNtRWWN-AR8dD9sU2XAsc7kyqiP0tcKrr5EdwUetSlJwRFQiZP3e4lXuFEV0KG33iq70Q_xi7W4DEn6XDOilMCPPv5Ae4yfo7rnIY3QoPWktn3dyzUWd9yYdITyy0k5aTc2NCH5wN6lvbzbnfeBWA',
    },
    likes: 24,
  },
  recommendedScrap: {
    author: {
      name: 'Kenji Sato',
      handle: '@kenji_s',
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAIiBPgMsZksHx4TO3tGIOJ4iMxYBbGabB-RBvG2sXXAXKyl6ZaTrVRDM5UVwK7Fa9qtVwDg1Q15aJygpn5zmPOxbYYIo8vb3gU6OXNTvR_iASYqb6JlmHkYlFGCmAWkfAjOhMTKmGOWIy5bD75CZTAbenkY_R33NM92aOZ7uI_7HVr4NjQHgGb_GZK76za4v88l6k_GlpGnav7cjf0_K_DAG6OSmWSfxPlN1nF7_yo8hbfsuX6MZ3XIjWgntUtsujHx4XUboxHTbKb',
    },
    time: '5分前',
    category: 'Scrap',
    text: 'Javaの課題について質問です。クラス継承の部分でエラーが出て詰まっています...誰か教えていただけませんか？💦',
    tags: ['#CS101', '#Java'],
    comments: 3,
    likes: 12,
  },
  recommendedMedia: {
    title: '短編映画「青い街」 - 最終予告編',
    tags: ['#Film', '#Production'],
    time: '昨日',
    source: 'Film Club',
    likes: 156,
  },
}
