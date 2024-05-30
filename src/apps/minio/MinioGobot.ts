import { join } from 'path'
import { Gobot } from '../../Gobot'
import { dbg } from '../../util/log'

function compareDates(dateStr1: string, dateStr2: string): 0 | 1 | -1 {
  // Function to convert the custom format to a valid ISO 8601 format
  const convertToISOFormat = (dateStr: string): string => {
    return dateStr.replace(/T(\d{2})-(\d{2})-(\d{2})Z$/, 'T$1:$2:$3Z')
  }

  // Convert the dates to ISO 8601 format
  const isoDateStr1 = convertToISOFormat(dateStr1)
  const isoDateStr2 = convertToISOFormat(dateStr2)

  // Create Date objects
  const date1 = new Date(isoDateStr1)
  const date2 = new Date(isoDateStr2)

  // Compare the dates
  if (date1 < date2) {
    return -1
  } else if (date1 > date2) {
    return 1
  } else {
    return 0
  }
}

export class MinioGobot extends Gobot {
  satisfies(version: string, range: string) {
    dbg(`Satisfies`, version, range)
    return range === `*` || version === range
  }

  compare(a: string, b: string) {
    return compareDates(a, b)
  }

  /**
   * minio is distributed as uncompressed, so just name the binary
   */
  archiveFilePathFromUrl(version: string, url: string) {
    const archivePath = join(this.archiveDirPath(version), this.binName)
    dbg(`Archive path`, archivePath)
    return archivePath
  }

  /**
   * minio does not need decompression
   */
  async unpack(downloadPath: string, version: string): Promise<void> {
    // noop
  }
}
