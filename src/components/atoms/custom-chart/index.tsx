"use client"

import Dot from "@/components/atoms/dot"
import { useState } from "react"

const CustomChart = ({
    labels, 
    values,
    isShowYAxes = true 
}) => {
    const [dotList, setDotList] = useState(() => {
        const response = []

        for(let i = 0;i < 1200;i++) {
            response.push(i)
        }

        return response;
    })

    return (
        <div className="custom-chart">
            <div className="flex">
                { isShowYAxes === true && (
                    <div className="custom-chart_y flex flex-col gap-[24px] py-[20px] px-[12px] border-r border-base-bg3 max-w-[55px]">
                        { values.map(item => (
                              <div
                                key={item}
                                className="text-xs text-gray6 text-right"
                              >
                                { item }
                            </div>  
                        )) }                  
                    </div>
                ) }
                <div className="custom-chart_content pt-[28px] px-[20px]">
                    <div className="custom-chart_grid flex gap-[12px] flex-wrap max-h-[200px] overflow-hidden">
                        {  
                            dotList.map(item => (
                                <Dot key={item} />
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="custom-chart_x border-t-1 border-base-bg3 flex justify-between py-[6px] pl-[65px] pr-[20px]">
                { labels.map(item => (
                      <div
                        key={item}
                        className="text-sm text-gray6"
                      >
                        { item }
                    </div>
                )) }
            </div>
        </div>
    )
}

export default CustomChart;