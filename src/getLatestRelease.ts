import { getReleaseTags } from './getReleaseTags'

export async function getLatestReleaseVersion() {
  const tags = await getReleaseTags()

  return tags[0] as string
}
