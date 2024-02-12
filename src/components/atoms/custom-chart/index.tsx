"use client"

import Dot from "@/components/atoms/dot"
import BarChartItem from "@/components/atoms/bar-chart-item"
import { useState } from "react"
import { useRef } from "react"
import { useEffect } from "react"
import { simplifyNumber } from "@/utils/number"
import useLineController from "./line.controller"
import useBarController from "./bar.controller"
import useStackedBarController from "./stacked-bar.controller"

const CustomChart = ({
    labels, 
    values,
    variant,
    xClassname,
    isShowYAxes = true,
    maxValue = 0,
    chartPaddingTop = "1.75rem",
    contentHeight = 200,
    offsetY = "0px",
    onGenerateLegend
}) => {
    const gridElement = useRef(null)
    const canvasElement = useRef(null)
    const [yAxeLabels, setYAxeLabels] = useState(() => {
        const response = []
        if(maxValue < 1) return []
        const maxAmount = 5;
        const plafond = maxValue / maxAmount;
        let i = 0;
        for(i = maxAmount; i > 0; i--) {
            const newLabel = simplifyNumber(i * plafond)
            response.push(newLabel)
        }
        response.push(0)

        return response
    });
    const [dotList, setDotList] = useState(() => {
        const response = []

        for(let i = 0;i < 1200;i++) {
            response.push(i)
        }

        return response;
    })

    let itemValues = []
    let barLegends = []
    let stackedValues = []

    if(variant === "line") {
        useLineController(canvasElement, values, maxValue, labels.length);
    }
    else if(variant === "bar") {
        const bar = useBarController(gridElement, values, maxValue, onGenerateLegend)
        itemValues = bar.itemValues
        barLegends = bar.barLegends
    }
    else if(variant === "stacked-bar") {
        const bar = useStackedBarController(gridElement, values, maxValue)
        stackedValues = bar.stackedValues
    }

    return (
        <div className="custom-chart">
            <div className="flex">
                { isShowYAxes === true && (
                    <div className="custom-chart_y flex flex-col gap-[24px] py-[20px] px-[12px] border-r border-base-bg3 max-w-[3.4378rem] min-w-[3.4378rem] min-h-[16rem]">
                        { yAxeLabels.map(item => (
                              <div
                                key={item}
                                className="text-xs text-gray6 text-right font-extralight"
                              >
                                { item }
                            </div>  
                        )) }                  
                    </div>
                ) }
                <div
                    className={`custom-chart_content px-[20px] relative`}
                    style={{paddingTop: chartPaddingTop}}
                >
                    <div
                        ref={canvasElement}
                        className="absolute"
                    >
                        
                    </div>
                    <div
                        ref={gridElement}
                        className={`custom-chart_grid relative flex gap-[12px] flex-wrap overflow-hidden`}
                        style={{height: contentHeight + "px", maxHeight: contentHeight + "px"}}    
                     >
                        {  
                            dotList.map(item => (
                                <Dot key={item} />
                            ))
                        }

                       <div className="absolute w-full" style={{bottom: offsetY}}>
                        { variant === "bar" && (
                            <>
                                { itemValues.map((data, index) => (
                                    <>
                                        <div key={index} className="absolute flex flex-col gap-2" style={{bottom: "0%", left: data.left + "px"}}>
                                            { index <= barLegends.length - 1 && (
                                                <div key={index} className="flex justify-center">
                                                    { barLegends[index] }
                                                </div>
                                            ) }
                                            <div className="flex gap-1.5 items-end">
                                                { data.items.map((item, index2) => (
                                                    <BarChartItem
                                                        key={index2}
                                                        height={item.height + "px"}
                                                        width={item.width + "px"}
                                                        variant={index2 > 0 ? "secondary" : "primary"}
                                                    />
                                                )) }
                                            </div>
                                        </div>
                                    </>
                                ))}
                            </>
                        ) }

                        { variant === "stacked-bar" && (
                            <>
                                { stackedValues.map((data, index) => (
                                    <div key={index}>
                                        <div className="absolute flex flex-col-reverse gap-[6px]" style={{bottom: "0%", left: data.left + "px"}}>
                                            { data.items.map((item, index2) => (
                                                <BarChartItem
                                                    key={index2}
                                                    height={item.height + "px"}
                                                    width={item.width + "px"}
                                                    variant={index2 > 0 ? "secondary" : "primary"}
                                                />
                                            )) }
                                        </div>
                                    </div>
                                ))}
                            </>
                        ) }
                       </div>
                    </div>
                </div>
            </div>

            <div className="x-container min-h-[1.751rem] max-h-[1.751rem] border-t border-[var(--base-bg3)] flex items-center">
                { isShowYAxes === true && (
                    <div className="w-[55px]"></div>
                ) }

                <div className={`custom-chart_x flex grow justify-between py-1.5 ${xClassname}`}>
                    { labels.map(item => (
                          <div
                            key={item}
                            className="text-xs text-gray6 font-extralight"
                          >
                        { item }
                        </div>
                    )) }
                </div>
            </div>
        </div>
    )
}

export default CustomChart;