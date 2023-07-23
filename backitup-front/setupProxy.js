const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://orbital-1690142964708.azurewebsites.net/',
      changeOrigin: true,
    })
  );
};
