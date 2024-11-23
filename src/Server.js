//백엔드 연결 전 임의의 회원간 소통을 위한 자체 서버코드
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000", // 리액트 클라이언트 주소
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    // 클라이언트로부터 메시지 수신
    socket.on('chat message', (data) => {
        io.emit('chat message', data); // 모든 클라이언트에 닉네임과 메시지 브로드캐스트
    });

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

const PORT = 8081;  // 포트 번호 변경
server.listen(PORT, () => {
    console.log(`Listening on *:${PORT}`);
});
