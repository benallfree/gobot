export function extractUserAndRepo(url: string) {
  const regex = /^(?:https?:\/\/)?(?:github\.com\/|github:)?([^/]+)\/([^/]+).*$/
  const match = url.match(regex)
  if (!match) throw new Error(`Could not extract <user>/<repo> from ${url}`)
  const user = match[1]
  const repo = match[2]
  if (!user) throw new Error(`Could not extract <user> from ${url}`)
  if (!repo) throw new Error(`Could not extract <repo> from ${url}`)
  return {
    user,
    repo,
  }
}
