const path = require('path')
module.exports = {
  chainWebpack: (config)=>{
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src/'))
      .set('public', path.resolve(__dirname, 'public/'))
      .set('vue$', 'vue/dist/vue.esm.js')

    config.module
      .rule('svg-icon')
      .test(/\.(svg)(\?.*)?$/)
      .include
      .add([path.resolve(__dirname, 'src/icons')])
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
    config.module
      .rule('svg')
      .exclude
      .add([path.resolve(__dirname, 'src/icons')])
  },
  productionSourceMap: false
}