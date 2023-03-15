import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
function BarChart({ chartData }: any) {
  const [userData, setUserData] = useState({
    labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"],
    datasets: [],
  });

  useEffect(() => {
    setUserData(Object.assign(userData, chartData));
    console.log(userData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Bar data={userData} />;
}

export default BarChart;
