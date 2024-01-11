"use client"

import SelectInput from "../../../components/atoms/select-input";

const options = [
	{ value: 1, label: "January"},
	{ value: 2, label: "February"},
	{ value: 3, label: "March"},
	{ value: 4, label: "April"},
	{ value: 5, label: "May"},
	{ value: 6, label: "June"},
	{ value: 7, label: "July"},
	{ value: 8, label: "August"},
	{ value: 9, label: "September"},
	{ value: 10, label: "Oktober"},
	{ value: 11, label: "November"},
	{ value: 12, label: "Desember"}
]

type MonthInputComponent = {
	value: number,
	onChange: (newValue: number) => void
}

export default function MonthInput({
	value,
	onChange
}: MonthInputComponent) {
  return (
  	<div className="month-input">
	    <SelectInput
	    	placeholder="Select month"
	    	options={options}
	    	value={value}
	    	onChange={onChange}
	    />
  	</div>
  )
}
