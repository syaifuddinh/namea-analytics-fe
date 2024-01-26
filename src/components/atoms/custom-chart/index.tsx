"use client"

import Dot from "@/components/atoms/dot"
import BarChartItem from "@/components/atoms/bar-chart-item"
import { useState } from "react"
import { useRef } from "react"
import { useEffect } from "react"
import { simplifyNumber } from "@/utils/number"
import "./index.style.css"

const itemGap = 16
const subitemGap = 6

const CustomChart = ({
    labels, 
    values,
    variant,
    xClassname,
    isShowYAxes = true,
    maxValue = 0,
    contentHeight = 200
}) => {
    const gridElement = useRef(null)
    const [itemValues, setItemValues] = useState([])
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

    const onInitiateBarItem = () => {
        if(gridElement.current === null) return;
        if(values.length === 0) return;
        if(values[0].length === 0) return;
        if(typeof values[0] !== "object") return;
        const gridHeight = gridElement.current.clientHeight
        const gridWidth = gridElement.current.clientWidth
        const itemAmount = values[0].length
        const proportionalWidth = gridWidth / itemAmount
        let newItemValues = []
        newItemValues = values[0].map((item, index) => {
            // console.log({ valueBar: item})
            let newValues = {}
            const newList = values.map((item2, index2) => {
                const newData = {}
                const newValue = values[index2][index]
                newData.value = newValue
                const proportional = maxValue / newValue
                newData.height = gridHeight / proportional 
                newData.width = (gridWidth / itemAmount) / 3

                console.log({newData})

                return newData
            })
            newValues.left = (index * (proportionalWidth + subitemGap + 2))
            // if(index > 0)
            //     newValues.left += (gridWidth / (itemAmount * 8) )
            newValues.items = newList
            console.log({"new item value": newValues})

            return newValues
        })

        console.log({ newItemValues })
        newItemValues = newItemValues.filter(item => item != null)

        setItemValues(newItemValues)
    }

    useEffect(() => {
        onInitiateBarItem()


        return () => false
    }, [gridElement])

    return (
        <div className="custom-chart">
            <div className="flex">
                { isShowYAxes === true && (
                    <div className="custom-chart_y flex flex-col gap-[24px] py-[20px] px-[12px] border-r border-base-bg3 max-w-[3.4378rem] min-w-[3.4378rem] min-h-[16rem]">
                        { yAxeLabels.map(item => (
                              <div
                                key={item}
                                className="text-xs text-gray6 text-right font-light -tracking-[0.12px]"
                              >
                                { item }
                            </div>  
                        )) }                  
                    </div>
                ) }
                <div className="custom-chart_content pt-[28px] px-[20px]">
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

                        { variant === "bar" && (
                           <div className="absolute w-full" style={{bottom: "0px"}}>
                                { itemValues.map((data, index) => (
                                    <>
                                        <div key={index} className="absolute flex gap-[6px] items-end" style={{bottom: "0%", left: data.left + "px"}}>
                                            { data.items.map((item, index2) => (
                                                <BarChartItem
                                                    key={index2}
                                                    height={item.height + "px"}
                                                    width={item.width + "px"}
                                                    variant={index2 > 0 ? "secondary" : "primary"}
                                                />
                                            )) }
                                        </div>
                                    </>
                                ))}
                           </div>
                        ) }
                    </div>
                </div>
            </div>

            <div className="x-container min-h-[1.75rem] border-t border-[var(--base-bg3)] flex items-center">
                <div className="w-[55px]"></div>

                <div className={`custom-chart_x flex justify-between py-[6px] ${xClassname}`}>
                    { labels.map(item => (
                          <div
                            key={item}
                            className="text-xs text-gray6 font-light -tracking-[0.12px]"
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