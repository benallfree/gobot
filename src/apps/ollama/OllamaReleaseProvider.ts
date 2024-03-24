import { basename } from 'path'
import { GithubReleaseProvider } from '../../GithubReleaseProvider'
import { ArchKey, PlatformKey } from '../../Gobot'

export class OllamaReleaseProvider extends GithubReleaseProvider {
  get slug() {
    return `OllamaReleaseProvider`
  }

  isArchiveUrlAllowed(url: string) {
    return !basename(url).includes(`.`)
  }

  get allowBareFiles() {
    return true
  }

  archRegex(os: PlatformKey, arch: ArchKey, aliases: string[]) {
    if (os === 'darwin') return new RegExp(``)
    return super.archRegex(os, arch, aliases)
  }
}
