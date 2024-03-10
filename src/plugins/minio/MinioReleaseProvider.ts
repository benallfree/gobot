import {
  GithubReleaseProvider,
  GithubReleaseProviderOptions,
} from '../../GithubReleaseProvider'
import type { GithubRelease, StoredRelease } from '../../Gobot'
import { dbg } from '../../util/log'

export class MinioReleaseProvider extends GithubReleaseProvider {
  endpoint: string
  binName: string

  constructor(
    repo: string,
    cacheRoot: string,
    endpoint: string,
    binName: string,
    optionsIn: Partial<GithubReleaseProviderOptions> = {},
  ) {
    super(repo, cacheRoot, optionsIn)
    this.endpoint = endpoint
    this.binName = binName
    dbg(`MinioReleaseProvider bin name`, this.binName)
  }

  get slug() {
    return `MinioReleaseProvider`
  }

  extractVersionFromTag(tag: string): string {
    const [junk, date] = tag.split(`.`)
    return date!
  }

  isValidRelease(release: GithubRelease): boolean {
    return release.tag_name.startsWith(`RELEASE.`)
  }

  getArchivesForRelease(release: GithubRelease): StoredRelease['archives'] {
    const archives: StoredRelease['archives'] = {
      win32: {
        x64: `${this.endpoint}/windows-amd64/archive/${this.binName}.${release.tag_name}`,
      },
      darwin: {
        arm64: `${this.endpoint}/darwin-amd64/archive/${this.binName}.${release.tag_name}`,
        x64: `${this.endpoint}/darwin-arm64/archive/${this.binName}.${release.tag_name}`,
      },
      linux: {
        arm64: `${this.endpoint}/linux-amd64/archive/${this.binName}.${release.tag_name}`,
        x64: `${this.endpoint}/linux-arm64/archive/${this.binName}.${release.tag_name}`,
      },
    }
    dbg(`Release archives`, archives)
    return archives
  }
}
