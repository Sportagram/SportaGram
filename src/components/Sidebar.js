// import React, { useEffect, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import '../styles/Sidebar.css';
//
// // 로그인 이후 모든 페이지에서 사용되는 사이드바
// function Sidebar() {
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const location = useLocation();
//
//     useEffect(() => {
//         const auth = getAuth();
//         onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 setIsLoggedIn(true);
//             } else {
//                 setIsLoggedIn(false);
//             }
//         });
//     }, []);
//
//     const shouldShowNav = isLoggedIn && !['/', '/fanselect', '/setprofile', '/configure'].includes(location.pathname);
//
//     return (
//         <div className="sidebar">
//             <div className="sidebar-logo">
//                 <img
//                     alt="logo"
//                     className="responsive-logo"
//                     src={`${process.env.PUBLIC_URL}/logo1.png`}
//                     onClick={() => window.location.href = '/main'}
//                 />
//             </div>
//
//             {shouldShowNav && (
//                 <nav>
//                     <ul>
//                         <div className="user-section">
//                             <img src={`${process.env.PUBLIC_URL}/sidebar_Icon/user.png`} alt="user" className="user-icon" />
//                             <li className={`user-link ${location.pathname === '/mypage' ? 'active-link' : ''}`}>
//                                 <Link to="/mypage">마이페이지</Link>
//                             </li>
//                         </div>
//                         <div className="user-section">
//                             <img src={`${process.env.PUBLIC_URL}/sidebar_Icon/community.png`} alt="community" className="user-icon" />
//                             <li className={`user-link ${location.pathname === '/community' ? 'active-link' : ''}`}>
//                                 <Link to="/community">커뮤니티</Link>
//                             </li>
//                         </div>
//                         <div className="user-section">
//                             <img src={`${process.env.PUBLIC_URL}/sidebar_Icon/diary.png`} alt="diary" className="user-icon" />
//                             <li className={`user-link ${location.pathname === '/diarylist' ? 'active-link' : ''}`}>
//                                 <Link to="/diarylist">나의 직관 일기</Link>
//                             </li>
//                         </div>
//                         <div className="user-section">
//                             <img src={`${process.env.PUBLIC_URL}/sidebar_Icon/rate.png`} alt="rate" className="user-icon" />
//                             <li className={`user-link ${location.pathname === '/rate' ? 'active-link' : ''}`}>
//                                 <Link to="/rate">나의 직관 승률</Link>
//                             </li>
//                         </div>
//                         <div className="user-section">
//                             <img src={`${process.env.PUBLIC_URL}/sidebar_Icon/relationship.png`} alt="relationship" className="user-icon" />
//                             <li className={`user-link ${location.pathname === '/compatibility' ? 'active-link' : ''}`}>
//                                 <Link to="/compatibility">선수 궁합도</Link>
//                             </li>
//                         </div>
//                     </ul>
//                 </nav>
//             )}
//         </div>
//     );
// }
//
// export default Sidebar;

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Sidebar.css';

// 로그인 이후 모든 페이지에서 사용되는 사이드바
function Sidebar() {
    const [isLoggedIn] = useState(true); // 임의로 로그인 상태를 true로 설정
    const location = useLocation();

    // 네비게이션을 표시할 조건
    const shouldShowNav = isLoggedIn && !['/', '/fanselect', '/setprofile', '/configure'].includes(location.pathname);

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

            {shouldShowNav && (
                <nav>
                    <ul>
                        <div className="user-section">
                            <img src={`${process.env.PUBLIC_URL}/sidebar_Icon/user.png`} alt="user" className="user-icon"/>
                            <li className={`user-link ${location.pathname === '/mypage' ? 'active' : ''}`}>
                                <Link to="/mypage">마이페이지</Link>
                            </li>
                        </div>
                        <div className="user-section">
                            <img src={`${process.env.PUBLIC_URL}/sidebar_Icon/community.png`} alt="user" className="user-icon"/>
                            <li className={`user-link ${location.pathname === '/community' ? 'active' : ''}`}>
                                <Link to="/community">커뮤니티</Link>
                            </li>
                        </div>
                        <div className="user-section">
                            <img src={`${process.env.PUBLIC_URL}/sidebar_Icon/diary.png`} alt="user" className="user-icon"/>
                            <li className={`user-link ${location.pathname === '/diarylist' ? 'active' : ''}`}>
                                <Link to="/diarylist">나의 직관 일기</Link>
                            </li>
                        </div>
                        <div className="user-section">
                            <img src={`${process.env.PUBLIC_URL}/sidebar_Icon/rate.png`} alt="user" className="user-icon"/>
                            <li className={`user-link ${location.pathname === '/rate' ? 'active' : ''}`}>
                                <Link to="/rate">나의 직관 승률</Link>
                            </li>
                        </div>
                        <div className="user-section">
                            <img src={`${process.env.PUBLIC_URL}/sidebar_Icon/relationship.png`} alt="user" className="user-icon"/>
                            <li className={`user-link ${location.pathname === '/compatibility' ? 'active' : ''}`}>
                                <Link to="/compatibility">선수 궁합도</Link>
                            </li>
                        </div>
                    </ul>
                </nav>
            )}
        </div>
    );
}

export default Sidebar;

