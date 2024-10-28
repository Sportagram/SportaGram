import React, {useEffect} from 'react';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import '../styles/UserProfile.css';

function UserProfile() {
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('User is logged in:', user);
            } else {
                console.log('No user is logged in');
            }
        });
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
            <img src="/logo192.png" alt="프로필" className="profile-image" />
            <h4>My NickName</h4>
            <button onClick={handleLogout}>로그아웃</button>
        </div>
    );
}

export default UserProfile;