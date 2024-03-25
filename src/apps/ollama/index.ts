import { basename, join } from 'path'
import { AppInfo } from '../'
import { GithubReleaseProvider } from '../../GithubReleaseProvider'
import { ArchKey, Gobot, GobotOptions, PlatformKey } from '../../Gobot'
import { dbg } from '../../util/log'
import { AppFactory } from '../index'

export class OllamaGobot extends Gobot {
  /**
   * ollama is distributed as uncompressed, so just name the binary
   */
  downloadPath(version: string, url: string) {
    const downloadPath = join(this.downloadRoot(version), this.binName)
    dbg(`Download path`, downloadPath)
    return downloadPath
  }

  /**
   * ollama does not need decompression
   */
  async unpack(downloadPath: string, version: string): Promise<void> {
    // noop
  }
}

export class OllamaReleaseProvider extends GithubReleaseProvider {
  get slug() {
    return `OllamaReleaseProvider`
  }

  isArchiveUrlAllowed(url: string) {
    return !basename(url).includes(`.`)
  }

  archRegex(os: PlatformKey, arch: ArchKey, aliases: string[]) {
    if (os === 'darwin') return new RegExp(``)
    return super.archRegex(os, arch, aliases)
  }
}

export const mkOllamaBot: AppFactory = (
  optionsIn: Partial<GobotOptions> = {},
) => {
  return new OllamaGobot(
    `ollama/ollama`,
    (repo, cacheRoot) =>
      new OllamaReleaseProvider(repo, cacheRoot, { allowBareFiles: true }),
    optionsIn,
  )
}

export const ollama: AppInfo = {
  name: `Ollama`,
  description: `Get up and running with Llama 2, Mistral, Gemma, and other large language models.`,
  homepage: `https://ollama.com/`,
  isAlpha: true,
  factory: mkOllamaBot,
}
