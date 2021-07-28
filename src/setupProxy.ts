import { createProxyMiddleware } from 'http-proxy-middleware';

module.exports = function (app: any) {
  const targetUrl: any = process.env.REACT_APP_API_URL;
  app.use(
    '/',
    createProxyMiddleware({
      target: targetUrl,
      changeOrigin: true,
    }),
  );
};
