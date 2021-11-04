
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

class MyPlugin {
  apply (compiler) {
    console.log('MyPlugin 启动')
    compiler.hooks.emit.tap('MyPlugin', compilation => {
      for (const name in compilation.assets) {
        if(name.endsWith('.js')) {
          const contents = compilation.assets[name].source()
          const withoutComments = contents.replace(/\/\*\*+\*\//g, '')
          compilation.assets[name] = {
            source: () => withoutComments,
            size: () => withoutComments.length
          }
        }
      }
    })
  }
}

module.exports = {
  mode: 'none',
  output: {
    filename: 'bundle.js',
    // publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /.html$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: ['img:src', 'a:href']
          }
        }
      },
      {
        test: /.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /.png$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10 * 1024
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MyPlugin()
    // new HtmlWebpackPlugin({
    //   title: 'Webpack plugin',
    //   meta:  {

    //   },
    //   template: './src/index.html' // 自定html内容
    // }),
    // new HtmlWebpackPlugin({
    //   filename: 'about.html'
    // })
  ]
}