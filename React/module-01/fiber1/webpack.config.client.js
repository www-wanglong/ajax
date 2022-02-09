const path = require('path')

module.exports = {
  target: 'web',
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /mode_modules/,
      use: {
        loader: 'babel-loader'
      }
    }]
  }
}