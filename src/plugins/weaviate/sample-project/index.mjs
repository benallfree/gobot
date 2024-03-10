#!/usr/bin/env node

import { gobot } from 'gobot'

gobot(`weaviate`, {env: process.env }).run(["--help"])
