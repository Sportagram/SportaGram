import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Legend } from 'chart.js';
import '../styles/Dashboard.css';

// 총 직관 승률 차트를 표시하는 컴포넌트
ChartJS.register(ArcElement, Legend);   // 원형 차트 구현

const data = {
    labels: ['승리', '패배', '무승부'],
    datasets: [
        {
            data: [40, 32, 10],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
    ],
};

function Dashboard() {
    return (
        <div className="dashboard">
            <h3>나의 직관 승률</h3>
            <Doughnut data={data} options={{ plugins: { legend: { position: 'bottom' } } }} />
        </div>
    );
}

export default Dashboard;