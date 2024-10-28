import React from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/LoginPage.css';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';

function LoginPage() {
    const handleGoogleSign = async () => {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider)
            .then((data) => {
                localStorage.setItem('userEmail', data.user.email);
                console.log(data);
                window.location.href = '/fanselect'; // 로그인 성공 시 팀 선택 페이지로 이동
            })
            .catch((err) => console.log(err));
    };

    const buttonStyle = {
        background: `url(${process.env.PUBLIC_URL}/google.png) no-repeat`,
        backgroundSize: '20px 20px',
        display: 'inline-block',
        verticalAlign: 'middle',
        itemAlign: 'center',
        width: '28px',
        height: '14px',
    };

    return (
        <div className="login-page-container">
            <Sidebar />
            <div className="login-content">
                <h2>스포타그램에 오신 선수님, 환영해요!</h2>
                <div className="google-login-button">
                    <div className="button-basic-wrapper">
                        <div className="button-icon-wrap" style={buttonStyle}>
                            <span className="buttoniconimage"></span>
                        </div>
                        <div className="button-contents">
                            <span className="button-text" onClick={handleGoogleSign}>Playball With Google!</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;