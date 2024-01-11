"use client"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Doughnut } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

type DatasetType = {
    label?: string,
    data: number[]
}

type ChartType = {
    labels: string[],
    variant: "bar"|"stacked",
    datasets: DatasetType[]
}

export default function Chart({ 
    labels,
    datasets,
    variant = "bar"
}: ChartType) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        display: false
      },
      title: {
        display: false,
      },
    },
  };
  if(variant === "stacked")
      options.scales =  {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
        },
      }

  let chartDatasets = []
  if(datasets.length > 0)
      chartDatasets = [...chartDatasets, {...datasets[0], backgroundColor: 'rgba(255, 99, 132, 0.5)'}]

  if(datasets.length > 1)
      chartDatasets = [...chartDatasets, {...datasets[1], backgroundColor: 'rgba(53, 162, 235, 0.5)'}]

    const data = {
        labels,
        datasets: chartDatasets
    };
  
    return (
        <Bar
            options={options}
            data={data}
        />
    )
}
