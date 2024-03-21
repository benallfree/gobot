import { existsSync, readFileSync, writeFileSync } from 'fs'
import fetch, { RequestInit } from 'node-fetch'
import { dirname } from 'path'
import { dbg } from './log'
import { mkPromiseSingleton } from './mkPromiseSingleton'
import { mkdir } from './shell'
import { stringify } from './stringify'

const _fetch = mkPromiseSingleton(
  async <TRet>(url: string, init?: RequestInit) => {
    dbg(`Fetching ${url}`)
    const res = await fetch(url, init)
    if (res.status !== 200) {
      throw new Error(`API appears to be down`)
    }
    const data = (await res.json()) as TRet
    return data
  },
)

export const smartFetch = async <TRet>(
  url: string,
  path: string,
  init?: RequestInit,
): Promise<TRet> => {
  try {
    dbg(`Fetching`, url)
    const data = await _fetch<TRet>(url)(url, init)
    mkdir(dirname(path))
    dbg(`Writing ${url} to ${path}`)
    writeFileSync(path, stringify(data))
    return data
  } catch (e) {
    dbg(`Caught error on fetch: ${e}`)
    if (!existsSync(path)) {
      throw new Error(`API down and no cache ${url}`)
    }
    dbg(`Using data from cache`)
    return JSON.parse(readFileSync(path).toString()) as TRet
  }
}
