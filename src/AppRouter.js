import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import LoginPage from "./Login/LoginPage";
import FanSelect from "./Pages/FanSelect";
import Configure from "./Pages/Configure";
import SetProfile from "./Pages/SetProfile";
import MyPage from "./Pages/MyPage";
import Community from "./Pages/Community";
import MyDiary from "./Pages/DiaryWrite";
import MyWinRate from "./Pages/MyWinRate";
import Gunghab from "./Pages/Gunghab";
import DiaryList from "./Pages/DiaryList";
import DiaryWrite from "./Pages/DiaryWrite";
import DiaryDetail from "./Pages/DiaryDetail";

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
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/community" element={<Community />} />
                <Route path="/diarylist" element={<DiaryList />} />
                <Route path="/diarydetail/:id" element={<DiaryDetail />} />
                <Route path="/diarywrite" element={<DiaryWrite />} />
                <Route path="/rate" element={<MyWinRate />} />
                <Route path="/compatibility" element={<Gunghab />} />
                {/* 다른 RoutePath를 여기에 추가 */}
            </Routes>
        </Router>
    );
}

export default AppRouter;