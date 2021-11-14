const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://larngear.saenyakorn.dev",
      changeOrigin: true
    })
  )
}
