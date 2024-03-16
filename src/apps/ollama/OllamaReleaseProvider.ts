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

  platformRegex(arch: ArchKey, aliases: string[]) {
    return new RegExp(`[_-](?:${aliases.join(`|`)})(?:[_\\-.]|$)`, 'i')
  }

  archRegex(os: PlatformKey, aliases: string[]) {
    if (os === 'darwin') return new RegExp(``)
    return new RegExp(`[_-](?:${aliases.join(`|`)})(?:[_\\-.]|$)`, 'i')
  }
}
