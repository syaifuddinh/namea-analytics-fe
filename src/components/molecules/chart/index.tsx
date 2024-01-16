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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      borderColor: 'rgba(205, 251, 255, 0.06)'
    },
    y: {
      max: 500000,
      ticks: {
        max: 500000,
        min: 0,
        stepSize: 100000,
        callback: (value, index, array) => {
          return value < 1000000 ? value / 1000 + "K" : value / 1000000 + "M";
        },
      },
    },
  },
  plugins: {
    legend: {
      display: false,
      position: "top" as const,
    },
    title: {
      display: false,
      text: "Chart.js Bar Chart",
    },
    datalabels: {
      anchor: "end",
      align: "left",
      formatter: (context: number) => {
        console.log("context", context);
        return context / 1000 + "k";
      },
      font: {
        color: "black",
      },
    },
  },
};

const labels = [
  "Jan 23",
  "Feb 23",
  "Mar 23",
  "Apr 23",
  "May 23",
  "Jun 23",
  "Jul 23",
  "Aug 23",
  "Sep 23",
  "Oct 23",
  "Nov 23",
  "Dec 23",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Cash Balance",
      data: [
        400000, 400000, 400000, 400000, 400000, 400000, 400000, 400000, 400000,
        400000, 400000, 400000,
      ],
      backgroundColor: () => {
        const ctx = document.createElement("canvas").getContext("2d");
        var background1 = ctx ? ctx.createLinearGradient(0, 0, 0, 600) : false;
        if (background1) {
          background1.addColorStop(0, "#07B7AC");
          background1.addColorStop(1, "#087981");
        }
        return background1;
      },
      borderRadius: 8,
    },
    {
      label: "Outstanding Debt",
      data: [
        300000, 300000, 300000, 300000, 300000, 300000, 300000, 300000, 300000,
        300000, 300000, 300000,
      ],
      backgroundColor: () => {
        const ctx = document.createElement("canvas").getContext("2d");
        var background2 = ctx ? ctx.createLinearGradient(0, 0, 0, 600) : false;
        if (background2) {
          background2.addColorStop(0, "rgba(7, 183, 172, 0.5)");
          background2.addColorStop(1, "rgba(8, 121, 129, 0.5)");
        }
        return background2;
      },
      borderRadius: 8,
    },
  ],
};

export function BarChart() {
  return (
    <div className="h-[256px] w-full pt-5 pl-2">
      <Bar options={options} data={data} />
    </div>
  );
}
