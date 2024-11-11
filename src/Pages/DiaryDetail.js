import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import '../styles/DiaryList.css';

function DiaryDetail() {
    const { id } = useParams();
    const diaries = JSON.parse(localStorage.getItem('diaries')) || [];
    const diary = diaries.find((entry) => entry.id === parseInt(id, 10));

    if (!diary) {
        return <div>일기를 찾을 수 없습니다.</div>;
    }

    return (
        <div className="diarylist-container">
            <Sidebar />
            <div className="diarylist-content">
                <div className="page-header">
                    <h2>나의 직관 일기</h2>
                    <p>선수님이 직관한 경기를 기록할 수 있어요.</p>
                </div>
                <div className="diary-form">
                    <div className="form-left">
                        <div className="image-upload">
                            <div className="image-preview">
                                {diary.image ? (
                                    <img src={diary.image} alt="등록한 직관 경기 이미지"/>
                                ) : (
                                    <p>등록한 직관 경기 이미지</p>
                                )}
                            </div>
                        </div>
                        <div className="input-field">
                            <label>나만의 데일리 MVP</label>
                            <input type="text" value={diary.dailyMVP} readOnly/>
                        </div>
                    </div>
                    <div className="form-center">
                        <div className="input-field">
                            <label>직관 경기 이름</label>
                            <input type="text" value={diary.gameName} readOnly/>
                        </div>
                        <div className="input-field">
                            <label>직관 날짜</label>
                            <input type="text" value={diary.gameDate} readOnly/>
                        </div>
                        <div className="input-field">
                            <label>직관 경기장</label>
                            <input type="text" value={diary.stadium} readOnly/>
                        </div>
                        <div className="input-field">
                            <label>직관 좌석 선택</label>
                            <input type="text" value={diary.seat} readOnly/>
                        </div>
                    </div>
                    <div className="review-field">
                        <label>경기 리뷰</label>
                        <textarea value={diary.review} readOnly/>
                    </div>
                </div>
                <button className="submit-button" onClick={() => window.history.back()}>
                    돌아가기
                </button>
            </div>
        </div>
    );
}

export default DiaryDetail;
