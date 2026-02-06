class UneditableError extends Error {
  constructor(kind: 'scrap' | 'artifact') {
    super(`You do not have permission to edit this ${kind}.`)
    this.name = 'UnEditableError'
  }
}

export { UneditableError }
