module.exports = {
  publicPath: process.env.VUE_APP_BASE,
  css: {
    loaderOptions: {
      less: {
	      javascriptEnabled: true
      }
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    proxy: {
      '^/?([a-zA-Z]+)?/api': {
        target: 'http://localhost:8080',
        ws: true,
        changeOrigin: true
      }
    }
  },
  transpileDependencies: []
}
