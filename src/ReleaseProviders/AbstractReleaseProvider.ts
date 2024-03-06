export type StoredRelease = {
  version: string
  archives: string[]
}

export abstract class AbstractReleaseProvider {
  repo = ''
  cachePath = ''
  constructor(repo: string, cachePath: string) {
    this.repo = repo
    this.cachePath = cachePath
  }

  abstract fetch(force: boolean): Promise<StoredRelease[]>

  static get slug(): string {
    throw new Error(`Abstract`)
  }
}
