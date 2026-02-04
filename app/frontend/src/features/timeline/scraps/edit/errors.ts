class UneditableError extends Error {
  constructor() {
    super('You do not have permission to edit this scrap.')
    this.name = 'UnEditableError'
  }
}

export { UneditableError }
