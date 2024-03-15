"use client"

import { useState } from "react"
import { useEffect } from "react"


export default function RowOptionInput({ 
	value,
	options,
	variant = "default",
	containerHeight="36px",
	childrenHeight="1.75rem",
	childrenBorderRadius="6px",
	itemPaddingLeft="0.625rem",
	width="216px",
	borderRadius="0.625rem",
	onChange
}: FrequencyInputType) {
	const [datasets, setDatasets] = useState(options)
	const [dataValue, setDataValue] = useState(() => {
		if(!value) return options[0].value;
		return value
	})

	const onChangeData = (newValue, e) => {
		const href = e.target.getAttribute("href")
		if(href === "#") e.preventDefault()
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
	    	className="row-option-input border border-[var(--Gray4)] p-[0.21rem] flex gap-1 -tracking-[0.14px]"
	    	style={{"minWidth": width, "width": width, "maxWidth": width, "maxHeight": containerHeight, "minHeight": containerHeight, "borderRadius": borderRadius}}
	    >
	    	{ 
	    		options.map(item => (
			    	<a
			    		key={item.value}
			    		href={item.url ? item.url : "#"}
			    		className={`row-option-input_item font-extralight text-center tracking-[0.06px] text-sm leading-5 grow flex items-center justify-center py-[4px] pr-[10px] cursor-pointer ${item.value === dataValue ? "text-[var(--Gray10)] bg-[var(--base-bg3)] border border-[var(--Gray1)]" : "text-[var(--Gray6)]"}`}
			    		style={{"maxHeight": childrenHeight, "minHeight": childrenHeight, "paddingLeft": itemPaddingLeft, "borderRadius": childrenBorderRadius}}
			    		onClick={(e) => onChangeData(item.value, e)}
			    	>
				    	{ item.label }
			    	</a>
	    		))
	    	}
	    </div>
 	)
}
