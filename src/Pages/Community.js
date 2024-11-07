import React, { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import Sidebar from "../components/Sidebar";
import '../styles/Community.css';

const socket = io('http://localhost:8080'); // Socket.IO 서버 주소

const Community = () => {
    const [messages, setMessages] = useState([]); // 채팅 메시지 저장
    const [input, setInput] = useState(''); // 입력 필드 상태
    const nickname = localStorage.getItem('nickname');
    const chatContainerRef = useRef(null); // 스크롤 관리를 위한 Ref
    const selectedTeam = localStorage.getItem('selectedTeam');

    useEffect(() => {
        const savedMessages = JSON.parse(localStorage.getItem("chatMessages")) || [];
        setMessages(savedMessages); // 불러온 메시지 설정

        // 서버에서 수신한 메시지를 상태와 localStorage에 저장
        socket.on('chat message', (data) => {
            const { nickname, message, timestamp } = data;
            const newMessage = { nickname, message, timestamp };
            setMessages((prevMessages) => {
                const updatedMessages = [newMessage, ...prevMessages]; // 새로운 메시지를 앞에 추가

                // 업데이트된 메시지를 localStorage에 저장
                localStorage.setItem("chatMessages", JSON.stringify(updatedMessages));

                return updatedMessages;
            });
        });

        // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
        return () => {
            socket.off('chat message');
        };
    }, []);

    useEffect(() => {
        // 새로운 메시지가 생길 때마다 스크롤을 맨 위로 이동
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = 0;
        }
    }, [messages]);

    // 메시지 전송 함수
    const sendMessage = () => {
        if (input) {
            const timestamp = Date.now(); // 메시지 전송 시각

            // 서버에 닉네임과 메시지, 타임스탬프 전송
            socket.emit('chat message', { nickname, message: input, timestamp });

            // 자신이 보낸 메시지도 상태와 localStorage에 저장
            const newMessage = { nickname, message: input, timestamp };
            setMessages((prevMessages) => {
                const updatedMessages = [...prevMessages]; // 새로운 메시지를 앞에 추가
                localStorage.setItem("chatMessages", JSON.stringify(updatedMessages)); // localStorage에 저장
                return updatedMessages;
                console.log(selectedTeam);
            });

            setInput(''); // 입력 필드 초기화
        }
    };

    const getBackgroundImage = (team) => {
        return `${process.env.PUBLIC_URL}/teamBackgrounds/${team.toLowerCase().replace(/\s+/g, '')}.png`;
    };

    return (
        <div
            className="community-container"
            style={{
                backgroundImage: `url(${getBackgroundImage(selectedTeam)})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Sidebar/>
            <div className="community-content">
                <div className="page-header">
                    <h2>라커룸</h2>
                    <p>선수님의 팀원들과 소통할 수 있어요.</p>
                </div>
                <div className="community-mychat">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="채팅을 입력해 주세요."
                    />
                    <button onClick={sendMessage}>보내기</button>
                </div>
                <div className="community-chatcontent" ref={chatContainerRef}>
                    <div className="community-allchat">
                        {messages.map((msg, idx) => (
                            <div key={idx} className="community-message">
                                <img
                                    src={process.env.PUBLIC_URL + '/profile.png'}
                                    alt="프로필 이미지"
                                    className="profile-img"
                                />
                                <div className="message-content">
                                    <span className="nickname">{msg.nickname}</span>
                                    <span className="message-text">{msg.message}</span>
                                    <span className="message-time">
                                        {new Date(msg.timestamp).toLocaleTimeString()}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Community;
