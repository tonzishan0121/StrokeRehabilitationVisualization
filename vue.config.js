const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const resolve = dir => {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: './',
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('_c', resolve('src/components')) // key,value自行定义，比如.set('@@', resolve('src/components'))
  },
  productionSourceMap: false, // 关闭 sourcemap 减小体积
  configureWebpack: {
    plugins: [
      new BundleAnalyzerPlugin({ 
        analyzerMode: 'static', 
        openAnalyzer: false 
      })
    ],
    performance: {
      hints: 'warning',
      maxAssetSize: 2 * 1024 * 1024, // 2MB 告警阈值
      maxEntrypointSize: 2 * 1024 * 1024
    }
  }
}