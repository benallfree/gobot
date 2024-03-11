#!/usr/bin/env node

import { {{name}} } from 'gobot-{{name}}'

// Pass command line arguments and run the binary
{{name}}({ env: process.env }).run(process.argv.slice(2))
