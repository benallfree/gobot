#!/usr/bin/env node

import { gobot } from 'gobot'

gobot(`AdGuardHome`, {env: process.env }).run(["--help"])
