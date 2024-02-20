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
	onChange
}: FrequencyInputType) {

 	return (
	    <div>
	    	<RowOptionInput
	    		value={value}
	    		width="965px"
	    		onChange={onChange}
	    		options={frequencies}
	    	/>
	    </div>
 	)
}