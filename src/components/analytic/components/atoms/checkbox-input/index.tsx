"use client"

import "./index.style.css";
import DoneIcon from "../../../icons/white/done.svg"
import Image from "next/image";
import { useState } from "react"

type CheckboxInputType = {
	label: string,
	value: boolean
}

export default function CheckboxInput({ 
	label,
	value
}) {
	const [dataValue, setDataValue] = useState(value ? value : false);

	const onChangeData = () => {
		const newValue = !dataValue
		setDataValue(newValue)
		onChange(newValue)
	}

 	return (
	    <div
	    	className={`checkbox-input flex gap-2 items-center cursor-pointer`}
	    	onClick={onChangeData}
	    >
	        <div className="checkbox-input_control">
	        	{ dataValue === true && (
		        	<Image
		        		src={DoneIcon}
		        		alt="checkbox-icon"
		        	/>
	        	) }
	        </div>
	        <div className="checkbox-input_label text-sm font-medium">
	        	{ label }
	        </div>
	    </div>
  	)
}
