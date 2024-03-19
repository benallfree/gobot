import { AppFactory } from '..'
import { GithubReleaseProvider } from '../../GithubReleaseProvider'
import { Gobot } from '../../Gobot'

class {{name}}GithubReleaseProvider extends GithubReleaseProvider {
  get slug() {
    return `{{name}}GithubReleaseProvider`
  }
}
class {{name}}Gobot extends Gobot {
  get slug(): string {
    return `{{name}}Gobot`
  }
}

export const mk{{name}}: AppFactory = (optionsIn) => {
  return new {{name}}Gobot(
    'drakkan/{{name}}',
    (root, cacheRoot) => new {{name}}GithubReleaseProvider(root, cacheRoot),
    optionsIn
  )
}
