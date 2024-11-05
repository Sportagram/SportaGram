import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/MyPage.css';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { teamData } from '../components/TeamData';

function MyPage() {
    const [nickname, setNickname] = useState('');
    const [team, setTeam] = useState('');
    const [nicknameError, setNicknameError] = useState('');
    const [darkMode, setDarkMode] = useState(false);
    const [profileImage, setProfileImage] = useState('/logo192.png');

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

        const storedTeam = localStorage.getItem('selectedTeam');
        if (storedTeam) {
            setTeam(storedTeam);
        }

        const storedDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(storedDarkMode);

        const storedProfileImage = localStorage.getItem('profileImage');
        if (storedProfileImage) {
            setProfileImage(storedProfileImage);
        }
    }, []);

    const handleNicknameChange = (e) => {
        setNickname(e.target.value);
    };

    const handleTeamChange = (e) => {
        setTeam(e.target.value);
    };

    const handleDarkModeToggle = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    const handleProfileImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        if (!nickname) {
            setNicknameError('닉네임을 입력해 주세요.');
            return;
        } else if (nickname === '푸른피의에이스') {
            setNicknameError('이미 존재하는 닉네임입니다.');
            return;
        } else {
            setNicknameError('');
        }

        localStorage.setItem('nickname', nickname);
        localStorage.setItem('selectedTeam', team);
        localStorage.setItem('darkMode', darkMode);
        localStorage.setItem('profileImage', profileImage);
        alert('설정이 저장되었습니다.');
    };

    return (
        <div className={`mypage-container ${darkMode ? 'dark-mode' : ''}`}>
            <Sidebar />
            <div className="mypage-content">
                <h2>마이페이지</h2>
                <div className="profile-settings">
                    <div className="setting-item">
                        <label>선호 팀 설정</label>
                        <select value={team} onChange={handleTeamChange}>
                            <option value="">팀을 선택하세요</option>
                            {teamData.map((team) => (
                                <option key={team.id} value={team.name}>{team.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="setting-item">
                        <label>닉네임 변경</label>
                        <input
                            type="text"
                            placeholder="ex) 푸른피의에이스"
                            value={nickname}
                            onChange={handleNicknameChange}
                            className={nicknameError ? 'error' : ''}
                        />
                        {nicknameError && <p className="error-message">{nicknameError}</p>}
                    </div>
                    <div className="setting-item">
                        <label>프로필 사진 변경</label>
                        <input type="file" accept="image/*" onChange={handleProfileImageChange} />
                        <img src={profileImage} alt="프로필" className="profile-preview" />
                    </div>
                    <div className="setting-item">
                        <label>다크모드 변경</label>
                        <label className="switch">
                            <input type="checkbox" checked={darkMode} onChange={handleDarkModeToggle} />
                            <span className="slider round"></span>
                        </label>
                    </div>
                </div>
                <button className="save-button" onClick={handleSave}>저장</button>
            </div>
        </div>
    );
}

export default MyPage;
