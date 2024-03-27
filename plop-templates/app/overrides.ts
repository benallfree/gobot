import type { AppFactory } from '..'
import { GithubReleaseProvider } from '../../GithubReleaseProvider'
import { Gobot } from '../../Gobot'

export const {{constantCase slug}}_REPO = '{{user}}/{{repo}}'

class {{slug}}_GithubReleaseProvider extends GithubReleaseProvider {
  get slug() {
    return `{{slug}}GithubReleaseProvider`
  }
}
class {{slug}}_Gobot extends Gobot {
  get slug(): string {
    return `{{slug}}Gobot`
  }
}

export const mk{{properCase slug}}: AppFactory = (optionsIn) => {
  return new {{slug}}_Gobot(
    {{constantCase slug}}_REPO,
    (root, cacheRoot) => new {{slug}}_GithubReleaseProvider(root, cacheRoot),
    optionsIn
  )
}
