import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <img alt="logo" src={`${process.env.PUBLIC_URL}/Sportagram_resize.png`}/>
            <nav>
                <ul>
                    <li><Link to="/">마이페이지</Link></li>
                    <li><Link to="/community">커뮤니티</Link></li>
                    <li><Link to="/record">나의 직관 일기</Link></li>
                    <li><Link to="/compatibility">선수와의 궁합</Link></li>
                    <li><Link to="/rate">나의 직관 승률</Link></li>
                    <li><Link to="/profile">회원정보</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;