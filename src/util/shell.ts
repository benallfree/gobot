import shelljs from 'shelljs'

export const pwd = () => shelljs.pwd().toString()

export const { mkdir } = shelljs

export const rimrafSync = (path: string) => shelljs.rm(`-rf`, path)
