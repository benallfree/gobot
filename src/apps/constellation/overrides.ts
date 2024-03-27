import { chmodSync } from 'fs'
import type { AppFactory } from '..'
import { GithubReleaseProvider } from '../../GithubReleaseProvider'
import { Gobot } from '../../Gobot'

export const CONSTELLATION_REPO = 'edgelesssys/constellation'

export class ConstellationBot extends Gobot {
  async unpack(downloadPath: string, version: string) {
    chmodSync(downloadPath, '755')
  }
}

export const mkConstellation: AppFactory = (optionsIn) => {
  return new ConstellationBot(
    CONSTELLATION_REPO,
    (root, cacheRoot) =>
      new GithubReleaseProvider(root, cacheRoot, { allowBareFiles: true }),
    optionsIn,
  )
}
