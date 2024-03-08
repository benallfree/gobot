import { GobotOptions } from '../../Gobot'
import { PluginFactory } from '../index'
import { MinioGobot } from './MinioGobot'
import { MinioReleaseProvider } from './MinioReleaseProvider'

export const mkMinioServerBot: PluginFactory = (
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
