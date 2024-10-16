import React from 'react';
import '../styles/UserProfile.css';

function UserProfile() {
    return (
        <div className="user-profile">
            <img src="/logo192.png" alt="프로필" className="profile-image" />
            <h4>My NickName</h4>
            <button>로그아웃</button>
        </div>
    );
}

export default UserProfile;