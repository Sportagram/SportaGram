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

    return (
        <div className="login-page-container">
            <Sidebar />
            <div className="login-content">
                <h2>스포타그램에 오신 선수님, 환영해요!</h2>
                <div className="google-login-button">
                    <button onClick={handleGoogleSign}>Login in Google</button>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;