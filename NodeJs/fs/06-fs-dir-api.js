const fs = require('fs')

// 1. access

fs.access('a.txt', (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('有权限')
  }
})

