import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import '../styles/MyWinRate.css';

// Chart.js에서 필요한 요소 등록
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart_Monthly = ({ data }) => {
    // 기본값 설정
    const defaultData = {
        labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        datasets: [
            {
                label: '월별 승리 수',
                data: Array(12).fill(0),
                backgroundColor: '#36A2EB',
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
            tooltip: {
                enabled: true,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 30,
                ticks: {
                    stepSize: 5,
                },
            },
        },
    };

    return (
        <div className="chart-container-bar" style={{ height: '20vh' }}>
            <Bar data={data || defaultData} options={options} />
        </div>
    );
};

export default BarChart_Monthly;
