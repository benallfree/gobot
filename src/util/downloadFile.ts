import { createWriteStream } from 'fs'
import fetch from 'node-fetch'
import { info, infoe, rinfo } from './log'

export const downloadFile = async (url: string, path: string) => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.statusText}`)
  }
  const totalSize = response.headers.get('content-length') // Get total size of file, if available
  let downloadedSize = 0 // Track the amount of data downloaded
  let lastLogged = 0 // Track the last amount logged

  const { body } = response
  if (!body) {
    throw new Error(`Expected body here`)
  }

  rinfo(`Downloading`) // Initial log for downloading

  const stream = createWriteStream(path)
  body.on('data', (chunk) => {
    downloadedSize += chunk.length
    // Calculate how many MB have been downloaded since the last log
    const downloadedMB = Math.floor(downloadedSize / 1048576)
    const lastLoggedMB = Math.floor(lastLogged / 1048576)

    if (downloadedMB > lastLoggedMB) {
      // For every 1MB downloaded since the last log, print a dot
      rinfo('.'.repeat(downloadedMB - lastLoggedMB))
      lastLogged = downloadedSize
    }
  })

  body.pipe(stream)

  return new Promise<void>((resolve, reject) => {
    stream.on('finish', () => {
      info(`\nDownload completed ${url}.`) // Newline after download finishes
      resolve()
    })
    stream.on('error', (error) => {
      infoe(`\nDownload failed ${url}.`) // Newline and error message on failure
      reject(error)
    })
  })
}
