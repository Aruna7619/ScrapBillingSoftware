import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import "../styles/purchaseSalesChart.css";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const PurchaseSalesChart = () => {

    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],

        datasets: [
            {
                label: "Purchases",

                data: [12000, 18000, 14000, 22000, 19000, 25000],

                backgroundColor: "#4e73df",
            },

            {
                label: "Sales",

                data: [15000, 20000, 17000, 24000, 21000, 28000],

                backgroundColor: "#1cc88a",
            },
        ],
    };

    const options = {
        responsive: true,

        plugins: {

            legend: {

                position: "top",

            },

        },

    };

    return (

        <div className="chart-container">

            <h3>Purchase vs Sales</h3>

            <Bar
                data={data}
                options={options}
            />

        </div>

    );
};

export default PurchaseSalesChart;