import { chmodSync } from 'fs'
import type { AppFactory } from '..'
import { GithubReleaseProvider } from '../../GithubReleaseProvider'
import { Gobot } from '../../Gobot'

export const INCUS_REPO = 'lxc/incus'

export class IncusBot extends Gobot {
  async unpack(downloadPath: string, version: string) {
    chmodSync(downloadPath, '755')
  }
}

export const mkIncus: AppFactory = (optionsIn) => {
  return new IncusBot(
    INCUS_REPO,
    (root, cacheRoot) =>
      new GithubReleaseProvider(root, cacheRoot, { allowBareFiles: true }),
    optionsIn,
  )
}
