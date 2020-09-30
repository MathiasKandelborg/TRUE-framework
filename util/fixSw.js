const path = require('path')
const { readFileSync, writeFileSync } = require('fs')

const buf = readFileSync(path.join(__dirname, '/../public/service-worker.js'))

const sw = Buffer.from(buf)
  .toString()
  .replace(/autostatic/g, '_next/static')

writeFileSync(path.join(__dirname, '/../public/service-worker.js'), sw)
