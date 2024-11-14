import React from 'react';
import '../styles/PlayerCard.css';

function PlayerCard({ name, winRate, imageUrl, isBest }) {
    return (
        <div
            className={`player-card ${isBest ? 'best-player' : 'worst-player'}`}
            style={{ backgroundColor: isBest ? '#36A2EB' : '#78C850' }}
        >
            <div className="win-rate-container">
                <h2>{isBest ? '나와 잘 맞는 선수는?' : '나와 잘 안 맞는 선수는?'}</h2>
                <div className="win-rate-circle">
                    <svg viewBox="0 0 36 36" className="circular-chart">
                        <path
                            className="circle-bg"
                            d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                            className="circle"
                            strokeDasharray={`${winRate}, 100`}
                            d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <text x="18" y="16" className="percentage-text percentage-title">
                            승률
                        </text>
                        <text x="18" y="24" className="percentage-text">
                            {winRate}%
                        </text>
                    </svg>
                </div>
            </div>
            <div className="player-profile">
                <img src={imageUrl} alt={`${name} 프로필`} className="player-image" />
                <p className="player-name">{name}</p>
            </div>
        </div>
    );
}

export default PlayerCard;
