import { AppFactory } from '..'
import { AppInfo } from '../'
import {
  GithubReleaseProvider,
  GithubReleaseProviderOptions,
} from '../../GithubReleaseProvider'
import { Gobot } from '../../Gobot'

export const GITEA_REPO = 'go-gitea/gitea'

export class gitea_GithubReleaseProvider extends GithubReleaseProvider {
  constructor(
    cacheRoot: string,
    optionsIn: Partial<GithubReleaseProviderOptions> = {},
  ) {
    super(GITEA_REPO, cacheRoot, optionsIn)
  }

  get slug() {
    return `giteaGithubReleaseProvider`
  }

  get allowBareFiles() {
    return true
  }

  get excludedExts() {
    return [`.sha256`, `.asc`]
  }
}

export class gitea_Gobot extends Gobot {
  get slug(): string {
    return `giteaGobot`
  }
}

export const mk_gitea_Gobot: AppFactory = (optionsIn) => {
  return new gitea_Gobot(
    GITEA_REPO,
    (repo, cacheRoot) => new gitea_GithubReleaseProvider(cacheRoot),
    optionsIn,
  )
}

export const gitea: AppInfo = {
  name: 'gitea',
  description: `Git with a cup of tea! Painless self-hosted all-in-one software development service, including Git hosting, code review, team collaboration, package registry and CI/CD`,
  homepage: `https://about.gitea.com`,
  isAlpha: true,
  factory: mk_gitea_Gobot,
}
