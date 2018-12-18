const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ['vue-style-loader', 'css-loader', 'less-loader']
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    inline: true,
    hot: true,
    contentBase: './example'
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
})
