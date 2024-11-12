import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import DoughnutChart_Total from '../components/DoughnutChart_Total';
import DoughnutChart_Season from '../components/DoughnutChart_Season';
import BarChart_Monthly from '../components/BarChart_Monthly';
import '../styles/MyWinRate.css';

function MyWinRate() {
    const [totalData, setTotalData] = useState(null);
    const [yearData, setYearData] = useState(null);
    const [monthlyData, setMonthlyData] = useState(null);

    useEffect(() => {
        const savedDiaries = JSON.parse(localStorage.getItem('diaries')) || [];

        // 총 승무패 수 계산
        let win = 0, draw = 0, lose = 0;
        savedDiaries.forEach(diary => {
            if (diary.win === '승') win++;
            else if (diary.win === '무') draw++;
            else if (diary.win === '패') lose++;
        });

        if (win + draw + lose > 0) {
            setTotalData({
                labels: ['승리', '무승부', '패배'],
                datasets: [
                    {
                        data: [win, draw, lose],
                        backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
                    },
                ],
            });
        }

        // 올해 데이터 계산
        const currentYear = new Date().getFullYear();
        let winThisYear = 0, drawThisYear = 0, loseThisYear = 0;
        savedDiaries.forEach(diary => {
            const diaryYear = new Date(diary.gameDate).getFullYear();
            if (diaryYear === currentYear) {
                if (diary.win === '승') winThisYear++;
                else if (diary.win === '무') drawThisYear++;
                else if (diary.win === '패') loseThisYear++;
            }
        });

        if (winThisYear + drawThisYear + loseThisYear > 0) {
            setYearData({
                labels: ['승리', '무승부', '패배'],
                datasets: [
                    {
                        data: [winThisYear, drawThisYear, loseThisYear],
                        backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
                    },
                ],
            });
        }

        // 올해 월별 승리 수 계산 - 1월, 2월, 12월은 제외하고 10/11월 합침
        const monthlyWins = Array(12).fill(0);
        savedDiaries.forEach(diary => {
            const diaryDate = new Date(diary.gameDate);
            const diaryYear = diaryDate.getFullYear();
            const diaryMonth = diaryDate.getMonth();

            if (diaryYear === currentYear && diary.win === '승') {
                monthlyWins[diaryMonth]++;
            }
        });

        if (monthlyWins.some(month => month > 0)) {
            const processedMonthlyData = {
                labels: ['3월', '4월', '5월', '6월', '7월', '8월', '9월', '10/11월'],
                datasets: [
                    {
                        label: '월별 승리 수',
                        data: [
                            monthlyWins[2], // 3월
                            monthlyWins[3], // 4월
                            monthlyWins[4], // 5월
                            monthlyWins[5], // 6월
                            monthlyWins[6], // 7월
                            monthlyWins[7], // 8월
                            monthlyWins[8], // 9월
                            monthlyWins[9] + monthlyWins[10], // 10월 + 11월
                        ],
                        backgroundColor: '#36A2EB',
                    },
                ],
            };

            setMonthlyData(processedMonthlyData);
        }
    }, []);

    return (
        <div className="mywinrate-container">
            <Sidebar />
            <div className="mywinrate-content">
                <div className="page-header">
                    <h2>나의 직관 승률</h2>
                    <p>선수님이 직관한 경기의 승률을 분석할 수 있어요.</p>
                </div>
                <div className="charts-container">
                    <div className="chart-item chart-item-pie">
                        <h3>통산 승무패</h3>
                        {totalData ? (
                            <DoughnutChart_Total data={totalData} />
                        ) : (
                            <p className="no-data-message">직관 기록이 없어요!</p>
                        )}
                    </div>
                    <div className="chart-item chart-item-pie">
                        <h3>연도별 승무패 (올해)</h3>
                        {yearData ? (
                            <DoughnutChart_Season data={yearData} />
                        ) : (
                            <p className="no-data-message">직관 기록이 없어요!</p>
                        )}
                    </div>
                </div>
                <div className="chart-item large-chart">
                    <h3>월별 직관 승률</h3>
                    {monthlyData ? (
                        <BarChart_Monthly data={monthlyData} />
                    ) : (
                        <p className="no-data-message">직관 기록이 없어요!</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MyWinRate;