import decompressTar from 'decompress-tar'
import { fileTypeFromBuffer, type FileExtension } from 'file-type'
import { decompress } from 'lzma-native'
import { basename } from 'path'
import { PassThrough } from 'stream'
import unbzip2 from 'unbzip2-stream'
import { gunzip } from 'zlib'

/**
 * Decompress xz, bz, gz
 */
const DECOMPRESSORS: {
  [_ in FileExtension]?: (buf: Buffer) => Promise<Buffer>
} = {
  gz: (buf) =>
    new Promise<Buffer>((resolve, reject) => {
      gunzip(buf, (err, outputBuffer) => {
        if (err) {
          reject(err)
        } else {
          resolve(outputBuffer)
        }
      })
    }),
  xz: (buf) =>
    new Promise<Buffer>((resolve) => {
      decompress(buf, {}, resolve)
    }),
  bz2: (buf) =>
    new Promise<Buffer>((resolve, reject) => {
      const inputStream = new PassThrough()
      const outputStream = new PassThrough()

      inputStream.end(buf)

      inputStream.pipe(unbzip2()).pipe(outputStream)

      let decompressedBuffer: Buffer = Buffer.alloc(0)

      outputStream.on('data', (chunk) => {
        decompressedBuffer = Buffer.concat([decompressedBuffer, chunk])
      })

      outputStream.on('end', () => {
        resolve(decompressedBuffer)
      })

      outputStream.on('error', (err) => {
        reject(err)
      })
    }),
}

export default (opts: { outfile?: string }) =>
  async (input: Buffer | unknown) => {
    if (!Buffer.isBuffer(input)) throw new Error(`Expected Buffer`)

    const { outfile } = opts
    if (!outfile) throw new Error(`Output path name required`)

    const outerType = await fileTypeFromBuffer(input)

    if (!outerType || !(outerType.ext in DECOMPRESSORS)) {
      return []
    }
    const { ext } = outerType

    const buf = await DECOMPRESSORS[ext]!(input)

    const innerType = await fileTypeFromBuffer(buf)
    if (innerType?.ext === 'tar') {
      return decompressTar()(buf)
    }

    // May just be an xz file with no tar
    const ret = [
      {
        path: basename(basename(outfile), '.xz'),
        data: buf,
        type: 'file',
        mode: 0o755,
        mtime: Date.now(),
      },
    ]
    return ret
  }
