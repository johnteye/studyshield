import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    hoverOffset: number;
  }[];
}

const DoughnutChartComponent: React.FC = () => {
  const data: ChartData = {
    labels: ["Youtube", "Quizlet", "Sakai"],
    datasets: [
      {
        label: "Time Spent",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-centera space-y-10">
      <h2 className="font-sans font-bold">Performance Chart</h2>
      <Doughnut data={data} width={600} height={800}/>
    </div>
  );
};

export default DoughnutChartComponent;
