import React, {useEffect, useState} from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import ChatList from '../components/ChatList';
import ArticleList from '../components/ArticleList';
import UserProfile from '../components/UserProfile';
import PlayerCard from '../components/PlayerCard';
import '../styles/MainPage.css';
import '../styles/PlayerCard.css';
import {rows as playerData} from "../Table/Gunghab_table";

// 로그인 시 사용자의 메인 페이지
function MainPage() {

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
        <div className="app-container">
            <Sidebar />
            <div className="main-content">
                <Header />
                <div className="dashboard-content">
                    <div className="chart-and-player-container">
                        <div className="chart-container">
                            <Dashboard />
                        </div>
                        <div className="player-card-container">
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
                    </div>
                </div>
                <div className="article-list-container">
                    <ArticleList />
                </div>
            </div>
            <div className="right-sidebar">
                <UserProfile />
                <ChatList />
            </div>
        </div>
    );
}

export default MainPage;