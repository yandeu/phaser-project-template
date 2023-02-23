const { merge } = require('webpack-merge')
const common = require('./webpack.common')
// Uncomment this to use SW in development
// const path = require('path')
// const { InjectManifest } = require('workbox-webpack-plugin')

const dev = {
  mode: 'development',
  stats: 'errors-warnings',
  devtool: 'eval',
  devServer: {
    open: true
  },
  // Uncomment this to use SW in development
  // plugins: [
  //   new InjectManifest({
  //     swSrc: path.resolve(__dirname, '../pwa/sw.js'),
  //     swDest: 'sw.js',
  //     maximumFileSizeToCacheInBytes: 10000000
  //   })
  // ]
}

module.exports = merge(common, dev)
