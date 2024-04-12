import type { AppFactory } from '..'
import { GithubReleaseProvider } from '../../GithubReleaseProvider'
import { COMPRESSED_ARCHIVE_EXTS, Gobot } from '../../Gobot'

class gotifycGithubReleaseProvider extends GithubReleaseProvider {
  get className() {
    return `gotifyc_GithubReleaseProvider`
  }

  get allowedExts() {
    return [...super.allowedExts, '.exe', '']
  }
}
class gotifycGobot extends Gobot {
  get className(): string {
    return `gotifyc_Gobot`
  }

  get name(): string {
    return `gotifyc`
  }

  async unpack(downloadPath: string, version: string): Promise<void> {
    if (downloadPath.endsWith(`.exe`)) return
    if (COMPRESSED_ARCHIVE_EXTS.find((ext) => downloadPath.endsWith(ext))) {
      await super.unpack(downloadPath, version)
    }
  }
}

export const mkGotifyc: AppFactory = (optionsIn) => {
  return new gotifycGobot(
    'gotify/cli',
    (root, cacheRoot) => new gotifycGithubReleaseProvider(root, cacheRoot),
    optionsIn,
  )
}
