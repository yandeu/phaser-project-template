const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const JavaScriptObfuscator = require('webpack-obfuscator')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const prod = {
  mode: 'production',
  output: {
    filename: 'game.[contenthash].js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          filename: '[name].[contenthash].js'
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist/*.js'], { root: path.resolve(__dirname, '../') }),
    new JavaScriptObfuscator(
      {
        rotateStringArray: true,
        stringArray: true,
        // stringArrayEncoding: 'base64', // disabled by default
        stringArrayThreshold: 0.75
      },
      ['vendors.*.js']
    ),
    new ImageminPlugin({
      disable: false,
      test: /\.(jpe?g|png|gif|svg)$/i,
      cacheFolder: path.resolve('./.cache')
    })
  ]
}

module.exports = merge(common, prod)
