import { createWriteStream } from 'fs'
import fetch from 'node-fetch'

export const downloadFile = async (url: string, path: string) => {
  const response = await fetch(url)
  if (!response.ok)
    throw new Error(`Failed to fetch ${url}: ${response.statusText}`)
  const { body } = response
  if (!body) {
    throw new Error(`Expected body here`)
  }
  const stream = createWriteStream(path)
  body.pipe(stream)
  return new Promise<void>((resolve, reject) => {
    stream.on('finish', resolve)
    stream.on('error', reject)
  })
}
