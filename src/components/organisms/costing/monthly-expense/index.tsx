import MonthInput from "@/components/molecules/input/month"
import { InputSearch } from "@/components/atoms/search";
import DatePeriodInput from "@/components/atoms/input/date-period"
import ExpenseCard from "./expense-card"

const items = [
	{
		"title": "Website 1",
		"balance": "280.854.422"
	},
	{
		"title": "Website 2",
		"balance": "153.442.680"
	},
	{
		"title": "Website 3",
		"balance": "80.542.426"
	},
	{
		"title": "Website 4",
		"balance": "280.854.422"
	},
	{
		"title": "Website 5",
		"balance": "80.542.426"
	},
	{
		"title": "Website 6",
		"balance": "153.442.680"
	},
	{
		"title": "Website 7",
		"balance": "153.442.680"
	},
	{
		"title": "Website 8",
		"balance": "153.442.680"
	},
	{
		"title": "Website 9",
		"balance": "153.442.680"
	},
	{
		"title": "Website 10",
		"balance": "153.442.680"
	},
	{
		"title": "Website 11",
		"balance": "153.442.680"
	},
	{
		"title": "Website 12",
		"balance": "153.442.680"
	}
]

export default function MonthlyExpense({ className }) {
	return (
		<div className={className}>
			<div className="monthly-expense_title font-light text-[18px] leading-[26px] text-gray-10">
				Monthly Pengeluaran Lomba
			</div>

			<MonthInput className="mt-3" />

			<div className="monthly-expense_filter flex mt-8">
				<InputSearch
		            name={"SuperAgent"}
		            placeholder="Search agent...."
		            onChange={(value) => {}}
		            className="h-[2.25rem]"
		            className1="ml-1"
		        />

		        <DatePeriodInput />
			</div>

			<div className="monthly-expense_content mt-5 gap-5 grid grid-cols-4 ">
				{ items.map(item => (
					<ExpenseCard
						key={item.title}
						title={item.title}
						balance={item.balance}
					/>
				)) }
			</div>
		</div>
	)
}