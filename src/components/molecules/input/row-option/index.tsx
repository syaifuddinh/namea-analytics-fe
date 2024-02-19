"use client"

import { useState } from "react"
import { useEffect } from "react"


export default function RowOptionInput({ 
	value,
	options,
	width="216px",
	onChange
}: FrequencyInputType) {
	const [datasets, setDatasets] = useState(options)
	const [dataValue, setDataValue] = useState(() => {
		if(!value) return options[0].value;
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
	    <div
	    	className="row-option-input border border-[var(--Gray4)] rounded-[0.625rem] p-[0.21rem] flex gap-1 -tracking-[0.14px] min-h-[36px] max-h-[36px]"
	    	style={{"minWidth": width, "width": width, "maxWidth": width}}
	    >
	    	{ 
	    		options.map(item => (
			    	<div
			    		key={item.value}
			    		className={`row-option-input_item grow max-h-[1.75rem] py-[4px] px-[10px] cursor-pointer ${item.value === dataValue ? "text-[var(--Gray10)] bg-[var(--base-bg3)] rounded-[6px] border border-[var(--Gray1)]" : "text-[var(--Gray6)]"}`}
			    		onClick={() => onChangeData(item.value)}
			    	>

			    		<div
			    			className="font-extralight text-center tracking-[0.06px] text-sm leading-5"
			    		>
			    			
				    		{ item.label }
			    		</div>
			    	</div>
	    		))
	    	}
	    </div>
 	)
}
