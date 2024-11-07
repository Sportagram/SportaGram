import React from 'react';
import '../styles/ChatList.css';

// 실시간 채팅을 나타내는 컴포넌트
const chatData = [  // 샘플 채팅 데이터
    { id: 1, name: '채팅닉네임1', message: '아니 요즘 최원태 너무 못하는 거 아님???', time: '2024/06/04 18:00' },
    { id: 2, name: '채팅닉네임2', message: '원태인... 오늘도 호투 부탁해~!', time: '2024/06/04 18:00' },
    { id: 3, name: '채팅닉네임3', message: '화이팅입니다!', time: '2024/06/03 15:00' },
];

function ChatList() {
    return (
        <div className="chat-list">
            {chatData.map((chat) => (
                <div key={chat.id} className="chat-item">
                    <p className="chat-name">{chat.name}</p>
                    <p className="chat-message">{chat.message}</p>
                    <span className="chat-time">{chat.time}</span>
                </div>
            ))}
        </div>
    );
}

export default ChatList;