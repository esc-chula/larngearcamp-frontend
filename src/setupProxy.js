const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: process.env.REACT_APP_ENVIRONMENT !== "production" ? "https://larngear.saenyakorn.dev" : "https://larngear.in.th/",
      changeOrigin: true
    })
  )
}
