"use client"

import { useState } from "react"
import { useEffect } from "react"
import "./index.style.css";

const frequencies = [
	{
		value: "weekly",
		label: "Weekly",
	},
	{
		value: "monthly",
		label: "Monthly",
	},
	{
		value: "yearly",
		label: "Yearly",
	}
]

type FrequencyInputType = {
	value?: "weekly"|"monthly"|"yearly",
	onChange: (newValue: string) => void 
}

export default function FrequencyInput({ 
	value,
	onChange
}: FrequencyInputType) {
	const [datasets, setDatasets] = useState(frequencies)
	const [dataValue, setDataValue] = useState(() => {
		if(!value) return frequencies[0].value;
		return value
	})

	const onChangeData = newValue => {
		setDataValue(newValue)
		onChange(newValue)
	}

	const onAssignValue = () => {
		if(!value) return;
		if(value === dataValue) return
		setDataValue(value)
	}

	useEffect(() => {
		onAssignValue()

		return () => false
	}, [value])

 	return (
	    <div className="frequency-input flex p-1">
	    	{ 
	    		datasets.map(item => (
			    	<div
			    		key={item.value}
			    		className={`frequency-input_item py-2 px-3 cursor-pointer ${item.value === dataValue ? "active" : ""}`}
			    		onClick={() => onChangeData(item.value)}
			    	>

			    		<div
			    			className="font-medium text-sm text-white-theme-color"
			    		>
			    			
				    		{ item.label }
			    		</div>
			    	</div>
	    		))
	    	}
	    </div>
 	)
}
