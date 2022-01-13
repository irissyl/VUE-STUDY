module.exports = {
  lintOnSave: false,
  devServer: {
      overlay: {
          warning: false,
          errors: false
      },
      // 解决跨域
      proxy:  {
        '/api': {
          target: 'http://39.98.123.211', // 目标服务器地址
        }
    }
  },
  
}
