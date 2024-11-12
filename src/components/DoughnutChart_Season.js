import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const DoughnutChart_Season = ({ data }) => {
    return <Doughnut data={data} />;
};

export default DoughnutChart_Season;
