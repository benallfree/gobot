import type { AppFactory } from '..'
import { GithubReleaseProvider } from '../../GithubReleaseProvider'
import { Gobot } from '../../Gobot'

export const GOTIFY_REPO = 'gotify/server'

export const mkGotify: AppFactory = (optionsIn) => {
  return new Gobot(
    GOTIFY_REPO,
    (root, cacheRoot) => new GithubReleaseProvider(root, cacheRoot),
    optionsIn,
  )
}
