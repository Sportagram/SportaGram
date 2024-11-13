import React from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/LoginPage.css';

function gungHab() {

    return (
        <div className="login-page-container">
            <Sidebar/>
            <div className="gunghab-content">
                <div className="page-header">
                    <h2>선수 궁합도</h2>
                    <p>선수님과 잘 맞는 선수를 확인할 수 있어요.</p>
                </div>
            </div>
        </div>
    );
}

export default gungHab;