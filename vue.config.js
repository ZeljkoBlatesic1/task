const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  },
  devServer: {
    proxy: {
      '/V1': {
          target: 'http://localhost:8000',
          changeOrigin: true,
          pathRewrite: {
              '^/V1': ''
          }
      },
    },
  }
})
