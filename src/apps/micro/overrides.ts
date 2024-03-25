import { AppFactory } from '..'
import { GithubReleaseProvider } from '../../GithubReleaseProvider'
import { Gobot } from '../../Gobot'

export const MICRO_REPO = 'zyedidia/micro'

class micro_GithubReleaseProvider extends GithubReleaseProvider {
  get slug() {
    return `microGithubReleaseProvider`
  }
}
class micro_Gobot extends Gobot {
  get slug(): string {
    return `microGobot`
  }
}

export const mkMicro: AppFactory = (optionsIn) => {
  return new micro_Gobot(
    MICRO_REPO,
    (root, cacheRoot) => new micro_GithubReleaseProvider(root, cacheRoot),
    optionsIn,
  )
}
