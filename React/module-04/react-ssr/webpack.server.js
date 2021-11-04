const path = require('path');
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const nodeExternals = require('webpack-node-externals')

const config = {
  target: 'node',
  entry: './src/server/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  externals: [nodeExternals()] // 排除nod系统模块
}

module.exports = merge(baseConfig, config);