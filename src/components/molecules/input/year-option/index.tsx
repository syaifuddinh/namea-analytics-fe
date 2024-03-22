"use client"

import { useState } from "react"
import { useEffect } from "react"
import RowOptionInput from "@/components/molecules/input/row-option"

const frequencies = [
	{
		value: "2023",
		label: "2023",
	},
	{
		value: "2022",
		label: "2022",
	},
	{
		value: "2021",
		label: "2021",
	}
]

type FrequencyInputType = {
	value?: any,
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
	    		width="177px"
	    		itemPaddingLeft="0.5rem"
	    		onChange={onChange}
	    		options={frequencies}
	    	/>
	    </div>
 	)
}
