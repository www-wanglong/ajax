const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

// 判断运行参数 区分环境
module.exports = (env, argv) => {
  const config = {
    mode: 'development',
    entry: './src/main.js',
    output: {
      filename: 'js/bundle.js'
    },
    devtool: 'source-map',
    devServer: {
      //hot: true,
      hotOnly: true //不会刷新浏览器
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(png|jpg)$/,
          use: 'file-loader'
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'webpack tutorial',
        template: 'src/index.html'
      }),
      new webpack.HotModuleReplacementPlugin()
    ]
  }

  if (env === 'production') {
    config.mode = 'production'
    config.devtool = false
    config.plugins = [
      ...config.plugins,
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin(['public'])
    ]
  }
  return config
}


