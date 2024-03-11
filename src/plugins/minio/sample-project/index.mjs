#!/usr/bin/env node

import { minio } from 'gobot-minio'

// Pass command line arguments and run the binary
minio({ env: process.env }).run(process.argv.slice(2))
