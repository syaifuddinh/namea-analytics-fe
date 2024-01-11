"use client"

import Item from "./item";
import "./index.style.css";
import { useState } from "react";
import { getCurrentYear } from "../../../utils/date";

const year = getCurrentYear()
let data = []
for(let i = year; i > year - 3;i--) {
    data = [...data, {
        "id": i,
        "value": i
    }]
}

type YearOptionInputType = {
    value?: number,
    onChange: (newValue: number) => void,
}

export default function YearOptionInput({ 
    value,
    onChange 
}: YearOptionInputType) {
    const [years, setYears] = useState(data)
    const [dataValue, setDataValue] = useState(() => {
        if(!value) return years[0].id;

        return value
    })

    const onChangeYear = selectedId => {
        setDataValue(selectedId)
        onChange(selectedId)
    }

    return (
        <div className="year-option-input flex">
            {
                years.map(item => (
                    <Item
                        key={item.id}
                        isActive={item.id === dataValue}
                        onClick={() => onChangeYear(item.id)}
                    >
                    	{ item.value }
                    </Item>	
                ))
            }
        </div>
    )
}
