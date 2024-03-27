import type { AppInfo } from '../'

export const weaviate: AppInfo = {
  name: `Weaviate`,
  description: `Weaviate is an open source vector database that stores both objects and vectors, allowing for combining vector search with structured filtering with the fault-tolerance and scalability of a cloud-native database, all accessible through GraphQL, REST, and various language clients.`,
  homepage: `https://weaviate.io`,
  isAlpha: true,
  factory: `weaviate/weaviate`,
}
