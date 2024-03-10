#!/usr/bin/env node

import { gobot } from 'gobot'

gobot(`{{{name}}}`, {env: process.env }).run({{{jsonStringify sample_args}}})
