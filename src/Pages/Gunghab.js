import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import GunghabTable, { rows as playerData } from '../Table/Gunghab_table';
import PlayerCard from '../components/PlayerCard';
import '../styles/Gunghab.css';

const Gunghab = () => {
    const [bestPlayer, setBestPlayer] = useState(null);
    const [worstPlayer, setWorstPlayer] = useState(null);

    useEffect(() => {
        if (playerData.length > 0) {
            const best = playerData.reduce((prev, current) => (prev.winRate > current.winRate) ? prev : current);
            const worst = playerData.reduce((prev, current) => (prev.winRate < current.winRate) ? prev : current);
            setBestPlayer(best);
            setWorstPlayer(worst);
        }
    }, []);

    return (
        <div className="gunghab-container">
            <Sidebar />
            <div className="gunghab-content">
                <div className="page-header">
                    <h2>선수 궁합도</h2>
                    <p>선수님과 잘 맞는 선수를 확인할 수 있어요.</p>
                </div>
                <div className="player-cards-container">
                    {bestPlayer && (
                        <PlayerCard
                            name={bestPlayer.playerName}
                            winRate={bestPlayer.winRate}
                            imageUrl={bestPlayer.imageUrl}
                            isBest={true}
                        />
                    )}
                    {worstPlayer && (
                        <PlayerCard
                            name={worstPlayer.playerName}
                            winRate={worstPlayer.winRate}
                            imageUrl={worstPlayer.imageUrl}
                            isBest={false}
                        />
                    )}
                </div>
                <div className="table-container">
                    <GunghabTable />
                </div>
            </div>
        </div>
    );
};

export default Gunghab;
