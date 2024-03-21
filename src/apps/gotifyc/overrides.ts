import { globSync } from 'glob'
import { join } from 'path'
import { AppFactory } from '..'
import { GithubReleaseProvider } from '../../GithubReleaseProvider'
import { COMPRESSED_ARCHIVE_EXTS, Gobot } from '../../Gobot'

class gotifycGithubReleaseProvider extends GithubReleaseProvider {
  get slug() {
    return `gotifycGithubReleaseProvider`
  }

  get allowedExts() {
    return [...super.allowedExts, '.exe', '']
  }
}
class gotifycGobot extends Gobot {
  get slug(): string {
    return `gotifycGobot`
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

  async findArchiveBinPath(version: string): Promise<string> {
    const path = this.downloadRoot(version)
    const fname = globSync(join(path, `**`, `*`), { nodir: true })[0]
    if (fname) return fname
    return super.findArchiveBinPath(version)
  }
}

export const mkGotifyc: AppFactory = (optionsIn) => {
  return new gotifycGobot(
    'gotify/cli',
    (root, cacheRoot) => new gotifycGithubReleaseProvider(root, cacheRoot),
    optionsIn,
  )
}