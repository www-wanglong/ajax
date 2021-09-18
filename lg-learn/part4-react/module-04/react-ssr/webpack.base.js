module.exports = {
  mode: 'development',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_module/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    }]
  }
}