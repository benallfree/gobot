import { AppFactory } from '..'
import { GithubReleaseProvider } from '../../GithubReleaseProvider'
import { Gobot } from '../../Gobot'

class {{slug}}GithubReleaseProvider extends GithubReleaseProvider {
  get slug() {
    return `{{slug}}GithubReleaseProvider`
  }
}
class {{slug}}Gobot extends Gobot {
  get slug(): string {
    return `{{slug}}Gobot`
  }
}

export const mk{{slug}}: AppFactory = (optionsIn) => {
  return new {{slug}}Gobot(
    '{{user}}/{{repo}}',
    (root, cacheRoot) => new {{slug}}GithubReleaseProvider(root, cacheRoot),
    optionsIn
  )
}
