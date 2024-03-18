export type AppInfo = {
  name: string
  description: string
  homepage: string
  slug: string
  isAlpha: boolean
  version?: string
}

export const APPS_MAP: AppInfo[] = [
  {
    name: `act`,
    slug: 'Act',
    description: `Run your GitHub Actions locally 🚀`,
    homepage: `https://nektosact.com/`,
    isAlpha: true,
  },
  {
    name: `age`,
    slug: 'Age',
    description: `A simple, modern and secure encryption tool (and Go library) with small explicit keys, no config options, and UNIX-style composability.`,
    homepage: `https://age-encryption.org/`,
    isAlpha: true,
  },
  {
    name: `AdGuardHome`,
    slug: `AdGuardHome`,
    description: `Network-wide ads & trackers blocking DNS server`,
    homepage: `https://adguard.com/adguard-home.html`,
    isAlpha: true,
  },
  {
    name: `backrest`,
    slug: `Backrest`,
    description: `Backrest is a web UI and orchestrator for restic backup.`,
    homepage: `https://github.com/garethgeorge/backrest`,
    isAlpha: true,
  },
  {
    name: `caddy`,
    slug: `Caddy`,
    description: `Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS`,
    homepage: `https://caddyserver.com/`,
    isAlpha: true,
  },
  {
    name: `fzf`,
    slug: `fzf`,
    description: `🌸 A command-line fuzzy finder`,
    homepage: `https://github.com/junegunn/fzf`,
    isAlpha: true,
  },
  {
    name: `gptscript`,
    slug: `GPTScript`,
    description: `Natural Language Programming.`,
    homepage: `https://gptscript.ai/`,
    isAlpha: true,
  },
  {
    name: `hugo`,
    slug: `Hugo`,
    description: `The world’s fastest framework for building websites.`,
    homepage: `https://gohugo.io/`,
    isAlpha: true,
  },
  {
    name: `lazygit`,
    slug: `Lazygit`,
    description: `simple terminal UI for git commands`,
    homepage: `https://github.com/jesseduffield/lazygit`,
    isAlpha: true,
  },
  {
    name: `loki`,
    slug: `Loki`,
    description: `Like Prometheus, but for logs.`,
    homepage: `https://grafana.com/loki`,
    isAlpha: true,
  },
  {
    name: `mc`,
    description: `The Object Store for AI Data Infrastructure (client)`,
    homepage: `https://min.io`,
    slug: `Mc`,
    isAlpha: true,
  },
  {
    name: `minio`,
    description: `The Object Store for AI Data Infrastructure (server)`,
    homepage: `https://min.io`,
    slug: `Minio`,
    isAlpha: true,
  },
  {
    name: `ollama`,
    slug: `Ollama`,
    description: `Get up and running with Llama 2, Mistral, Gemma, and other large language models.`,
    homepage: `https://ollama.com/`,
    isAlpha: true,
  },
  {
    name: `pulumi`,
    slug: `Pulumi`,
    description: `Pulumi - Infrastructure as Code in any programming language. Build infrastructure intuitively on any cloud using familiar languages 🚀`,
    homepage: `https://www.pulumi.com`,
    isAlpha: true,
  },
  {
    name: `pocketbase`,
    description: `Open Source realtime backend in 1 file`,
    homepage: `https://pocketbase.io`,
    slug: `PocketBase`,
    isAlpha: true,
  },
  {
    name: `rclone`,
    slug: `RClone`,
    description: `rsync for cloud storage" - Google Drive, S3, Dropbox, Backblaze B2, One Drive, Swift, Hubic, Wasabi, Google Cloud Storage, Yandex Files`,
    homepage: `https://rclone.org/`,
    isAlpha: true,
  },
  {
    name: `restic`,
    slug: `Restic`,
    description: `Fast, secure, efficient backup program.`,
    homepage: `https://restic.net/`,
    isAlpha: true,
  },
  {
    name: `reviewdog`,
    slug: `reviewdog`,
    description: `🐶 Automated code review tool integrated with any code analysis tools regardless of programming language`,
    homepage: `https://medium.com/@haya14busa/reviewdog-a-code-review-dog-who-keeps-your-codebase-healthy-d957c471938b#.8xctbaw5u`,
    isAlpha: true,
  },
  {
    name: `weaviate`,
    slug: `Weaviate`,
    description: `Weaviate is an open source vector database that stores both objects and vectors, allowing for combining vector search with structured filtering with the fault-tolerance and scalability of a cloud-native database, all accessible through GraphQL, REST, and various language clients.`,
    homepage: `https://weaviate.io`,
    isAlpha: true,
  },
  {
    name: 'syncthing',
    slug: 'syncthing',
    description: 'Open Source Continuous File Synchronization',
    homepage: 'https://forum.syncthing.net/',
    isAlpha: true,
  },
  {
    name: 'weed',
    slug: 'SeaweedFS',
    description:
      'SeaweedFS is a fast distributed storage system for blobs, objects, files, and data lake, for billions of files! Blob store has O(1) disk seek, cloud tiering. Filer supports Cloud Drive, cross-DC active-active replication, Kubernetes, POSIX FUSE mount, S3 API, S3 Gateway, Hadoop, WebDAV, encryption, Erasure Coding.',
    homepage: 'https://github.com/seaweedfs/seaweedfs',
    isAlpha: true,
  },
  {
    name: 'cue',
    slug: 'CUE',
    description:
      'The home of the CUE language! Validate and define text-based and dynamic configuration',
    homepage: 'https://cuelang.org',
    isAlpha: true,
  },
  // #app-gen
]
