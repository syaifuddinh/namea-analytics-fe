"use client"

import SelectInput from "@/components/atoms/input/select"

const options = [
	{
		"value": "2024",
		"label": "2024"
	},
	{
		"value": "2023",
		"label": "2023"
	},
	{
		"value": "2022",
		"label": "2022"
	},
	{
		"value": "2021",
		"label": "2021"
	},
]

export default function YearSelectInput({ 
	value, 
	variant = "single",
	onChange 
}: {
	value: string | string[],
	variant: "single"|"multiple",
	onChange: (newValue: string|string[]) => void,
}) {
	return (
		<SelectInput
			placeholder="Select Year"
			options={options}
			value={value}
			variant="multiple"
			onChange={onChange}
		/>
	)
}