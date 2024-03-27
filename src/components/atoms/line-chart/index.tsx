"use client";

import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import Dot from "@/components/atoms/dot";
import Pile from "@/components/atoms/pile";
import { generateId } from "@/utils/number";

const pileWidth = 4;

export default function LineChart({ maxValue, values = [], className = "" }) {
  const boardRef = useRef(null);
  const [chartValues, setChartValues] = useState([]);
  const [boardHeight, setBoardHeight] = useState(0);
  const [boardWidth, setBoardWidth] = useState(0);

  const [dotList, setDotList] = useState(() => {
    const response = [];

    for (let i = 0; i < 1000; i++) {
      response.push(i);
    }

    return response;
  });

  const onInitiateChart = () => {
    if (!boardRef.current) return;
    const boardEl = boardRef.current;
    const dimension = boardEl.getBoundingClientRect();
    const { width, height } = dimension;
    setBoardHeight(height);
    setBoardWidth(width);
    const length = values.length;
    const gap = width / (length - 1);
    const newChartValues = [];
    values.forEach((item, index) => {
      let leftValue = index * gap;
      if (index === values.length - 1) leftValue -= 12;
      const left = leftValue + "px";

      let bottomValue = (item / maxValue) * (height - 2);
      const bottom = bottomValue + "px";
      newChartValues.push({
        id: generateId(),
        value: item,
        left,
        bottom,
        leftValue,
        bottomValue,
      });
    });

    setChartValues(newChartValues);
    console.log("newChart", newChartValues);
  };

  useEffect(() => {
    onInitiateChart();

    return () => false;
  }, [boardRef]);

  return (
    <div className={`line-chart relative h-[69px] ${className}`}>
      <div className="flex flex-wrap gap-[8.02px] overflow-hidden h-full">
        {dotList.map((item) => (
          <Dot key={item} />
        ))}
      </div>

      <div ref={boardRef} className="absolute z-10 top-0 left-0 w-full h-full">
        {chartValues.map((item) => (
          <Pile
            key={item.id}
            size="4px"
            variant="secondary-success"
            className="absolute"
            style={{ bottom: item.bottom, left: item.left }}
          />
        ))}
      </div>
      <svg
        width={boardWidth}
        height={boardHeight}
        className="absolute top-0 left-0"
      >
        {chartValues.map((item, index) => (
          <>
            {index < chartValues.length - 1 && (
              <line
                key={item.id}
                x1={item.leftValue}
                y1={
                  index === 0
                    ? boardHeight * 0.95 - item.bottomValue
                    : item.bottomValue - boardHeight * 0.96 > -1
                    ? item.bottomValue - boardHeight * 0.96
                    : -(item.bottomValue - boardHeight * 0.96)
                }
                x2={chartValues[index + 1].leftValue}
                y2={
                  chartValues[index + 1].bottomValue - boardHeight * 0.96 > -1
                    ? chartValues[index + 1].bottomValue - boardHeight * 0.96
                    : -(chartValues[index + 1].bottomValue - boardHeight * 0.96)
                }
                style={{ stroke: "rgba(43, 205, 185, 0.2)", strokeWidth: 1 }}
              />
            )}
          </>
        ))}
      </svg>
    </div>
  );
}
