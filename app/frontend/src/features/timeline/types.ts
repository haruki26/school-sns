interface Owner {
  id: string
  avatarUrl: string | null
  name: string
}

interface Tag {
  id: string
  name: string
}

export type { Owner, Tag }
