const proxy = require('http-proxy-middleware')

module.exports = function(app){
  app.use(
    '/open',
    proxy({
      target:'https://c.open.163.com',
      changeOrigin:true
    })
  )
  app.use(
    '/vip',
    proxy({
      target:'https://vip.open.163.com',
      changeOrigin:true,
      pathRewrite: {'^/vip' : ''}
    })
  )

  /* app.use(
    proxy({
      proxyTable:{
        '/lala':{
          target:'https://c.open.163.com',
          changeOrigin:true,
          pathRewrite: {'^/lala' : ''}
        },
        '/yeye':{
          target:'https://vip.open.163.com',
          changeOrigin:true,
          pathRewrite: {'^/yeye' : ''}
        }
      }
    })
    
  ) */
}
