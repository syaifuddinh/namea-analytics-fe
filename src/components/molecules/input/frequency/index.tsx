"use client"

import { useState } from "react"
import { useEffect } from "react"

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
	    <div className="frequency-input border border-[var(--Gray4)] rounded-[0.625rem] p-[0.21rem] flex gap-1 -tracking-[0.14px] min-h-[36px] max-h-[36px] min-w-[216px] max-w-[216px]">
	    	{ 
	    		datasets.map(item => (
			    	<div
			    		key={item.value}
			    		className={`frequency-input_item max-h-[1.75rem] py-[4px] px-[10px] cursor-pointer ${item.value === dataValue ? "text-[var(--Gray10)] bg-[var(--base-bg3)] rounded-[6px] border border-[var(--Gray1)]" : "text-[var(--Gray6)]"}`}
			    		onClick={() => onChangeData(item.value)}
			    	>

			    		<div
			    			className="font-extralight tracking-[0.06px] text-sm leading-5"
			    		>
			    			
				    		{ item.label }
			    		</div>
			    	</div>
	    		))
	    	}
	    </div>
 	)
}
