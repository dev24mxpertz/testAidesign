import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { UserData } from "./Data";
import { Chart as ChartJS } from "chart.js/auto";

const commonLineOptions = {
    backgroundColor: "#FF0",
    borderColor: "#000",
    borderWidth: 2,
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: "miter",
    capBezierPoints: true,
    tension: 0.4,
    borderJoinStyle: "round",
    cubicInterpolationMode: "monotone",
    fill: false,
    lineTension: 1,
    pointBackgroundColor: "white",
    pointBorderColor: "rgba(0,0,0,1)",
    pointBorderWidth: 2,
    pointHitRadius: 10,
    pointHoverBackgroundColor: "rgba(0,0,0,1)",
    pointHoverBorderColor: "rgba(0,0,0,1)",
    pointHoverBorderWidth: 2,
    pointHoverRadius: 5,
    pointRadius: 0,
    pointRotation: 0,
    pointStyle: "circle",
    showLine: true,
    spanGaps: false,
    stepped: false,
};

const commonPointOptions = {
    radius: 0,
    backgroundColor: "white",
    borderColor: "#000",
    borderWidth: 2,
    hitRadius: 5,
    hoverRadius: 5,
    hoverBackgroundColor: "#000",
    hoverBorderColor: "#000",
};

function LineChart() {
    const [userData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
            {
                label: "Users Gained",
                data: UserData.map((data) => data.userGain),
                ...commonLineOptions,
            },
            {
                label: "Users Lost",
                data: UserData.map((data) => data.userLost),
                ...commonLineOptions,
                borderColor: "#000",
                backgroundColor: "#000",
            },
        ],
    });

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
                position: "top",
                align: "center",
                labels: {
                    boxWidth: 20,
                    usePointStyle: false,
                },
            },
            tooltip: {
                enabled: true,
                backgroundColor: "rgba(0,0,0,1)",
                titleColor: "black",
                bodyColor: "black",
                borderColor: "black",
                borderWidth: 1,
                caretSize: 5,
                cornerRadius: 6,
                displayColors: true,
                intersect: true,
                mode: "nearest",
                position: "average",
            },
        },
        scales: {
            x: {
                display: false,
                title: {
                    display: false,
                    text: "Years",
                    font: {
                        family: "Arial",
                        size: 12,
                        style: "normal",
                        weight: "bold",
                    },
                    color: "#000",
                },
                ticks: {
                    display: true,
                    color: "#000",
                    font: {
                        family: "Arial",
                        size: 10,
                        style: "normal",
                        weight: "normal",
                    },
                },
                grid: {
                    display: true,
                    color: "rgba(0,0,0,1)",
                    borderColor: "rgba(0,0,0,1)",
                    borderWidth: 1,
                    drawBorder: true,
                    drawOnChartArea: true,
                    drawTicks: true,
                    tickLength: 5,
                },
            },
            y: {
                display: true,
                title: {
                    display: false,
                    text: "Users",
                    font: {
                        size: 15,
                        weight: "bold",
                    },
                    color: "#000",
                },
                ticks: {
                    display: true,
                    color: "#000",
                    font: {
                        size: 15,
                        weight: "normal",
                    },
                },
                grid: {
                    display: true,
                    color: "rgba(0,0,0,1)",
                    borderColor: "rgba(0,0,0,1)",
                    borderWidth: 1,
                    drawBorder: false,
                    drawOnChartArea: true,
                    drawTicks: false,
                    tickLength: 0,
                },
            },

        },
        elements: {
            line: commonLineOptions,
            point: commonPointOptions,
        },
        grid: {
            display: true,
            color: "#000 ",
            borderColor: "#000",
            borderWidth: 0,
            drawBorder: false,
            drawOnChartArea: false,
            drawTicks: true,
            borderDash: [5, 5],
            borderDashOffset: 1,
            circular: false,
        },
        tension: 0.4,
    };

    return <Line data={userData} options={options} />;
}

export default LineChart;
