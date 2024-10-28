import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/SetProfile.css';

function SetProfile() {
    const [nickname, setNickname] = useState('');
    const [nicknameError, setNicknameError] = useState('');
    const userEmail = localStorage.getItem('userEmail');

    const handleNicknameChange = (e) => {
        setNickname(e.target.value);
    };

    const handleComplete = () => {
        if (!nickname) {
            setNicknameError('닉네임을 입력해 주세요.');
        } else if (nickname === '푸른피의에이스') {
            setNicknameError('이미 존재하는 닉네임입니다.');
        } else {
            setNicknameError('');
            localStorage.setItem('nickname', nickname);
            window.location.href = '/configure';
        }
    };

    return (
        <div className="setprofile-page-container">
            <Sidebar />
            <div className="setprofile-content">
                <h2>선수님의 프로필을 설정해 주세요.</h2>
                <div className="profile-input">
                    <label>닉네임</label>
                    <input
                        type="text"
                        placeholder="ex) 푸른피의에이스"
                        value={nickname}
                        onChange={handleNicknameChange}
                        className={nicknameError ? 'error' : ''}
                    />
                    {nicknameError && <p className="error-message">{nicknameError}</p>}
                </div>
                <div className="profile-input">
                    <label>이메일</label>
                    <input type="text" value={userEmail} disabled className="email-input" />
                </div>
                <button className="complete-button" onClick={handleComplete}>완료</button>
            </div>
        </div>
    );
}

export default SetProfile;