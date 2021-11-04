module.exports = {
  mode: 'development',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_module/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [['@babel/preset-env', {
            useBuiltIns: "usage",
          }], '@babel/preset-react']
        }
      }
    }]
  }
}