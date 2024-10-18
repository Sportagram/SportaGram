import React from 'react';
import '../styles/PlayerCard.css';
// 메인 페이지에 존재하는 사용자 직관 시 최고/최저 승률 선수를 보여주는 컴포넌트
function PlayerCard({ name, winRate }) {
    return (
        <div className="player-card">
            <h4>{name}</h4>
            <p>승률: {winRate}%</p>
        </div>
    );
}

export default PlayerCard;