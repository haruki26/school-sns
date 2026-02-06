class InvalidArtifactStatusError extends Error {
  constructor(message: string = 'The artifact status is invalid.') {
    super(message)
    this.name = 'InvalidArtifactStatusError'
  }
}

export { InvalidArtifactStatusError }
