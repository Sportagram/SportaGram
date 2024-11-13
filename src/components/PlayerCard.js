import React from 'react';
import '../styles/PlayerCard.css';
function PlayerCard({ name, winRate }) {
    return (
        <div className="player-card">
            <h4>{name}</h4>
            <p>승률: {winRate}%</p>
        </div>
    );
}

export default PlayerCard;