"use client"

import { useState } from "react"
import { useEffect } from "react"
import RowOptionInput from "@/components/molecules/input/row-option"

const frequencies = [
	{
		value: "january",
		label: "January"
	},
	{
		value: "february",
		label: "February"
	},
	{
		value: "march",
		label: "March"
	},
	{
		value: "april",
		label: "April"
	},
	{
		value: "may",
		label: "May"
	},
	{
		value: "june",
		label: "June"
	},
	{
		value: "july",
		label: "July"
	},
	{
		value: "august",
		label: "August"
	},
	{
		value: "september",
		label: "September"
	},
	{
		value: "october",
		label: "October"
	},
	{
		value: "november",
		label: "November"
	},
	{
		value: "december",
		label: "December"
	}
]

type FrequencyInputType = {
	value?: "weekly"|"monthly"|"yearly",
	onChange: (newValue: string) => void 
}

export default function FrequencyInput({ 
	value,
	onChange,
	className = ""
}: FrequencyInputType) {

 	return (
	    <div className={className}>
	    	<RowOptionInput
	    		value={value}
	    		width="965px"
	    		containerHeight="44px"
	    		childrenHeight="36px"
	    		onChange={onChange}
	    		borderRadius="0.75rem"
	    		childrenBorderRadius="0.5rem"
	    		options={frequencies}
	    	/>
	    </div>
 	)
}
