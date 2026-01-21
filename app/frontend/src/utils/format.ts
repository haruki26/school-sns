export function formatCount(value: number) {
  if (value >= 1000) {
    const rounded = Math.round((value / 1000) * 10) / 10
    return `${rounded}k`
  }
  return `${value}`
}
