#!/usr/bin/env node

import { gobot } from 'gobot'

// Pass command line arguments and run the binary
gobot(`minio`, { env: process.env }).run(process.argv.slice(2))
