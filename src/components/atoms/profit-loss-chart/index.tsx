"use client"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  Title,
  Tooltip,
  PointElement,
  LineElement,
  Color,
  Legend
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import { Doughnut } from "react-chartjs-2";
import { useRef } from "react"
import { useEffect } from "react"
import { useState } from "react"
import { memo } from "react"
import {BubbleController} from 'chart.js';

class Custom extends BubbleController {
    draw() {
        // Call bubble controller method to draw all the points
        super.draw(arguments);

        // Now we can do some custom drawing for this dataset. Here we'll draw a red box around the first point in each dataset
        const meta = this.getMeta();
        const pt0 = meta.data[0];

        const {x, y} = pt0.getProps(['x', 'y']);
        const {radius} = pt0.options;

        const ctx = this.chart.ctx;
        ctx.save();
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 1;
        ctx.strokeRect(x - radius, y - radius, 2 * radius, 2 * radius);
        ctx.restore();
    }
};
Custom.id = 'derivedBubble';
Custom.defaults = BubbleController.defaults;

 
class CustomBarChart extends BarController {
  draw() {
    super.draw(arguments);
    // Your custom drawing logic goes here
    // You can access the chart's data and options using `this.chart.data` and `this.chart.options`

    // For example, let's set different colors for each bar
    const ctx = this.ctx;
    const chart = this.chart;
    const datasets = chart.data.datasets || [];
    const meta = this._cachedMeta;

    console.log({ datasets })
    console.log({ meta })
    const color = "red";
    ctx.save();
    ctx.fillStyle = color;
    ctx.strokeStyle = 'red';
    ctx.fillRect(50, 50, 100, 50);

    ctx.restore();
    // datasets.forEach((dataset, datasetIndex) => {
    //   const bars = meta.data[datasetIndex];

    //   super.drawBackground(index, bar, chart);
    //   super.drawBorder(index, bar, chart);
    // });
  }
}
CustomBarChart.id = "custombar"
CustomBarChart.defaults = BarController.defaults

ChartJS.register(
  Custom,
  CustomBarChart
)

const ProfitLossChart = ({ labels, datasets }) => {
    const chartRef = useRef(null)
    const chartIdRef = useRef(null)
    const [chartId, setChartId] = useState(null)
    
    useEffect(() => {
        let chartDatasets = []
        if(datasets.length > 0)
            chartDatasets = [...chartDatasets, {...datasets[0]}]

        if(datasets.length > 1)
            chartDatasets = [...chartDatasets, {...datasets[1]}]

        const data = {
            labels,
            datasets: chartDatasets
        };

        const chartEl = chartRef.current.getContext("2d");

        if(chartIdRef.current) return;
        const newChartId = new ChartJS(chartEl, {
              type: "custombar",
              data: {
                  //Bring in data
                  labels: ["Jan", "Feb", "March"],
                  datasets: [
                      {
                          label: "Sales",
                          data: [100, 200, 300],
                      }
                  ]
              },
              options: {
                  //Customize chart options
              }
          });
        chartIdRef.current = 1

    }, [])

    return (
        <canvas
            key={chartRef}
            ref={chartRef}
        >
          
        </canvas>
    )
}

export default memo(ProfitLossChart);