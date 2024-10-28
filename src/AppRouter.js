import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import LoginPage from "./Login/LoginPage";
import FanSelect from "./Pages/FanSelect";
import Configure from "./Pages/Configure";
import SetProfile from "./Pages/SetProfile";

// 페이지 라우터 컴포넌트
function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/fanselect" element={<FanSelect />} />
                <Route path="/setprofile" element={<SetProfile />} />
                <Route path="/configure" element={<Configure />} />
                <Route path="/main" element={<MainPage />} />
                <Route path="/mypage" element={<LoginPage />} />
                <Route path="/community" element={<LoginPage />} />
                <Route path="/diary" element={<LoginPage />} />
                <Route path="/rate" element={<LoginPage />} />
                <Route path="/compatibility" element={<LoginPage />} />
                <Route path="/setting" element={<LoginPage />} />
                {/* 다른 RoutePath를 여기에 추가 */}
            </Routes>
        </Router>
    );
}

export default AppRouter;