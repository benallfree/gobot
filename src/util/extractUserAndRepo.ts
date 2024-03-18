export function extractUserAndRepo(url: string) {
  const regex = /^(?:https?:\/\/)?github\.com\/([^/]+)\/([^/]+).*$/
  const match = url.match(regex)
  if (match) {
    return {
      user: match[1],
      repo: match[2],
    }
  }

  throw new Error(`No match found for ${url}`)
}
