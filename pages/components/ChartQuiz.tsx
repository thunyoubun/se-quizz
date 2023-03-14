import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js/auto";

function ChartQuiz({ chartData }: any) {
  ChartJS.register(...registerables);
  return <Line data={chartData} />;
}

export default ChartQuiz;
