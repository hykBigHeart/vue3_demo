const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, //  引入组件报错  Component name "Demo" should always be multi-word。（添加此代码解决）
})
