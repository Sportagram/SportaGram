// import React, { useState } from 'react';
// import Sidebar from '../components/Sidebar';
// import '../styles/FanSelect.css';
// import TeamSlider from "../components/TeamSlider";
// import { teamData } from "../components/TeamData";
//
// function FanSelect() {
//     const [slideIndex, setSlideIndex] = useState(1);
//
//     const handleComplete = () => {
//         const currentTeam = teamData.find((team) => team.id === slideIndex);
//         if (!currentTeam) {
//             alert('팀을 선택해 주세요');
//         } else {
//             localStorage.setItem('selectedTeam', currentTeam.teamCall);
//             localStorage.setItem('selectedTeamName', currentTeam.name); // 팀 이름도 저장
//             window.location.href = '/setprofile';
//         }
//     };
//
//     return (
//         <div className="fanselect-page-container">
//             <Sidebar />
//             <div className="fanselect-content">
//                 <h2>어느 팀의 팬이세요?</h2>
//                 <div className="team-selection">
//                     <div className="team-logos-grid">
//                         {/* 상태와 상태 변경 함수 전달 */}
//                         <TeamSlider slideIndex={slideIndex} setSlideIndex={setSlideIndex} />
//                     </div>
//                     <button className="complete-button" onClick={handleComplete}>완료</button>
//                 </div>
//             </div>
//         </div>
//     );
// }
//
// export default FanSelect;

// import React, { useEffect, useState } from 'react';
// import Sidebar from '../components/Sidebar';
// import '../styles/FanSelect.css';
// import TeamSlider from "../components/TeamSlider";
// import { teamData } from "../components/TeamData";
// import { useNavigate } from 'react-router-dom';
// import apiClient from '../Login/apiClient';  // Axios 클라이언트 불러오기
//
// function FanSelect() {
//     const [slideIndex, setSlideIndex] = useState(1);
//     const navigate = useNavigate();
//
//     useEffect(() => {
//         // JWT 토큰 확인 (로그인 여부 확인)
//         const checkAuthStatus = async () => {
//             try {
//                 const response = await apiClient.get('/auth/verify-token');
//                 if (!response.data.valid) {
//                     throw new Error('Unauthorized');
//                 }
//             } catch (error) {
//                 alert('로그인이 필요합니다.');
//                 navigate('/');
//             }
//         };
//         checkAuthStatus();
//     }, [navigate]);
//
//     const handleComplete = async () => {
//         const currentTeam = teamData.find((team) => team.id === slideIndex);
//         if (!currentTeam) {
//             alert('팀을 선택해 주세요');
//         } else {
//             try {
//                 // 선택된 팀 정보를 백엔드에 저장 요청
//                 await apiClient.post('/user/choose-team', {
//                     teamCall: currentTeam.teamCall,
//                     teamName: currentTeam.name,
//                 });
//
//                 localStorage.setItem('selectedTeam', currentTeam.teamCall);
//                 localStorage.setItem('selectedTeamName', currentTeam.name);
//                 navigate('/setprofile');
//             } catch (error) {
//                 console.error(error);
//                 alert('팀 선택에 실패했습니다.');
//             }
//         }
//     };
//
//     return (
//         <div className="fanselect-page-container">
//             <Sidebar />
//             <div className="fanselect-content">
//                 <h2>어느 팀의 팬이세요?</h2>
//                 <div className="team-selection">
//                     <div className="team-logos-grid">
//                         <TeamSlider slideIndex={slideIndex} setSlideIndex={setSlideIndex} />
//                     </div>
//                     <button className="complete-button" onClick={handleComplete}>완료</button>
//                 </div>
//             </div>
//         </div>
//     );
// }
//
// export default FanSelect;


import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import TeamSlider from "../components/TeamSlider";
import '../styles/FanSelect.css';

// 서버 데이터 대신 기본적으로 사용할 팀 데이터 (서버 연결 실패 시 사용)
const fallbackTeamData = [
    {
        id: 1,
        name: '두산 베어스',
        image: 'doosan.png',
        teamCall: 'doosan'
    },
    {
        id: 2,
        name: 'LG 트윈스',
        image: 'lg.png',
        teamCall: 'lg'
    },
    {
        id: 3,
        name: 'KT 위즈',
        image: 'kt.png',
        teamCall: 'kt'
    },
    {
        id: 4,
        name: '한화 이글스',
        image: 'hanhwa.png',
        teamCall: 'hanhwa'
    },
    {
        id: 5,
        name: '키움 히어로즈',
        image: 'kiwoom.png',
        teamCall: 'kiwoom'
    },
    {
        id: 6,
        name: 'SSG 랜더스',
        image: 'ssg.png',
        teamCall: 'ssg'
    },
    {
        id: 7,
        name: 'NC 다이노스',
        image: 'nc.png',
        teamCall: 'nc'
    },
    {
        id: 8,
        name: '롯데 자이언츠',
        image: 'lotte.png',
        teamCall: 'lotte'
    },
    {
        id: 9,
        name: '기아 타이거즈',
        image: 'kia.png',
        teamCall: 'kia'
    },
    {
        id: 10,
        name: '삼성 라이온즈',
        image: 'samsung.png',
        teamCall: 'samsung'
    },
];

function FanSelect() {
    const [slideIndex, setSlideIndex] = useState(1); // 기본값 1로 설정
    const [teamData, setTeamData] = useState(fallbackTeamData); // 기본 팀 데이터로 초기화

    // 완료 버튼 클릭 이벤트 핸들러
    const handleComplete = () => {
        const currentTeam = teamData[slideIndex - 1]; // slideIndex로 현재 선택된 팀 가져오기
        if (!currentTeam) {
            alert('팀을 선택해 주세요');
        } else {
            localStorage.setItem('selectedTeam', currentTeam.teamCall);
            localStorage.setItem('selectedTeamName', currentTeam.name); // 팀 이름 저장
            console.log("currentTeam:", currentTeam); // currentTeam 값 확인
            console.log("teamData:", teamData); // teamData 배열 확인
            console.log("slideIndex:", slideIndex); // 현재 선택된 인덱스 확인

            // 서버 요청 없이 바로 페이지 이동
            window.location.href = '/setprofile'; // 페이지 이동
        }
    };

    return (
        <div className="fanselect-page-container">
            <Sidebar />
            <div className="fanselect-content">
                <h2>어느 팀의 팬이세요?</h2>
                <div className="team-selection">
                    <div className="team-logos-grid">
                        <TeamSlider slideIndex={slideIndex} setSlideIndex={setSlideIndex} teamData={teamData} />
                    </div>
                    <button className="complete-button" onClick={handleComplete}>완료</button>
                </div>
            </div>
        </div>
    );
}

export default FanSelect;




// import React, { useEffect, useState } from 'react';
// import Sidebar from '../components/Sidebar';
// import TeamSlider from "../components/TeamSlider";
// import '../styles/FanSelect.css';
// import axios from 'axios';
//
// // 서버 데이터 대신 기본적으로 사용할 팀 데이터 (서버 연결 실패 시 사용)
// const fallbackTeamData = [
//     {
//         id: '000331incheon',
//         name: 'SSG 랜더스',
//         image: 'ssg.png',
//         teamCall: 'ssg'
//     },
//     {
//         id: '080324seoul',
//         name: '키움 히어로즈',
//         image: 'kiwoom.png',
//         teamCall: '키움'
//     },
//     {
//         id: '110331changwon',
//         name: 'NC 다이노스',
//         image: 'nc.png',
//         teamCall: 'nc'
//     },
//     // ... 나머지 팀 데이터
// ];
//
// function FanSelect() {
//     const [slideIndex, setSlideIndex] = useState(1);
//     const [teamData, setTeamData] = useState(fallbackTeamData);
//
//
//     useEffect(() => {
//         // 서버에서 팀 데이터 가져오기
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8080/api/teams');
//                 const formattedData = response.data.map((team) => ({
//                     id: team.teamID,
//                     name: team.teamName,
//                     image: `/teamIcon/${team.engName}.png`,
//                     teamCall: team.engName,
//                 }));
//                 setTeamData(formattedData);
//             } catch (error) {
//                 console.error("서버에 연결할 수 없어 기본 팀 데이터를 사용합니다:", error);
//                 setTeamData(fallbackTeamData);
//             }
//         };
//
//         fetchData();
//     }, []);
//
//     const handleComplete = async () => {
//         // 인덱스 보정 (React의 slideIndex는 1부터 시작하므로, 배열의 0부터 시작하는 인덱스를 맞추기 위해 -1)
//         const currentTeam = teamData[slideIndex - 1];
//         if (!currentTeam) {
//             alert('팀을 선택해 주세요');
//         } else {
//             localStorage.setItem('selectedTeam', currentTeam.teamCall);
//             localStorage.setItem('selectedTeamName', currentTeam.name);
//
//             // 서버에 선택된 팀 정보 업데이트 요청
//             try {
//                 const token = localStorage.getItem('token');
//                 if (!token) {
//                     alert('로그인이 필요합니다.');
//                     return;
//                 }
//                 const response = await axios.put('http://localhost:8080/api/user/settings', {
//                     myteam: encodeURIComponent(currentTeam.teamCall), // 특수문자 처리
//                     nickname: encodeURIComponent('')
//                 }, {
//                     headers: {
//                         Authorization: `Bearer ${localStorage.getItem('token')}`, // 필요한 경우 인증 토큰 추가
//                     }
//                 });
//
//                 if (response.status === 200) {
//                     // 프로필 업데이트 성공 시
//                     window.location.href = '/setprofile';
//                 } else {
//                     alert('팀 설정 중 오류가 발생했습니다.');
//                 }
//             } catch (error) {
//                 console.error('팀 설정 중 오류가 발생했습니다:', error);
//                 alert('팀 설정 중 오류가 발생했습니다.');
//             }
//         }
//     };
//
//     return (
//         <div className="fanselect-page-container">
//             <Sidebar />
//             <div className="fanselect-content">
//                 <h2>어느 팀의 팬이세요?</h2>
//                 <div className="team-selection">
//                     <div className="team-logos-grid">
//                         <TeamSlider slideIndex={slideIndex} setSlideIndex={setSlideIndex} teamData={teamData} />
//                     </div>
//                     <button className="complete-button" onClick={handleComplete}>완료</button>
//                 </div>
//             </div>
//         </div>
//     );
// }
//
// export default FanSelect;



