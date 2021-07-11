const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
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


