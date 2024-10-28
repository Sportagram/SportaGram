import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/FanSelect.css';

function FanSelect() {
    const [selectedTeam, setSelectedTeam] = useState(null);

    const handleTeamSelect = (team) => {
        setSelectedTeam(team);
    };

    const handleComplete = () => {
        if (!selectedTeam) {
            alert('팀을 선택해 주세요');
        } else {
            localStorage.setItem('selectedTeam', selectedTeam);
            window.location.href = '/setprofile';
        }
    };

    return (
        <div className="fanselect-page-container">
            <Sidebar />
            <div className="fanselect-content">
                <h2>어느 팀의 팬이세요?</h2>
                <div className="team-selection">
                    {/* 팀 선택 이미지들 */}
                    <div className="team-logos-grid">
                        <div className="team-logos">
                            <img src={`${process.env.PUBLIC_URL}/teamIcon/doosan.png`} alt="Doosan Bears" onClick={() => handleTeamSelect('Doosan Bears')} />
                            <img src={`${process.env.PUBLIC_URL}/teamIcon/lg.png`} alt="LG Twins" onClick={() => handleTeamSelect('LG Twins')} />
                            <img src={`${process.env.PUBLIC_URL}/teamIcon/kt.png`} alt="KT Wiz" onClick={() => handleTeamSelect('KT Wiz')} />
                            <img src={`${process.env.PUBLIC_URL}/teamIcon/hanhwa.png`} alt="Hanwha Eagles" onClick={() => handleTeamSelect('Hanwha Eagles')} />
                            <img src={`${process.env.PUBLIC_URL}/teamIcon/kiwoom.png`} alt="Kiwoom Heroes" onClick={() => handleTeamSelect('Kiwoom Heroes')} />
                        </div>
                        <div className="team-logos">
                            <img src={`${process.env.PUBLIC_URL}/teamIcon/ssg.png`} alt="SSG Landers" onClick={() => handleTeamSelect('SSG Landers')} />
                            <img src={`${process.env.PUBLIC_URL}/teamIcon/nc.png`} alt="NC Dinos" onClick={() => handleTeamSelect('NC Dinos')} />
                            <img src={`${process.env.PUBLIC_URL}/teamIcon/lotte.png`} alt="Lotte Giants" onClick={() => handleTeamSelect('Lotte Giants')} />
                            <img src={`${process.env.PUBLIC_URL}/teamIcon/kia.png`} alt="KIA Tigers" onClick={() => handleTeamSelect('KIA Tigers')} />
                            <img src={`${process.env.PUBLIC_URL}/teamIcon/samsung.png`} alt="Samsung Lions" onClick={() => handleTeamSelect('Samsung Lions')} />
                        </div>
                    </div>
                    <button className="complete-button" onClick={handleComplete}>완료</button>
                </div>
            </div>
        </div>
    );
}

export default FanSelect;