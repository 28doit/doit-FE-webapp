const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://183.106.127.55:8080',
      changeOrigin: true,
    }),
  );
};
