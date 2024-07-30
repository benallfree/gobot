import type { AppFactory } from '..'
import { GithubReleaseProvider } from '../../GithubReleaseProvider'
import { Gobot } from '../../Gobot'

export const LITEFS_REPO = 'superfly/litefs'

class litefs_GithubReleaseProvider extends GithubReleaseProvider {
  get className() {
    return `litefs_GithubReleaseProvider`
  }
}
class litefs_Gobot extends Gobot {
  get className(): string {
    return `litefs_Gobot`
  }
}

export const mkLitefs: AppFactory = (optionsIn) => {
  return new litefs_Gobot(
    LITEFS_REPO,
    (root, cacheRoot) => new litefs_GithubReleaseProvider(root, cacheRoot),
    optionsIn
  )
}
