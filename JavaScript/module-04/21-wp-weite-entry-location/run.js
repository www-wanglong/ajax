let webpack = require('./lgPack')
let options = require('./webpack.config')

let complier = webpack(options)

complier.run(function(err, stats) {
  // console.log(err)
  console.log(stats)
})