const path = require('path')
module.exports = {
  chainWebpack: (config)=>{
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src/'))
      .set('public', path.resolve(__dirname, 'public/'))
      .set('vue$', 'vue/dist/vue.esm.js')
  },
  productionSourceMap: false
}