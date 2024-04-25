import type { AppFactory } from '..'
import { GithubReleaseProvider } from '../../GithubReleaseProvider'
import { Gobot } from '../../Gobot'
import { COMPRESSED_ARCHIVE_EXTS } from '../../constants'

class transfershGithubReleaseProvider extends GithubReleaseProvider {
  get className() {
    return `transfersh_GithubReleaseProvider`
  }

  get allowedExts() {
    return [...super.allowedExts, '.exe', '']
  }
}
class transfershGobot extends Gobot {
  get className(): string {
    return `transfersh_Gobot`
  }

  async unpack(downloadPath: string, version: string): Promise<void> {
    if (downloadPath.endsWith(`.exe`)) return
    if (COMPRESSED_ARCHIVE_EXTS.find((ext) => downloadPath.endsWith(ext))) {
      await super.unpack(downloadPath, version)
    }
  }
}

export const mkTransfersh: AppFactory = (optionsIn) => {
  return new transfershGobot(
    'dutchcoders/transfer.sh',
    (root, cacheRoot) => new transfershGithubReleaseProvider(root, cacheRoot),
    optionsIn,
  )
}
