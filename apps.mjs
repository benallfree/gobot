import { flatMap, times } from '@s-libs/micro-dash'
import { execSync } from 'child_process'
import findUpJson from 'find-up-json'
import { existsSync, readFileSync } from 'fs'
import { markdownTable } from 'markdown-table'

const APPS_MAP = [
  {
    name: `act`,
    description: `Run your GitHub Actions locally 🚀`,
    homepage: `https://github.com/nektos/act`,
    slug: 'Act',
    sample_command: `act-help`,
    sample_args: [`--help`],
    semver: '0.22.*',
  },
  {
    name: `AdGuardHome`,
    slug: `AdGuardHome`,
    description: `Network-wide ads & trackers blocking DNS server`,
    homepage: `https://adguard.com/adguard-home.html`,
    sample_command: `adguardhome-help`,
    sample_args: [`--help`],
    semver: '0.107.*',
  },
  {
    name: `caddy`,
    slug: `Caddy`,
    description: `Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS`,
    homepage: `https://caddyserver.com/`,
    sample_command: `caddy-help`,
    sample_args: [`--help`],
    semver: '2.7.*',
  },
  {
    name: `minio`,
    description: `The Object Store for AI Data Infrastructure (server)`,
    homepage: `https://min.io`,
    slug: `Minio`,
    logo: `minio`,
    sample_command: `minio-help`,
    sample_args: [`--help`],
    semver: '2024-03-07T00-43-48Z',
  },
  {
    name: `mc`,
    description: `The Object Store for AI Data Infrastructure (client)`,
    homepage: `https://min.io`,
    slug: `Mc`,
    logo: `minio`,
    sample_command: `mc-help`,
    sample_args: [`--help`],
    semver: '2024-03-07T00-31-49Z',
  },
  {
    name: `pocketbase`,
    description: `Open Source realtime backend in 1 file`,
    homepage: `https://pocketbase.io`,
    slug: `PocketBase`,
    sample_command: `serve`,
    sample_args: [`serve`],
    semver: '0.22.*',
  },
  {
    name: `pulumi`,
    slug: `Pulumi`,
    description: `Pulumi - Infrastructure as Code in any programming language. Build infrastructure intuitively on any cloud using familiar languages 🚀`,
    homepage: `https://www.pulumi.com`,
    sample_command: `pulumi-help`,
    sample_args: [`--help`],
    semver: '3.108.*',
  },
  {
    name: `rclone`,
    slug: `RClone`,
    description: `rsync for cloud storage" - Google Drive, S3, Dropbox, Backblaze B2, One Drive, Swift, Hubic, Wasabi, Google Cloud Storage, Yandex Files`,
    homepage: `https://rclone.org/`,
    sample_command: `rclone-help`,
    sample_args: [`--help`],
    semver: '1.65.*',
  },
  {
    name: `weaviate`,
    slug: `Weaviate`,
    description: `Weaviate is an open source vector database that stores both objects and vectors, allowing for combining vector search with structured filtering with the fault-tolerance and scalability of a cloud-native database, all accessible through GraphQL, REST, and various language clients.`,
    homepage: `https://weaviate.io`,
    sample_command: `weaviate-help`,
    sample_args: [`--help`],
    semver: '1.24.*',
  },
]

function getCurrentGitBranch() {
  try {
    const branch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim()
    return branch
  } catch (error) {
    console.error('Failed to get current git branch:', error)
    return null
  }
}

const branch = getCurrentGitBranch()

const pkg = findUpJson(`package.json`)

const { version } = pkg.content

const mkLink = (name, url) => `[${name}](${url})`
const code = (content) => `\`${content}\``
const space = (n = 5) => times(n, () => `&nbsp;`).join('')
export const markdown = markdownTable([
  [space(10), code(`<app>`), `What is it?`],
  ...APPS_MAP.sort((a, b) =>
    a.name.toLocaleLowerCase().localeCompare(b.name.toLocaleLowerCase()),
  ).map((app) => {
    const { name, description, homepage, slug, logo } = app
    const hasReadme = slug && existsSync(`./src/plugins/${name}/readme.md`)
    const readmeUrl = `https://github.com/benallfree/gobot/blob/${branch}/src/plugins/${name}/readme.md`
    const logoUrl = `https://raw.githubusercontent.com/benallfree/gobot/${branch}/src/plugins/${name}/logo-50x.png`
    return [
      mkLink(`<img src="${logoUrl}">`, homepage),
      code(name),
      `${description}${hasReadme ? `<br/>${mkLink(`gobot docs`, readmeUrl)}` : ''}`,
      mkLink(`readme`, readmeUrl),
    ]
  }),
])

const postamble = readFileSync(`./postamble.md`).toString()
const cli_options = readFileSync(`./cli_options.md`).toString()

export const actions = [
  {
    type: 'add',
    path: 'readme.md',
    templateFile: 'plop-templates/readme.md',
    force: true,
    data: {
      postamble,
      cli_options,
      apps: markdown,
      branch,
      version,
    },
  },
  ...flatMap(APPS_MAP, (app) => {
    const {
      name,
      description,
      homepage,
      slug,
      logo,
      sample_args,
      sample_command,
    } = app

    const notes = (() => {
      const notesPath = `./src/plugins/${name}/notes.md`
      if (!existsSync(notesPath))
        return 'This section is empty, which means this plugin has no special notes.'
      return readFileSync(notesPath).toString()
    })()

    return [
      {
        type: 'addMany',
        destination: `src/plugins/${name}`, // Target directory
        base: 'plop-templates/plugin',
        templateFiles: 'plop-templates/plugin/**/*', // Pattern to match your template files
        globOptions: { dot: true }, // 👈🏻
        data: {
          ...app,
          apps: markdown,
          postamble,
          cli_options,
          notes,
          branch,
          version,
        },
        force: true,
      },
    ]
  }),
]

console.log({ branch })
