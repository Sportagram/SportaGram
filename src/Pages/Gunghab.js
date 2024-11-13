import React from 'react';
import Sidebar from '../components/Sidebar';
import GunghabTable from '../Table/Gunghab_table';
import PlayerCard from '../components/PlayerCard';
import '../styles/Gunghab.css';

const Gunghab = () => {
    return (
        <div className="gunghab-container">
            <Sidebar />
            <div className="gunghab-content">
                <div className="page-header">
                    <h2>선수 궁합도</h2>
                    <p>선수님과 잘 맞는 선수를 확인할 수 있어요.</p>
                </div>
                <div className="player-cards-container player-cards-left-align">
                    <PlayerCard name="하트" winRate={75} />
                    <PlayerCard name="송명기" winRate={25} />
                </div>
                <div className="table-container">
                    <GunghabTable />
                </div>
            </div>
        </div>
    );
};

export default Gunghab;
