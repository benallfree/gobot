import { GobotOptions } from '../../Gobot'
import { AppFactory } from '../index'
import { MinioGobot } from '../minio/MinioGobot'
import { MinioReleaseProvider } from '../minio/MinioReleaseProvider'

export const mkMinioClientBot: AppFactory = (
  optionsIn: Partial<GobotOptions> = {},
) => {
  return new MinioGobot(
    `minio/mc`,
    (repo, cacheRoot) =>
      new MinioReleaseProvider(
        repo,
        cacheRoot,
        `https://dl.min.io/client/mc/release`,
        `mc`,
      ),
    optionsIn,
  )
}
