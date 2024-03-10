import { GobotOptions } from '../../Gobot'
import { PluginFactory } from '../index'
import { MinioGobot } from '../minio/MinioGobot'
import { MinioReleaseProvider } from '../minio/MinioReleaseProvider'

export const mkMinioClientBot: PluginFactory = (
  optionsIn: Partial<GobotOptions> = {},
) => {
  const repo = `minio/mc`
  return new MinioGobot(
    repo,
    (cacheRoot) =>
      new MinioReleaseProvider(
        repo,
        cacheRoot,
        `https://dl.min.io/client/mc/release`,
        `mc`,
      ),
    optionsIn,
  )
}
