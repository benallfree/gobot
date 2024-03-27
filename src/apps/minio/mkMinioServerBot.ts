import type { GobotOptions } from '../../Gobot'
import type { AppFactory } from '../index'
import { MinioGobot } from './MinioGobot'
import { MinioReleaseProvider } from './MinioReleaseProvider'

export const mkMinioServerBot: AppFactory = (
  optionsIn: Partial<GobotOptions> = {},
) => {
  return new MinioGobot(
    `minio/minio`,
    (repo, cacheRoot) =>
      new MinioReleaseProvider(
        repo,
        cacheRoot,
        `https://dl.min.io/server/minio/release`,
        'minio',
      ),
    optionsIn,
  )
}
