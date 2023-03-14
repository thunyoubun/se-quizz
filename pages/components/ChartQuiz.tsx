import React from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js/auto";

export declare type props = {
  chartData: (number | [number, number] | null)[];
};

function ChartQuiz({ chartData }: any) {
  ChartJS.register(...registerables);
  return <Bar data={chartData} />;
}

export default ChartQuiz;
