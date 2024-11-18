// import React, { useState, useEffect } from 'react';
// import Sidebar from '../components/Sidebar';
// import '../styles/MyPage.css';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { teamData } from '../components/TeamData';
//
// function MyPage() {
//     const [nickname, setNickname] = useState('');
//     const [team, setTeam] = useState('');
//     const [nicknameError, setNicknameError] = useState('');
//     const [darkMode, setDarkMode] = useState(false);
//     const [profileImage, setProfileImage] = useState('/logo192.png');
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
//
//         const storedNickname = localStorage.getItem('nickname');
//         if (storedNickname) {
//             setNickname(storedNickname);
//         }
//
//         const storedTeam = localStorage.getItem('selectedTeam');
//         if (storedTeam) {
//             setTeam(storedTeam);
//         }
//
//         const storedDarkMode = localStorage.getItem('darkMode') === 'true';
//         setDarkMode(storedDarkMode);
//
//         const storedProfileImage = localStorage.getItem('profileImage');
//         if (storedProfileImage) {
//             setProfileImage(storedProfileImage);
//         }
//     }, []);
//
//     const handleNicknameChange = (e) => {
//         setNickname(e.target.value);
//     };
//
//     const handleTeamChange = (e) => {
//         setTeam(e.target.value);
//     };
//
//     const handleDarkModeToggle = () => {
//         setDarkMode((prevMode) => !prevMode);
//     };
//
//     const handleProfileImageChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = () => {
//                 setProfileImage(reader.result);
//             };
//             reader.readAsDataURL(file);
//         }
//     };
//
//     const handleSave = () => {
//         if (!nickname) {
//             setNicknameError('닉네임을 입력해 주세요.');
//             return;
//         } else if (nickname === '푸른피의에이스') {
//             setNicknameError('이미 존재하는 닉네임입니다.');
//             return;
//         } else {
//             setNicknameError('');
//         }
//
//         localStorage.setItem('nickname', nickname);
//         localStorage.setItem('selectedTeam', team);
//         localStorage.setItem('darkMode', darkMode);
//         localStorage.setItem('profileImage', profileImage);
//         alert('설정이 저장되었습니다.');
//     };
//
//     return (
//         <div className={`mypage-container ${darkMode ? 'dark-mode' : ''}`}>
//             <Sidebar />
//             <div className="mypage-content">
//                 <div className="page-header">
//                     <h2>마이페이지</h2>
//                     <p>선수님의 정보를 확인하고 수정할 수 있어요.</p>
//                 </div>
//                 <div className="profile-settings">
//                     <div className="setting-item">
//                         <label>선호 팀 설정</label>
//                         <select value={team} onChange={handleTeamChange}>
//                             <option value="">팀을 선택하세요</option>
//                             {teamData.map((team) => (
//                                 <option key={team.id} value={team.teamCall}>{team.name}</option>
//                             ))}
//                         </select>
//                     </div>
//                     <div className="setting-item">
//                         <label>닉네임 변경</label>
//                         <input
//                             type="text"
//                             placeholder="ex) 푸른피의에이스"
//                             value={nickname}
//                             onChange={handleNicknameChange}
//                             className={nicknameError ? 'error' : ''}
//                         />
//                         {nicknameError && <p className="error-message">{nicknameError}</p>}
//                     </div>
//                     <div className="setting-item">
//                         <label>프로필 사진 변경</label>
//                         <input type="file" accept="image/*" onChange={handleProfileImageChange} />
//                         <img src={profileImage} alt="프로필" className="profile-preview" />
//                     </div>
//                     <div className="setting-item">
//                         <label>다크모드 변경</label>
//                         <label className="switch">
//                             <input type="checkbox" checked={darkMode} onChange={handleDarkModeToggle} />
//                             <span className="slider round"></span>
//                         </label>
//                     </div>
//                 </div>
//                 <button className="save-button" onClick={handleSave}>저장</button>
//             </div>
//         </div>
//     );
// }
//
// export default MyPage;

import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/MyPage.css';
import axios from 'axios'; // 백엔드와의 통신을 위해 axios를 사용합니다.

function MyPage() {
    const [nickname, setNickname] = useState('');
    const [team, setTeam] = useState('');
    const [teams, setTeams] = useState([]); // 팀 목록을 저장하기 위한 상태
    const [nicknameError, setNicknameError] = useState('');
    const [darkMode, setDarkMode] = useState(false);
    const [profileImage, setProfileImage] = useState('/logo192.png');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // 사용자 및 팀 정보를 가져오는 useEffect
    useEffect(() => {
        // 백엔드에서 사용자 정보 가져오기
        axios.get('http://localhost:8080/api/user', { withCredentials: true })
            .then(response => {
                if (response.data) {
                    const user = response.data;
                    setIsLoggedIn(true);
                    setNickname(user.nickName || '');
                    setTeam(user.myTeam || '');
                    setProfileImage(user.profileImage || '/logo192.png');
                    setDarkMode(user.darkMode || false);
                }
            })
            .catch(error => {
                console.log('사용자 정보를 가져오지 못했습니다.', error);
            });

        // 백엔드에서 팀 목록 가져오기
        axios.get('http://localhost:8080/api/teams')
            .then(response => {
                setTeams(response.data); // 가져온 팀 목록을 상태에 저장
            })
            .catch(error => {
                console.log('팀 목록을 가져오지 못했습니다.', error);
            });
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
        } else {
            setNicknameError('');
        }

        // 사용자 정보를 저장하기 위한 백엔드 요청
        axios.post('http://localhost:8080/api/user/save', {
            nickname,
            selectedTeam: team,
            darkMode,
            profileImage
        }, { withCredentials: true })
            .then(() => {
                alert('설정이 저장되었습니다.');
            })
            .catch(error => {
                console.log('설정을 저장하지 못했습니다.', error);
            });
    };

    return (
        <div className={`mypage-container ${darkMode ? 'dark-mode' : ''}`}>
            <Sidebar />
            <div className="mypage-content">
                <div className="page-header">
                    <h2>마이페이지</h2>
                    <p>선수님의 정보를 확인하고 수정할 수 있어요.</p>
                </div>
                <div className="profile-settings">
                    <div className="setting-item">
                        <label>선호 팀 설정</label>
                        <select value={team} onChange={handleTeamChange}>
                            <option value="">팀을 선택하세요</option>
                            {teams.map((team) => (
                                <option key={team.teamID} value={team.teamID}>
                                    {team.teamName}
                                </option>
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


