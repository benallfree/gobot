#!/usr/bin/env node

import { mc } from 'gobot-mc'

// Pass command line arguments and run the binary
mc({ env: process.env }).run(process.argv.slice(2))
