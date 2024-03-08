import { times } from '@s-libs/micro-dash'
import { existsSync } from 'fs'
import { markdownTable } from 'markdown-table'

const APPS_MAP = [
  {
    name: `act`,
    description: `Run your GitHub Actions locally 🚀`,
    homepage: `https://github.com/nektos/act`,
  },
  {
    name: `AdGuardHome`,
    description: `Network-wide ads & trackers blocking DNS server`,
    homepage: `https://adguard.com/adguard-home.html`,
  },
  {
    name: `caddy`,
    description: `Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS`,
    homepage: `https://caddyserver.com/`,
  },
  {
    name: `minio + mc`,
    description: `The Object Store for AI Data Infrastructure`,
    homepage: `https://min.io`,
    slug: `Minio`,
    logo: `minio`,
  },
  {
    name: `pocketbase`,
    description: `Open Source realtime backend in 1 file`,
    homepage: `https://pocketbase.io`,
    slug: `PocketBase`,
  },
  {
    name: `pulumi`,
    description: `Pulumi - Infrastructure as Code in any programming language. Build infrastructure intuitively on any cloud using familiar languages 🚀`,
    homepage: `https://www.pulumi.com`,
  },
  {
    name: `rclone`,
    description: `rsync for cloud storage" - Google Drive, S3, Dropbox, Backblaze B2, One Drive, Swift, Hubic, Wasabi, Google Cloud Storage, Yandex Files`,
    homepage: `https://www.pulumi.com`,
  },
  {
    name: `weaviate`,
    description: `Weaviate is an open source vector database that stores both objects and vectors, allowing for combining vector search with structured filtering with the fault-tolerance and scalability of a cloud-native database, all accessible through GraphQL, REST, and various language clients.`,
    homepage: `https://weaviate.io`,
  },
]

const mkLink = (name, url) => `[${name}](${url})`
const code = (content) => `\`${content}\``
const space = (n = 5) => times(n, () => `&nbsp;`).join('')

export const apps = markdownTable([
  [space(10), code(`<app>`), `What is it?`],
  ...APPS_MAP.sort((a, b) =>
    a.name.toLocaleLowerCase().localeCompare(b.name.toLocaleLowerCase()),
  ).map((app) => {
    const { name, description, homepage, slug, logo } = app
    const hasReadme = slug && existsSync(`./src/plugins/${slug}/readme.md`)
    const readmeUrl = `https://github.com/benallfree/gobot/blob/main/src/plugins/${slug}/readme.md)`
    const logoUrl = `https://raw.githubusercontent.com/benallfree/gobot/main/assets/${logo || name}.png`
    return [
      mkLink(`<img src="${logoUrl}">`, homepage),
      code(name),
      `${description}${hasReadme ? `<br/>${mkLink(`gobot docs`, readmeUrl)}` : ''}`,
    ]
  }),
])
