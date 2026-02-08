interface Tag {
  id: string
  name: string
}

const toTags = <T extends Record<PropertyKey, unknown>>(
  item: T & { tagArtifacts: { tag: Tag }[] },
): Omit<T, 'tagArtifacts'> & { tags: Tag[] } => {
  const { tagArtifacts, ...rest } = item
  return {
    ...rest,
    tags: tagArtifacts.map(({ tag }) => tag),
  }
}

export { toTags }
