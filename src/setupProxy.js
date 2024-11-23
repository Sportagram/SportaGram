const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    // API 요청을 Spring Boot 서버로 프록시
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:8080',
            changeOrigin: true,
        })
    );

    // Socket.IO 요청을 Socket.IO 서버로 프록시
    app.use(
        '/socket.io',
        createProxyMiddleware({
            target: 'http://localhost:8081',
            changeOrigin: true,
            ws: true, // WebSocket 연결을 허용
        })
    );
};
