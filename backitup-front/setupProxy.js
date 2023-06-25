const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://orbital-1687676297440.azurewebsites.net/',
      changeOrigin: true,
    })
  );
};
