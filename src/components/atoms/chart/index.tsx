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
  Color,
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

type YScalesType = {
    ticks?: TicksType
}

type ChartType = {
    id?: string,
    labels: string[],
    variant: "bar"|"stacked",
    yTicksCallback: (value: number) => number | string,
    yStacked?: boolean,
    xStacked?: boolean,
    isYTicksVisible?: boolean,
    isXTicksVisible?: boolean,
    datasets: DatasetType[]
}

export default function Chart({ 
    id,
    labels,
    datasets,
    yTicksCallback,
    yStacked = false,
    xStacked = false,
    isYTicksVisible,
    isXTicksVisible,
    variant = "bar"
}: ChartType) {
    const options = {
        responsive: true,
        defaults: {
          color: "red",
        },
        interaction: {
          intersect: false,
        },
        plugins: {
          legend: {
            position: 'top' as const,
            display: false
          },
          title: {
              display: false,
          },
          tooltip: {
              mode: "index",
              intersect: false
          }
        },
        scales: {
            y: {
              stacked: yStacked,
              ticks: {
                 color: "#CDFBFF99",
                 callback: yTicksCallback,
                 display: isYTicksVisible
              }
            },
            x: {
              stacked: xStacked,
              ticks: {
                 color: "#CDFBFF99",
                 display: isXTicksVisible
              }
            }
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

    console.log({ options })
  
    return (
        <div id={id}>
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
        </div>
    )
}
