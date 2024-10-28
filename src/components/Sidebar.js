import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import '../styles/Sidebar.css';

// 로그인 이후 모든 페이지에서 사용되는 사이드바
function Sidebar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        });
    }, []);

    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                <img
                    alt="logo"
                    className="responsive-logo"
                    src={`${process.env.PUBLIC_URL}/logo1.png`}
                    onClick={() => window.location.href = '/main'}
                />
            </div>

            {isLoggedIn && (
                <nav>
                    <ul>
                        <div className="user-section">
                            <img src={`${process.env.PUBLIC_URL}/sidebar_Icon/user.png`} alt="user" className="user-icon"/>
                            <li className="user-link"><Link to="/mypage">마이페이지</Link></li>
                        </div>
                        <div className="user-section">
                            <img src={`${process.env.PUBLIC_URL}/sidebar_Icon/community.png`} alt="user"
                                 className="user-icon"/>
                            <li className="user-link"><Link to="/community">커뮤니티</Link></li>
                        </div>
                        <div className="user-section">
                            <img src={`${process.env.PUBLIC_URL}/sidebar_Icon/diary.png`} alt="user" className="user-icon"/>
                            <li className="user-link"><Link to="/diary">나의 직관 일기</Link></li>
                        </div>
                        <div className="user-section">
                            <img src={`${process.env.PUBLIC_URL}/sidebar_Icon/rate.png`} alt="user" className="user-icon"/>
                            <li className="user-link"><Link to="/rate">나의 직관 승률</Link></li>
                        </div>
                        <div className="user-section">
                            <img src={`${process.env.PUBLIC_URL}/sidebar_Icon/relationship.png`} alt="user" className="user-icon"/>
                            <li className="user-link"><Link to="/compatibility">선수 궁합도</Link></li>
                        </div>
                        <div className="user-section">
                            <img src={`${process.env.PUBLIC_URL}/sidebar_Icon/setting.png`} alt="setting" className="user-icon"/>
                            <li className="user-link"><Link to="/setting">설정</Link></li>
                        </div>
                    </ul>
                </nav>
            )}
        </div>
    );
}

export default Sidebar;
