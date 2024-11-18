import React from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/LoginPage.css';
import axios from 'axios';

function LoginPage() {
    const handleGoogleSign = async () => {
        try {
            // 서버 상태 확인을 위해 간단한 API 요청
            await axios.get('http://localhost:8080/health-check');
            // 서버가 켜져 있으면 구글 로그인 엔드포인트로 이동
            window.location.href = 'http://localhost:8080/login';
        } catch (error) {
            // 서버가 꺼져 있거나 응답이 없을 경우
            alert('서버에 연결할 수 없습니다. 잠시 후 다시 시도해 주세요.');
        }
    };

    const buttonStyle = {
        background: `url(${process.env.PUBLIC_URL}/google1.png) no-repeat`,
        backgroundSize: '30px 30px',
        display: 'inline-block',
        verticalAlign: 'middle',
        width: '13px',
        height: '30px',
    };
    const buttonContentStyle = {
        paddingLeft: '30px',
    };

    return (
        <div className="login-page-container">
            <Sidebar />
            <div className="login-content">
                <h2>스포타그램에 오신 선수님, 환영해요!</h2>
                <div className="google-login-button">
                    <button className="button-basic-wrapper" onClick={handleGoogleSign}>
                        <span className="button-icon-wrap" style={buttonStyle}></span>
                        <span className="button-contents" style={buttonContentStyle}>Playball with Google</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
