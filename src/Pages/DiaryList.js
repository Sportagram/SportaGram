import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/DiaryList.css';
import { useNavigate } from 'react-router-dom';

function DiaryList() {
    const [diaries, setDiaries] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // localStorage에서 일기 데이터 불러오기
        const savedDiaries = JSON.parse(localStorage.getItem('diaries')) || [];
        setDiaries(savedDiaries);
    }, []);

    const handleWriteDiary = () => {
        navigate('/diarywrite'); // 일기 쓰기 페이지로 이동
    };

    const handleDiaryClick = (id) => {
        navigate(`/diarydetail/${id}`); // 선택한 일기의 상세 페이지로 이동
    };

    const handleDeleteDiary = (id) => {
        const updatedDiaries = diaries.filter((diary) => diary.id !== id);
        setDiaries(updatedDiaries);
        localStorage.setItem('diaries', JSON.stringify(updatedDiaries)); // localStorage에서 일기 삭제
    };

    return (
        <div className="diarylist-container">
            <Sidebar />
            <div className="diarylist-content">
                <div className="page-header">
                    <h2>나의 직관 일기</h2>
                    <p>선수님이 직관한 경기를 기록할 수 있어요.</p>
                </div>
                {diaries.length > 0 ? (
                    <div className="diary-list-wrapper">
                        <div className="diary-list">
                            {diaries.map((diary) => (
                                <div key={diary.id} className="diary-item">
                                    <div className="diary-item-content" onClick={() => handleDiaryClick(diary.id)}>
                                        <img src={diary.image} alt="경기 이미지" className="diary-img"/>
                                        <div className="diary-info">
                                            <h3>{diary.gameName}</h3>
                                            <p>{diary.stadium}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="diary-date">{diary.gameDate}</span>
                                        <button className="delete-button" onClick={() => handleDeleteDiary(diary.id)}>일기
                                            삭제
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="no-diaries-message">
                    직관한 경기가 없어요. 지금 등록하러 가볼까요?
                    </div>
                )}
                <button className="write-button" onClick={handleWriteDiary}>일기 쓰기!</button>
            </div>
        </div>
    );
}

export default DiaryList;
