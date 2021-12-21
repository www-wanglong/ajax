const fs = require('fs')
const path = require('path')
const { promisify } = require('util')

// function mkDir (dirPath, cb) {
//   let parts = dirPath.split('/')
//   let index = 1

//   function next () {
//     if (index > parts.length) {
//       return cb && cb()
//     }
//     let current = parts.slice(0, index++).join('/')

//     fs.access(current, (err) => {
//       if (err) {
//         fs.mkdir(current, next)
//       } else {
//         next()
//       }
//     })
//   }
//   next()
// }

// mkDir('a/b/c')

// promisify

const access = promisify(fs.access)
const mkdir = promisify(fs.mkdir)

async function myMkdir(dirPath, cb) {
  let paths = dirPath.split('/')
  for (let index = 1; i <= paths.length) {

  }
}