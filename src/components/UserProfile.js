import React, {useEffect, useState} from 'react';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import '../styles/UserProfile.css';

function UserProfile() {
    const [nickname, setNickname] = useState('');
    const [profileImage, setProfileImage] = useState('');

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('User is logged in:', user);
            } else {
                console.log('No user is logged in');
            }
        });
        const storedNickname = localStorage.getItem('nickname');
        if (storedNickname) {
            setNickname(storedNickname);
        }
        const storedProfileImage = localStorage.getItem('profileImage');
        if (storedProfileImage) {
            setProfileImage(storedProfileImage);
        }
    }, []);

    const handleLogout = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                // 로그아웃 성공 시 로그인 페이지로 이동
                window.location.href = '/';
            })
            .catch((error) => {
                console.error('Logout Error:', error);
            });
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