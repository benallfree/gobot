#!/usr/bin/env node

import { gobot } from 'gobot'

gobot(`caddy`, {env: process.env }).run(["--help"])
