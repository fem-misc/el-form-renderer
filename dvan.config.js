module.exports = {
  output: {
    html: {
      title: 'el-form-renderer'
    }
  },
  chainWebpack(config) {
    config.resolve.alias
      .set('vue$', 'vue/dist/vue.esm')
  }
}