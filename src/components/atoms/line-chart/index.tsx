"use client"

import { useState } from "react"
import Dot from "@/components/atoms/dot";
import Pile from "@/components/atoms/pile"

export default function LineChart({ 
    className = ""
}) {
    const [dotList, setDotList] = useState(() => {
        const response = [];

        for (let i = 0; i < 1000; i++) {
          response.push(i);
        }

        return response;
    });

    return (
        <div className={`line-chart relative h-[69px] ${className}`}>
            <div className="flex flex-wrap gap-[8.02px] overflow-hidden h-full">
                {dotList.map((item) => (
                  <Dot key={item} />
                ))}
            </div>

            <div className="absolute top-0 left-0 w-full h-full">
                <Pile
                    size="4px"
                    variant="secondary-success"
                    className="absolute"
                />
            </div>
        </div>
    )
}