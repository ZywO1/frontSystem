const path = require('path')
const { defineConfig } = require('@vue/cli-service')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('common', resolve('./src/common'))
      .set('components', resolve('./src/components'))
      .set('assets', resolve('./src/assets'))
      .set('api', resolve('./src/api'))
  },
  devServer: {
    proxy: {
      '/development': {
        target: 'http://127.0.0.1:3007',
        // 暂时用mock
        // target: 'http://yd-yapi.4399houtai.com/mock/225',
        pathRewrite: {
          '^/development': '',
        },
        changeOrigin: true,
      },
    }
  },
})
