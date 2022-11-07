const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: process.env.REACT_APP_ENVIRONMENT !== "production" ? process.env.REACT_APP_BACKEND_API_HOST_SERVER : "https://larngear.org/",
      changeOrigin: true
    })
  )
}
