import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage';

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                {/* 다른 경로는 여기에 추가 */}
            </Routes>
        </Router>
    );
}

export default AppRouter;