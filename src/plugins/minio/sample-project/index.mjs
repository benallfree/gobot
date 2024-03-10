#!/usr/bin/env node

import { gobot } from 'gobot'

gobot(`minio`, {env: process.env }).run(["--help"])
