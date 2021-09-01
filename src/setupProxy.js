const { createProxyMiddleware } = require('http-proxy-middleware');

// 나중에 서버 완성하면 추가할 부분
module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'url',
      changeOrigin: true,
    }),
  );
};
