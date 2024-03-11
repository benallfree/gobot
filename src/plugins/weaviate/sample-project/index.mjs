#!/usr/bin/env node

import { weaviate } from 'gobot-weaviate'

// Pass command line arguments and run the binary
weaviate({ env: process.env }).run(process.argv.slice(2))
