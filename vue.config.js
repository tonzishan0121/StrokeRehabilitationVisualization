const path = require('path');
const webpack = require('webpack');
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
  productionSourceMap: true, 
  configureWebpack: {
    plugins: [
      new BundleAnalyzerPlugin({ 
        analyzerMode: 'static', 
        openAnalyzer: false 
      }),
      new webpack.DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(true)
      })
    ]
  },
  transpileDependencies: [
    'vis-data' 
  ]
}