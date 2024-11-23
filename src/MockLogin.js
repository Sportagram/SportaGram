import React from 'react';

const MockLogin = () => {
    const handleLogin = () => {
        localStorage.setItem('username', 'testuser');
        localStorage.setItem('nickname', '테스트 유저');
        localStorage.setItem('myteam', '삼성 라이온즈');
        window.location.href = '/';
    };

    return (
        <div>
            <h2>Mock Login Page</h2>
            <button onClick={handleLogin}>더미 사용자로 로그인</button>
        </div>
    );
};

export default MockLogin;
