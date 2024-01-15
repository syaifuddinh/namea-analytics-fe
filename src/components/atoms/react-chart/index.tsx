"use client"

import { AxisOptions, Chart } from "react-charts";
import React from "react"

type DailyStars = {
   date: string,
   stars: number,
}
 
type Series = {
  label: string,
  data: DailyStars[]
}

const data: Series[] = [
   {
     label: 'React Charts',
     data: [
       {
         date: "Jan",
         stars: 10,
       },
       {
         date: "Feb",
         stars: 15,
       },
       {
         date: "Mar",
         stars: 30,
       }
       // ...
     ],
     color: "green",
     primaryAxisId: "primarychart"
   }
 ]

const ReactChart = () => {
     const primaryAxis = React.useMemo(
       (): AxisOptions<DailyStars> => ({
         getValue: datum => datum.date,
         styles: { color: "red" },
         showGrid: false,
         show: true,
       }),
       []
     )
   
     const secondaryAxes = React.useMemo(
       (): AxisOptions<DailyStars>[] => [
         {
           getValue: datum => datum.stars,
           elementType: "line",
           min: 0,
           hardMin: 0,
           showGrid: false,
           show: true,
           showDatumElements: true,
           styles: {
               tick: { color: "blue", background: "blue" }
           },
           formatters: {
               scale: value => "Rp " + value
           }
         },
       ],
       []
     )

      return (
          <>
             <Chart
               options={{
                 data,
                 primaryAxis,
                 secondaryAxes,
                 defaultColors: ["red"],
               }}
             />
         </>
       )
}

export default ReactChart;