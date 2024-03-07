"use client"

import SelectInput from "@/components/atoms/input/select"

const options = [
	{
		"value": "wages",
		"label": "Wages"
	},
	{
		"value": "operational",
		"label": "Operational"
	}
]

export default function CostingCategoryInput({ }) {
	return (
		<SelectInput
			placeholder="Select Category"
			options={options}
		/>
	)
}