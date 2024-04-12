import type { AppFactory } from '..'
import { GithubReleaseProvider } from '../../GithubReleaseProvider'
import { Gobot } from '../../Gobot'

class sftpgoGithubReleaseProvider extends GithubReleaseProvider {
  get className() {
    return `sftpgo_GithubReleaseProvider`
  }

  get allowedExts() {
    return [...super.allowedExts, '.exe']
  }
}
class sftpgoGobot extends Gobot {
  get className(): string {
    return `sftpgo_Gobot`
  }

  async unpack(downloadPath: string, version: string): Promise<void> {
    if (downloadPath.endsWith(`.exe`)) return
    return super.unpack(downloadPath, version)
  }
}

export const mksftpgo: AppFactory = (optionsIn) => {
  return new sftpgoGobot(
    'drakkan/sftpgo',
    (root, cacheRoot) => new sftpgoGithubReleaseProvider(root, cacheRoot),
    optionsIn,
  )
}
