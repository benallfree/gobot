import { GobotOptions } from '../../Gobot'
import { AppFactory } from '../index'
import { MinioGobot } from './MinioGobot'
import { MinioReleaseProvider } from './MinioReleaseProvider'

export const mkMinioServerBot: AppFactory = (
  optionsIn: Partial<GobotOptions> = {},
) => {
  const repo = `minio/minio`
  return new MinioGobot(
    repo,
    (cacheRoot) =>
      new MinioReleaseProvider(
        repo,
        cacheRoot,
        `https://dl.min.io/server/minio/release`,
        'minio',
      ),
    optionsIn,
  )
}
