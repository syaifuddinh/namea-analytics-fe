import RowOptionInput from "@/components/molecules/input/row-option"

const tabs = [
	{
		"value": "competition-expense",
		"label": "Pengeluaran Lomba"
	},
	{
		"value": "cashback",
		"label": "Cashback"
	},
	{
		"value": "event",
		"label": "Event"
	}
]

export default function() {
	return (
		<RowOptionInput
			options={tabs}
			width="320px"
		/>
	)
}