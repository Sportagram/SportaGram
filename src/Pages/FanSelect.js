import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/FanSelect.css';
import TeamSlider from "../components/TeamSlider";
import { teamData } from "../components/TeamData";

function FanSelect() {
    const [slideIndex, setSlideIndex] = useState(1);

    const handleComplete = () => {
        const currentTeam = teamData.find((team) => team.id === slideIndex);
        if (!currentTeam) {
            alert('팀을 선택해 주세요');
        } else {
            localStorage.setItem('selectedTeam', currentTeam.teamCall);
            localStorage.setItem('selectedTeamName', currentTeam.name); // 팀 이름도 저장
            window.location.href = '/setprofile';
        }
    };

    return (
        <div className="fanselect-page-container">
            <Sidebar />
            <div className="fanselect-content">
                <h2>어느 팀의 팬이세요?</h2>
                <div className="team-selection">
                    <div className="team-logos-grid">
                        {/* 상태와 상태 변경 함수 전달 */}
                        <TeamSlider slideIndex={slideIndex} setSlideIndex={setSlideIndex} />
                    </div>
                    <button className="complete-button" onClick={handleComplete}>완료</button>
                </div>
            </div>
        </div>
    );
}

export default FanSelect;
