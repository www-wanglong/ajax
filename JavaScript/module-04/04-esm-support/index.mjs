import { foo, bar } from './module.mjs'
console.log(foo, bar)

import fs from 'fs'
import _ from 'lodash'

import { writeFileSync } from 'fs' // 内置模块兼容了这种使用
writeFileSync('./foo.txt', 'es module')
console.log(_.camelCase('ES Module'))

//import { camelCase } from 'lodash' // 不能使用这种方式