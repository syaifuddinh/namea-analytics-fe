"use client";

import Select from 'react-select';
import { useState } from "react";
import { useEffect } from "react";
import "./index.style.css";

type OptionType = {
	value: string|number,
	label: string
}

type SelectInputType = {
	placeholder?: string,
	value?: string|number,
	options: OptionType[],
	onChange: (newValue: string|number) => void
}

export default function SelectInput({ 
	value,
	placeholder,
	options,
	onChange
}: SelectInputType) {
	const [dataValue, setDataValue] = useState(null)

	const onAssignValue = () => {
		if(dataValue !== null) {
			if(dataValue.value === value) return
		}
		const newOptions = [...options]
		const index = newOptions.findIndex(item => item.value === value)
		if(index < 0) return;
		const newDataValue = newOptions[index]
		setDataValue(newDataValue)
	}

	useEffect(() => {
		onAssignValue()

		return () => false
	}, [value])

	const onChangeData = (newData) => {
		setDataValue(newData)
		const newValue = newData.value;
		onChange(newValue)
	}

	return (
		<div className="select-input">
		    <Select
		    	options={options}
		    	placeholder={placeholder}
		    	value={dataValue}
		    	onChange={onChangeData}
		    />
		</div>
	)
}
