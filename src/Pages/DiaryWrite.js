import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/DiaryWrite.css';
import { useNavigate } from 'react-router-dom';

function DiaryWrite() {
    const [gameName, setGameName] = useState('');
    const [gameDate, setGameDate] = useState('');
    const [stadium, setStadium] = useState('');
    const [seat, setSeat] = useState('');
    const [dailyMVP, setDailyMVP] = useState('');
    const [review, setReview] = useState('');
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    const stadiumOptions = [
        '광주기아챔피언스필드',
        '잠실야구장',
        '고척스카이돔',
        '대구삼성라이온즈파크',
        '문학야구장',
        '마산야구장',
        '수원kt위즈파크',
        '청주야구장',
        '포항야구장',
        '이글스파크'
    ];

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = () => {
        if (!gameName || !gameDate || !seat || !dailyMVP || !review) {
            alert('모든 필드를 입력해 주세요!');
            return;
        }

        const diaryEntry = {
            id: Date.now(), // 고유 ID 추가
            gameName,
            gameDate,
            stadium,
            seat,
            dailyMVP,
            review,
            image
        };

        // 데이터를 localStorage에 저장
        const savedDiaries = JSON.parse(localStorage.getItem('diaries')) || [];
        savedDiaries.push(diaryEntry);
        localStorage.setItem('diaries', JSON.stringify(savedDiaries));

        alert('일기가 성공적으로 등록되었습니다!');

        // 입력 필드 초기화
        setGameName('');
        setGameDate('');
        setStadium('');
        setSeat('');
        setDailyMVP('');
        setReview('');
        setImage(null);

        // 일기 리스트 페이지로 이동
        navigate('/diarylist');
    };

    return (
        <div className="mydiary-container">
            <Sidebar />
            <div className="mydiary-content">
                <div className="page-header">
                    <h2>나의 직관 일기</h2>
                    <p>선수님이 직관한 경기를 기록할 수 있어요.</p>
                </div>
                <div className="diary-form">
                    <div className="form-left">
                        <div className="image-upload">
                            <div className="image-preview">
                                {image ? (
                                    <img src={image} alt="직관 이미지" style={{maxWidth: '100%', maxHeight: '100%'}}/>
                                ) : (
                                    <p>직관 경기의 이미지를 등록해 주세요</p>
                                )}
                            </div>
                            <label htmlFor="image-upload" className="image-upload-button">
                                이미지 첨부
                            </label>
                            <input
                                id="image-upload"
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                style={{display: 'none'}}
                            />
                        </div>
                        <div className="input-field">
                            <label>나만의 데일리 MVP</label>
                            <input
                                type="text"
                                value={dailyMVP}
                                onChange={(e) => setDailyMVP(e.target.value)}
                                placeholder="ex) 이대형"
                            />
                        </div>
                    </div>
                    <div className="form-center">
                        <div className="input-field">
                            <label>직관 경기 이름</label>
                            <input
                                type="text"
                                value={gameName}
                                onChange={(e) => setGameName(e.target.value)}
                                placeholder="ex) NC vs 한화"
                            />
                        </div>
                        <div className="input-field">
                            <label>직관 날짜</label>
                            <input
                                type="date"
                                value={gameDate}
                                onChange={(e) => setGameDate(e.target.value)}
                            />
                        </div>
                        <div className="input-field">
                            <label>직관 경기장</label>
                            <select
                                value={stadium}
                                onChange={(e) => setStadium(e.target.value)}
                            >
                                <option value="">경기장을 선택해 주세요</option>
                                {stadiumOptions.map((option, index) => (
                                    <option key={index} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="input-field">
                            <label>직관 좌석 선택</label>
                            <input
                                type="text"
                                value={seat}
                                onChange={(e) => setSeat(e.target.value)}
                                placeholder="ex) B열 2층 13번"
                            />
                        </div>
                    </div>
                    <div className="review-field">
                        <label>경기 리뷰</label>
                        <textarea
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                            placeholder="ex) 직관 경기에 대한 리뷰를 남겨주세요."
                        />
                    </div>
                </div>
                <button className="submit-button" onClick={handleSubmit}>
                    일기 등록!
                </button>
            </div>
        </div>
    );
}

export default DiaryWrite;
