import decompressTar from 'decompress-tar'
import fileType from 'file-type'
import { isStream } from 'is-stream'
import { createDecompressor } from 'lzma-native'
import { Stream } from 'stream'

export default () => async (input: Buffer | Stream) => {
  const isBuffer = Buffer.isBuffer(input)
  const type = isBuffer ? fileType(input) : null

  if (!isBuffer && !isStream(input)) {
    return Promise.reject(
      new TypeError(`Expected a Buffer or Stream, got ${typeof input}`),
    )
  }

  if (isBuffer && (!type || type.ext !== 'xz')) {
    return Promise.resolve([])
  }

  const decompressor = createDecompressor()
  const result = decompressTar()(decompressor)

  if (isBuffer) {
    decompressor.end(input)
  } else {
    input.pipe(decompressor)
  }

  return result
}
