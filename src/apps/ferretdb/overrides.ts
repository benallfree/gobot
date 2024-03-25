import { AppFactory } from '..'
import { GithubReleaseProvider } from '../../GithubReleaseProvider'
import { Gobot } from '../../Gobot'

export const FERRETDB_REPO = 'FerretDB/FerretDB'

class ferretdb_GithubReleaseProvider extends GithubReleaseProvider {
  get slug() {
    return `ferretdbGithubReleaseProvider`
  }

  isArchiveUrlAllowed(url: string) {
    return !url.includes(`-dev-`) && super.isArchiveUrlAllowed(url)
  }
}
class ferretdb_Gobot extends Gobot {
  get slug(): string {
    return `ferretdbGobot`
  }
}

export const mkFerretdb: AppFactory = (optionsIn) => {
  return new ferretdb_Gobot(
    FERRETDB_REPO,
    (root, cacheRoot) =>
      new ferretdb_GithubReleaseProvider(root, cacheRoot, {
        allowBareFiles: true,
      }),
    optionsIn,
  )
}
