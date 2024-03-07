"use client"

import SelectInput from "@/components/atoms/input/select"

const options = [
	{
		"value": "january",
		"label": "January"
	},
	{
		"value": "february",
		"label": "February"
	},
	{
		"value": "march",
		"label": "March"
	},
	{
		"value": "april",
		"label": "April"
	},
	{
		"value": "may",
		"label": "May"
	},
	{
		"value": "june",
		"label": "June"
	},
	{
		"value": "july",
		"label": "July"
	},
	{
		"value": "august",
		"label": "August"
	},
	{
		"value": "september",
		"label": "September"
	},
	{
		"value": "october",
		"label": "October"
	},
	{
		"value": "november",
		"label": "November"
	},
	{
		"value": "december",
		"label": "December"
	},
]

export default function MonthSelectInput({ value, onChange }) {
	return (
		<SelectInput
			placeholder="Select Month"
			options={options}
			value={value}
			onChange={onChange}
		/>
	)
}