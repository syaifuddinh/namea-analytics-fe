"use client"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  PointElement,
  LineElement,
  Legend
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import { Doughnut } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    PointElement,
    LineElement,
    Legend
);

type DatasetType = {
    label?: string,
    data: number[],
    borderRadius?: string,
    backgroundColor?: string | any,
    pointHoverBackgroundColor?: string,
    borderColor?: string,
    lineTension?: number,
    pointBorderWidth?: number,
    pointHitRadius?: number,
    pointRadius?: number
}

type TicksType = {
    callback?: (value: any) => string
}

type YScales = {
    ticks?: TicksType
}

type ChartType = {
    labels: string[],
    variant: "bar"|"stacked",
    yScales: YScalesType[],
    datasets: DatasetType[]
}

export default function Chart({ 
    labels,
    datasets,
    yScales,
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
          }
        },
        scales: {
            yAxes: yScales
        }
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
      chartDatasets = [...chartDatasets, {...datasets[0]}]

  if(datasets.length > 1)
      chartDatasets = [...chartDatasets, {...datasets[1]}]

    const data = {
        labels,
        datasets: chartDatasets
    };

    console.log({ yScales })
    console.log({ options })
  
    return (
        <>
          { (variant === "bar" || variant === "stacked") && (
              <Bar
                  options={options}
                  data={data}
              />
          ) }
          { variant === "line" && (
              <Line
                  options={options}
                  data={data}
              />
          ) }
        </>
    )
}
