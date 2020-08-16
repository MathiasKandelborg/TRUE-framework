/** @format */

import { UTILITY } from 'UTILITY'

/*
 * DO NOT IMPORT ANYTHING - except types -  TO THIS FILE
 */

const { PORT = '3333', TITLE = 'TRUE Starter Kit' } = process.env

const DEV = process.env.NODE_ENV !== 'production'

const NODE =
  typeof 'process' !== 'undefined' &&
  process &&
  process.versions &&
  Boolean(process.versions.node)

const BROWSER = typeof window !== 'undefined'

const CONSTANTS: UTILITY.Constants = {
  BROWSER,
  PORT,
  TITLE,
  DEV,
  NODE
}

export default CONSTANTS
