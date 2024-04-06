import decompress from 'decompress'
import decompressUnzip from 'decompress-unzip'
import envPaths from 'env-paths'
import { mkdirSync } from 'fs'
import { globSync } from 'glob'
import { basename, join } from 'path'
import decompressTarZ from '../packages/decompress-tar-z'
import { safeRimraf } from '../src/util/safeRimraf'

async function main() {
  const paths = [
    `/Users/meta/Library/Caches/gobot-nodejs/sftpgo/archives/2.5.6/arm64/darwin/sftpgo_v2.5.6_macOS_arm64.tar.xz`,
    `/Users/meta/Library/Caches/gobot-nodejs/sftpgo/archives/2.5.6/arm64/darwin/man/man1/sftpgo-gen.1.gz`,
    `/Users/meta/Library/Caches/gobot-nodejs/weed/archives/3.64.0/arm64/darwin/darwin_arm64_large_disk.tar.gz`,
    `/Users/meta/Library/Caches/gobot-nodejs/go-gitea/gitea/archives/1.21.8/arm64/darwin/gitea-1.21.8-darwin-10.12-arm64.xz`,
  ]
  for (let i = 0; i < paths.length; i++) {
    const downloadPath = paths[i]!
    const dst = join(envPaths(`gobot`).temp, basename(downloadPath))
    await safeRimraf(dst)
    mkdirSync(dst, { recursive: true })

    console.log({ downloadPath, dst })
    await decompress(downloadPath, dst, {
      plugins: [
        decompressTarZ({ outfile: join(dst, `foo`) }),
        decompressUnzip(),
      ],
    })
    console.log(globSync(join(dst, `**`)))
  }
}

main()
