"use client"

import { useState } from "react"
import { useEffect } from "react"
import RowOptionInput from "@/components/molecules/input/row-option"

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

const dailyMonthlyFrequencies = [
	{
		value: "monthly",
		label: "Monthly",
	},
	{
		value: "daily",
		label: "Daily",
	}
]

type FrequencyInputType = {
	value?: "weekly"|"monthly"|"yearly",
	onChange: (newValue: string) => void 
}

export default function FrequencyInput({ 
	value,
	onChange,
	variant = "default",
	width="216px",
	className = ""
}: FrequencyInputType) {

 	return (
	    <div className={className}>
	    	<RowOptionInput
	    		value={value}
	    		onChange={onChange}
	    		width={width}
	    		options={variant === "default" ? frequencies : dailyMonthlyFrequencies}
	    	/>
	    </div>
 	)
}
