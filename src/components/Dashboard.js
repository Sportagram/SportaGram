//Chart 생성 이전 MainPage에서 사용되었던 나의 직관 승률.
// import React from 'react';
// import { Doughnut } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Legend } from 'chart.js';
// import '../styles/Dashboard.css';
//
// // 총 직관 승률 차트를 표시하는 컴포넌트
// ChartJS.register(ArcElement, Legend);   // 원형 차트 구현
//
// const data = {
//     labels: ['승리', '패배', '무승부'],
//     datasets: [
//         {
//             data: [40, 32, 10],
//             backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//         },
//     ],
// };
//
// function Dashboard() {
//     return (
//         <div className="dashboard">
//             <h3>나의 직관 승률</h3>
//             <Doughnut data={data} options={{ plugins: { legend: { position: 'bottom' } } }} />
//         </div>
//     );
// }
//
// export default Dashboard;

// DoughnutChart_Season.js를 활용하여 표시되는 나의 이번 시즌 직관 승률 컴포넌트
import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Legend } from 'chart.js';
import '../styles/Dashboard.css';

ChartJS.register(ArcElement, Legend);

function Dashboard() {
    const [yearData, setYearData] = useState(null);

    useEffect(() => {
        // 로컬 스토리지에서 직관 기록 가져오기
        const savedDiaries = JSON.parse(localStorage.getItem('diaries')) || [];

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
    }, []);

    return (
        <div className="dashboard">
            <h3>이번 시즌 직관 성적</h3>
            <div className="doughnut-chart-container">
                {yearData ? (
                    <Doughnut
                        data={yearData}
                        options={{
                            plugins: {
                                legend: {
                                    position: 'bottom',
                                },
                            },
                            maintainAspectRatio: false, // 차트가 부모 컨테이너에 맞춰 크기 조절
                        }}
                    />
                ) : (
                    <p className="no-data-message">직관 기록이 없어요!</p>
                )}
            </div>
        </div>
    );
}

export default Dashboard;

