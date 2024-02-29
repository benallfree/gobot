import envPaths from 'env-paths'
import { mkdirSync } from 'fs'

const paths = envPaths('pbgo')

export const config = { cachePath: paths.cache, debug: false }

mkdirSync(config.cachePath, { recursive: true })
