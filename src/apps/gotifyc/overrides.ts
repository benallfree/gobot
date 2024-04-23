import type { AppFactory } from '..'
import { GithubReleaseProvider } from '../../GithubReleaseProvider'
import { Gobot } from '../../Gobot'

export const GOTIFY_REPO = 'gotify/cli'

class gotifyc_Gobot extends Gobot {
  get className(): string {
    return `gotifyc_Gobot`
  }

  get name(): string {
    return `gotifyc`
  }
}

export const mkGotifyc: AppFactory = (optionsIn) => {
  return new gotifyc_Gobot(
    GOTIFY_REPO,
    (root, cacheRoot) =>
      new GithubReleaseProvider(root, cacheRoot, {
        allowBareFiles: true,
      }),
    { ...optionsIn },
  )
}
