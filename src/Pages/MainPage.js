import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import ChatList from '../components/ChatList';
import ArticleList from '../components/ArticleList';
import UserProfile from '../components/UserProfile';
import PlayerCard from '../components/PlayerCard';
import '../styles/App.css';
import '../styles/PlayerCard.css';

function MainPage() {
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
                            <PlayerCard name="하트" winRate={75} />
                            <PlayerCard name="송명기" winRate={25} />
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