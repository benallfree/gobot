import { existsSync, readFileSync, writeFileSync } from 'fs'
import fetch from 'node-fetch'
import { dirname } from 'path'
import { dbg } from './log'
import { mkdir } from './util'

export const smartFetch = async <TRet>(
  url: string,
  path: string,
): Promise<TRet> => {
  const data = await (async () => {
    try {
      dbg(`Fetching ${url}`)
      const res = await fetch(url)
      if (res.status !== 200) {
        throw new Error(`API appears to be down`)
      }
      const data = (await res.json()) as TRet
      return data
    } catch (e) {
      dbg(`Caught error on fetch: ${e}`)
      if (!existsSync(path)) {
        throw new Error(`API down and no cache`)
      }
      dbg(`Using data from cache`)
      return JSON.parse(readFileSync(path).toString()) as TRet
    }
  })()
  mkdir('-p', dirname(path))
  writeFileSync(path, JSON.stringify(data))
  return data as TRet
}
