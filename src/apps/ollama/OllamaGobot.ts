import { join } from 'path'
import { Gobot } from '../../Gobot'
import { dbg } from '../../util/log'

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
