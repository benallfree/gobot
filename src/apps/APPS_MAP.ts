export type AppInfo = {
  name: string
  description: string
  homepage: string
  slug: string
  version?: string
}

export const APPS_MAP: AppInfo[] = [
  {
    name: `act`,
    description: `Run your GitHub Actions locally 🚀`,
    homepage: `https://nektosact.com/`,
    slug: 'Act',
  },
  {
    name: `AdGuardHome`,
    slug: `AdGuardHome`,
    description: `Network-wide ads & trackers blocking DNS server`,
    homepage: `https://adguard.com/adguard-home.html`,
  },
  {
    name: `caddy`,
    slug: `Caddy`,
    description: `Fast and extensible multi-platform HTTP/1-2-3 web server with automatic HTTPS`,
    homepage: `https://caddyserver.com/`,
  },
  {
    name: `minio`,
    description: `The Object Store for AI Data Infrastructure (server)`,
    homepage: `https://min.io`,
    slug: `Minio`,
  },
  {
    name: `mc`,
    description: `The Object Store for AI Data Infrastructure (client)`,
    homepage: `https://min.io`,
    slug: `Mc`,
  },
  {
    name: `pocketbase`,
    description: `Open Source realtime backend in 1 file`,
    homepage: `https://pocketbase.io`,
    slug: `PocketBase`,
  },
  {
    name: `pulumi`,
    slug: `Pulumi`,
    description: `Pulumi - Infrastructure as Code in any programming language. Build infrastructure intuitively on any cloud using familiar languages 🚀`,
    homepage: `https://www.pulumi.com`,
  },
  {
    name: `rclone`,
    slug: `RClone`,
    description: `rsync for cloud storage" - Google Drive, S3, Dropbox, Backblaze B2, One Drive, Swift, Hubic, Wasabi, Google Cloud Storage, Yandex Files`,
    homepage: `https://rclone.org/`,
  },
  {
    name: `weaviate`,
    slug: `Weaviate`,
    description: `Weaviate is an open source vector database that stores both objects and vectors, allowing for combining vector search with structured filtering with the fault-tolerance and scalability of a cloud-native database, all accessible through GraphQL, REST, and various language clients.`,
    homepage: `https://weaviate.io`,
  },
  {
    name: `restic`,
    slug: `Restic`,
    description: `Fast, secure, efficient backup program.`,
    homepage: `https://restic.net/`,
  },
  {
    name: `backrest`,
    slug: `Backrest`,
    description: `Backrest is a web UI and orchestrator for restic backup.`,
    homepage: `https://github.com/garethgeorge/backrest`,
  },
  {
    name: `ollama`,
    slug: `Ollama`,
    description: `Get up and running with Llama 2, Mistral, Gemma, and other large language models.`,
    homepage: `https://ollama.com/`,
  },
]
