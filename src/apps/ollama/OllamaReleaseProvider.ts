import { basename } from 'path'
import { GithubReleaseProvider } from '../../GithubReleaseProvider'

export class OllamaReleaseProvider extends GithubReleaseProvider {
  get slug() {
    return `OllamaReleaseProvider`
  }

  isArchiveUrlAllowed(url: string) {
    return !basename(url).includes(`.`)
  }
}
