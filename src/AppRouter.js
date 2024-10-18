import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import LoginPage from "./Login/LoginPage";

// 페이지 라우터 컴포넌트
function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/login_page" element={<LoginPage />} />
                {/* 다른 RoutePath를 여기에 추가 */}
            </Routes>
        </Router>
    );
}

export default AppRouter;