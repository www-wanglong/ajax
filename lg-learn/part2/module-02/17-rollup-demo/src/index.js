// 导入模块成员
// import { log } from './logger'
// import messages from './messages'
// import { name, version } from '../package.json'
// import _ from 'lodash-es'
// import cjs from './cjs.module'

// // 使用模块成员
// const msg = messages.hi

// log(msg)
// log(name)
// // log(_.camelCase('hello world'))
// log(cjs)

import('./logger').then(({ log }) => {
  log('code splitting')
})