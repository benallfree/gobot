import type { AppFactory } from '..'
import { GithubReleaseProvider } from '../../GithubReleaseProvider'
import { Gobot } from '../../Gobot'
import { COMPRESSED_ARCHIVE_EXTS } from '../../constants'

class daselGithubReleaseProvider extends GithubReleaseProvider {
  get className() {
    return `dasel_GithubReleaseProvider`
  }

  get allowedExts() {
    return [...super.allowedExts, '.exe', '']
  }
}
class daselGobot extends Gobot {
  get className(): string {
    return `dasel_Gobot`
  }

  async unpack(downloadPath: string, version: string): Promise<void> {
    if (downloadPath.endsWith(`.exe`)) return
    if (COMPRESSED_ARCHIVE_EXTS.find((ext) => downloadPath.endsWith(ext))) {
      await super.unpack(downloadPath, version)
    }
  }
}

export const mkDasel: AppFactory = (optionsIn) => {
  return new daselGobot(
    'TomWright/dasel',
    (root, cacheRoot) => new daselGithubReleaseProvider(root, cacheRoot),
    optionsIn,
  )
}
