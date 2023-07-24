const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://orbital-1690146023037.azurewebsites.net/',
      changeOrigin: true,
    })
  );
};
