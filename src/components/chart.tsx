import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export const options = {
    responsive: true,
    scales: {
        y: {
            max: 1,
            beginAtZero: true,
            ticks: {
                format: {
                    style: 'percent'
                }
            }
        }
    },
    plugins: {
        legend: {
            position: 'bottom' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },

    },
};

const labels = ['Monday', 'Tuesday', 'Wednseday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const data = {
    labels,
    datasets: [
        {
            fill: true,
            label: 'Asset APR',
            data: [0.1, 0.15, 0.22, .23, 0.24, .25, .26],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

export function Chart() {
    return <Line options={options} data={data} style={{ width: "66%", margin: "0 auto", height: "200px" }} />;
}
