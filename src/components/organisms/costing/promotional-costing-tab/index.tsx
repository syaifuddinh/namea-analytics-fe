import RowOptionInput from "@/components/molecules/input/row-option"

const tabs = [
	{
		"value": "competition-expense",
		"label": "Pengeluaran Lomba",
		"url": "/costing/promotional"
	},
	{
		"value": "cashback",
		"label": "Cashback",
		"url": "/promotional"
	},
	{
		"value": "event",
		"label": "Event",
		"url": "/costing/promotional/event"
	}
]

export default function({ value = "competition-expense" }) {
	return (
		<RowOptionInput
			value={value}
			options={tabs}
			width="320px"
			containerHeight="40px"
			childrenHeight="32px"
			onChange={() => {}}
		/>
	)
}