import React from 'react';
import '../styles/Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header-info">
                <p>KBO 리그</p>
                <p>18:30 대구</p>
            </div>
        </header>
    );
}

export default Header;