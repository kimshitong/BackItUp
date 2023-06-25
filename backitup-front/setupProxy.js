const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://orbital-1687703004396.azurewebsites.net/',
      changeOrigin: true,
    })
  );
};
