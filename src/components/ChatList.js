// import React from 'react';
// import '../styles/ChatList.css';
//
// // 실시간 채팅을 나타내는 컴포넌트
// const chatData = [  // 샘플 채팅 데이터
//     { id: 1, name: '채팅닉네임1', message: '아니 요즘 최원태 너무 못하는 거 아님???', time: '2024/06/04 18:00' },
//     { id: 2, name: '채팅닉네임2', message: '원태인... 오늘도 호투 부탁해~!', time: '2024/06/04 18:00' },
//     { id: 3, name: '채팅닉네임3', message: '화이팅입니다!', time: '2024/06/03 15:00' },
// ];
//
// function ChatList() {
//     return (
//         <div className="chat-list">
//             {chatData.map((chat) => (
//                 <div key={chat.id} className="chat-item">
//                     <p className="chat-name">{chat.name}</p>
//                     <p className="chat-message">{chat.message}</p>
//                     <span className="chat-time">{chat.time}</span>
//                 </div>
//             ))}
//         </div>
//     );
// }
//
// export default ChatList;


// 백엔드 기반 ChatList
// import React, { useEffect, useState } from 'react';
// import '../styles/ChatList.css';
// import axios from 'axios';
//
// function ChatList() {
//     const [chatData, setChatData] = useState([]);
//
//     useEffect(() => {
//         // 서버에서 채팅 데이터를 가져오는 함수
//         const fetchChatData = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8080/api/chats');
//                 if (response.data) {
//                     // 최신순으로 정렬하고 최근 3개의 채팅만 가져오기
//                     const recentChats = response.data.sort((a, b) => new Date(b.time) - new Date(a.time)).slice(0, 3);
//                     setChatData(recentChats);
//                 }
//             } catch (error) {
//                 console.error('채팅 데이터를 가져오는 데 실패했습니다:', error);
//             }
//         };
//
//         fetchChatData();
//     }, []);
//
//     return (
//         <div className="chat-list">
//             {chatData.length > 0 ? (
//                 chatData.map((chat) => (
//                     <div key={chat.id} className="chat-item">
//                         <p className="chat-name">{chat.name}</p>
//                         <p className="chat-message">{chat.message}</p>
//                         <span className="chat-time">{chat.time}</span>
//                     </div>
//                 ))
//             ) : (
//                 <p className="no-chat-message">아직 채팅이 없습니다.</p>
//             )}
//         </div>
//     );
// }
//
// export default ChatList;

//LocalStorage 기반 ChatList
import React, { useEffect, useState } from 'react';
import '../styles/ChatList.css';

function ChatList() {
    const [chatData, setChatData] = useState([]);

    useEffect(() => {
        // 로컬 스토리지에서 모든 팀의 채팅 데이터를 가져오기
        const keys = Object.keys(localStorage);
        let allMessages = [];

        // 채팅 메시지 키만 가져오기 (각 키가 'chatMessages_'로 시작)
        keys.forEach(key => {
            if (key.startsWith('chatMessages_')) {
                const teamMessages = JSON.parse(localStorage.getItem(key)) || [];
                allMessages = allMessages.concat(teamMessages);
            }
        });

        // 모든 채팅 메시지를 합치고, 최신순으로 정렬 후 최근 3개만 저장
        const sortedMessages = allMessages
            .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
            .slice(0, 3);

        setChatData(sortedMessages);
    }, []);

    return (
        <div className="chat-list">
            {chatData.length > 0 ? (
                chatData.map((chat, index) => (
                    <div key={index} className="chat-item">
                        {/*<img*/}
                        {/*    src={chat.profileImage || (process.env.PUBLIC_URL + '/profile.png')}*/}
                        {/*    alt="프로필 이미지"*/}
                        {/*    className="profile-img"*/}
                        {/*/>*/}
                        <div className="chat-details">
                            <p className="chat-name">{chat.nickname}</p>
                            <p className="chat-message">{chat.message}</p>
                            <span className="chat-time">{new Date(chat.timestamp).toLocaleString()}</span>
                        </div>
                    </div>
                ))
            ) : (
                <p className="no-chat-message">아직 채팅이 없습니다.</p>
            )}
        </div>
    );
}

export default ChatList;
