const webpack = require('webpack')

module.exports = {
  mode: 'none',
  entry: './src/main.js',
  output: {
    filename: 'js/bundle.js'
  },
  optimization: {
    usedExports: true,// 只导出使用的导出
    minimize: true,
    concatenateModules: true, // 将使用的模块合并到一个函数中输出
  },
  plugins: [
    new webpack.DefinePlugin({
      API_BASE: JSON.stringify('https://api')
    })
  ]
}


