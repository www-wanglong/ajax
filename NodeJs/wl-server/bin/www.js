#! /usr/bin/env node

const { program } = require('commander')

// 配置信息
let options = {
  '-p --port <dir>': {
    'description': 'init server port',
    'example': 'wl-server -p 30000'
  },
  '-d --directory <dir>': {
    'description': 'init server directory',
    'example': 'wl-server -d /'
  }
}
// program.option('-p --port', 'set server port')
function formatConfig (configs, cb) {
  Object.entries(configs).forEach(([key, val]) => {
    cb(key, val)
  })
}

formatConfig(options, (cmd, val) => {
  program.option(cmd, val.description)
})

program.on('--help', () => {
  formatConfig(options, (cmd, val) => {
    console.log(val.example)
  })
})

program.name('wl-server')

let version = require('../package.json').version

program.version(version)

program.parse(process.argv)

