#!/usr/bin/env node

import { program } from './cliCommands'

const main = async () => {
  if (process.argv.length < 3) {
    program.help()
  } else {
    program.parseAsync(process.argv)
  }
}

main().catch(console.error)
