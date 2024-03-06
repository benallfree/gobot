import readdirp from 'readdirp'
import { dbg } from './log'

// Define an interface for the file entry returned by readdirp, if you want more type safety and IntelliSense.
// This is optional and can be expanded based on what properties you need.
interface FileEntry {
  fullPath: string
  // Add other properties from readdirp entries as needed
}

export async function findFileRecursive(
  filename: string,
  directoryPath: string,
): Promise<string | null> {
  let foundFilePath: string | null = null

  for await (const entry of readdirp(directoryPath, {
    fileFilter: filename,
  }) as AsyncIterable<FileEntry>) {
    dbg(`Testing ${entry.fullPath} for ${filename}`)
    foundFilePath = entry.fullPath
    break // Stop searching after the first match
  }

  return foundFilePath
}
