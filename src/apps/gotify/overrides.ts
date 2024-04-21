import { chmodSync } from 'fs'
import type { AppFactory } from '..'
import { GithubReleaseProvider } from '../../GithubReleaseProvider'
import { Gobot } from '../../Gobot'

export const GOTIFY_REPO = 'gotify/server'

class gotify_GithubReleaseProvider extends GithubReleaseProvider {
  get className() {
    return `gotify_GithubReleaseProvider`
  }
}

class gotify_Gobot extends Gobot {
  get className(): string {
    return `gotify_Gobot`
  }

  async unpack(downloadPath: string, version: string) {
    if (this.os !== 'win32') {
      chmodSync(downloadPath, '755')
    }
  }
}

export const mkGotify: AppFactory = (optionsIn) => {
  return new gotify_Gobot(
    GOTIFY_REPO,
    (root, cacheRoot) => new gotify_GithubReleaseProvider(root, cacheRoot),
    optionsIn,
  )
}
