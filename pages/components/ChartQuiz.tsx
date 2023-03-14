import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export declare type props = {
  chartData: any;
};

const BarChart = ({ chartData }: props) => {
  return <Bar data={chartData} />;
};

export default BarChart;
