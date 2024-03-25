import { AppFactory } from '..'
import { GithubReleaseProvider } from '../../GithubReleaseProvider'
import { Gobot } from '../../Gobot'

export const GITEA_REPO = 'go-gitea/gitea'

export const mk_gitea_Gobot: AppFactory = (optionsIn) => {
  return new Gobot(
    GITEA_REPO,
    (repo, cacheRoot) =>
      new GithubReleaseProvider(repo, cacheRoot, { allowBareFiles: true }),
    optionsIn,
  )
}
