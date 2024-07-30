#!/usr/bin/env node

import { cliForApp } from 'gobot'
import { meta } from './meta'

const program = cliForApp(meta)
program.parseAsync(process.argv)
