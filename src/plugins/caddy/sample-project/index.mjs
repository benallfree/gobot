#!/usr/bin/env node

import { caddy } from 'gobot-caddy'

// Pass command line arguments and run the binary
caddy({ env: process.env }).run(process.argv.slice(2))
