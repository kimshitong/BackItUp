const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://orbital-1690047930899.azurewebsites.net/7930899.azurewebsites.net/7930899.azurewebsitel.ne-47930899.azurewebsites.net/7930899.azurewebsites.net/',
      changeOrigin: true,
    })
  );
};
