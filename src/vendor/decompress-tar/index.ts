'use strict'
import fileType from 'file-type'
import { isStream } from 'is-stream'
import { Stream } from 'stream'
import { extract as _extract } from 'tar-stream'

export default () => (input: Buffer | Stream) => {
  if (!Buffer.isBuffer(input) && !isStream(input)) {
    return Promise.reject(
      new TypeError(`Expected a Buffer or Stream, got ${typeof input}`),
    )
  }

  if (
    Buffer.isBuffer(input) &&
    (!fileType(input) || fileType(input).ext !== 'tar')
  ) {
    return Promise.resolve([])
  }

  const extract = _extract()
  const files: any[] = []

  extract.on('entry', (header, stream, cb) => {
    const chunk: Uint8Array[] = []

    stream.on('data', (data) => chunk.push(data))
    stream.on('end', () => {
      const file: any = {
        data: Buffer.concat(chunk),
        mode: header.mode,
        mtime: header.mtime,
        path: header.name,
        type: header.type,
      }

      if (header.type === 'symlink' || header.type === 'link') {
        file.linkname = header.linkname
      }

      files.push(file)
      cb()
    })
  })

  const promise = new Promise((resolve, reject) => {
    if (!Buffer.isBuffer(input)) {
      input.on('error', reject)
    }

    extract.on('finish', () => resolve(files))
    extract.on('error', reject)
  })

  // @ts-ignore
  extract.then = promise.then.bind(promise)
  // @ts-ignore
  extract.catch = promise.catch.bind(promise)

  if (Buffer.isBuffer(input)) {
    extract.end(input)
  } else {
    input.pipe(extract)
  }

  return extract
}
