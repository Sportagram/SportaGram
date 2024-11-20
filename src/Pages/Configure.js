import React from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/Configure.css';

function Configure() {
    return (
        <div className="configure-page-container">
            <Sidebar />
            <div className="configure-content-header">
                <div className="configure-content">
                    <h2>회원가입이 완료되었습니다!</h2>
                    <h2>이제, 출전해 볼까요?</h2>
                </div>
                <div className="configure-content">
                    <button className="go-main-button" onClick={() => window.location.href = '/main'}>메인 페이지로 이동
                    </button>
                </div>
            </div>

        </div>
    );
}

export default Configure;