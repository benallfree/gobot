import { AppFactory } from '..'
import { GithubReleaseProvider } from '../../GithubReleaseProvider'
import { COMPRESSED_ARCHIVE_EXTS, Gobot } from '../../Gobot'

class daselGithubReleaseProvider extends GithubReleaseProvider {
  get slug() {
    return `daselGithubReleaseProvider`
  }

  get allowedExts() {
    return [...super.allowedExts, '.exe', '']
  }
}
class daselGobot extends Gobot {
  get slug(): string {
    return `daselGobot`
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
