import { createProxyMiddleware } from 'http-proxy-middleware';

module.exports = function (app: any) {
  const targetUrl: any = 'https://222.104.174.222:8080';
  app.use(
    '/',
    createProxyMiddleware({
      target: targetUrl,
      changeOrigin: true,
    }),
  );
};
