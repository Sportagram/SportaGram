// import React, {useEffect, useState} from 'react';
// import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
// import '../styles/UserProfile.css';
//
// function UserProfile() {
//     const [nickname, setNickname] = useState('');
//     const [profileImage, setProfileImage] = useState('');
//
//     useEffect(() => {
//         const auth = getAuth();
//         onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 console.log('User is logged in:', user);
//             } else {
//                 console.log('No user is logged in');
//             }
//         });
//         const storedNickname = localStorage.getItem('nickname');
//         if (storedNickname) {
//             setNickname(storedNickname);
//         }
//         const storedProfileImage = localStorage.getItem('profileImage');
//         if (storedProfileImage) {
//             setProfileImage(storedProfileImage);
//         }
//     }, []);
//
//     const handleLogout = () => {
//         const auth = getAuth();
//         signOut(auth)
//             .then(() => {
//                 // 로그아웃 성공 시 로그인 페이지로 이동
//                 window.location.href = '/';
//             })
//             .catch((error) => {
//                 console.error('Logout Error:', error);
//             });
//     };
//
//     return (
//         <div className="user-profile">
//             <img src={profileImage || '/logo192.png'} alt="프로필" className="profile-image" />
//             <h4>{nickname || 'My NickName'} 선수</h4>
//             <button onClick={handleLogout}>로그아웃</button>
//         </div>
//     );
// }
//
// export default UserProfile;

import React, { useEffect, useState } from 'react';
import '../styles/UserProfile.css';

function UserProfile() {
    const [nickname, setNickname] = useState('');
    const [profileImage, setProfileImage] = useState('');

    useEffect(() => {
        // 백엔드에서 받아온 사용자 정보를 로컬 스토리지에서 가져옵니다.
        const storedNickname = localStorage.getItem('nickname');
        if (storedNickname) {
            setNickname(storedNickname);
        }

        const storedProfileImage = localStorage.getItem('profileImage');
        if (storedProfileImage) {
            setProfileImage(storedProfileImage);
        }
    }, []);

    // 로그아웃 처리: localStorage에서 사용자 정보를 제거하고 로그인 페이지로 이동합니다.
    const handleLogout = () => {
        // 사용자의 인증 정보를 초기화합니다.
        localStorage.removeItem('nickname');
        localStorage.removeItem('profileImage');
        localStorage.removeItem('userEmail');

        // 로그아웃 시 백엔드에서 로그아웃 처리하는 API를 호출할 수도 있습니다.

        // 로그아웃 후 로그인 페이지로 이동합니다.
        window.location.href = '/';
    };

    return (
        <div className="user-profile">
            <img src={profileImage || '/logo192.png'} alt="프로필" className="profile-image" />
            <h4>{nickname || 'My NickName'} 선수</h4>
            <button onClick={handleLogout}>로그아웃</button>
        </div>
    );
}

export default UserProfile;
