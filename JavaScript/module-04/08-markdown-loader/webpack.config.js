const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const path = require('path')
module.exports = {
  mode: 'none',
  output: {
    filename: 'bundle.js',
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /.md$/,
        use: [
          'html-loader',
          './markdown-loader'
        ],
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}