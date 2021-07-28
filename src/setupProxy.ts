import { createProxyMiddleware } from 'http-proxy-middleware';

module.exports = function (app: any) {
  app.use(
    '/',
    createProxyMiddleware({
      target: 'http://113.52.213.92:8080',
      changeOrigin: true,
    }),
  );
};
