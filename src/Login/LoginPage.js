import React from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/App.css';
import '../styles/PlayerCard.css';

// 사용자가 최초로 접하는 로그인 페이지
function LoginPage() {
    return (
        <div className="app-container">
            <Sidebar />
            <div>
                <p> 로그인 페이지 </p>
            </div>
        </div>
    );
}

export default LoginPage;