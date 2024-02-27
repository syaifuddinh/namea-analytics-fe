import MonthInput from "@/components/molecules/input/month"
import Withdraw from "./withdraw"
import { FinancialStatementImage1 } from "@/components/atoms/Icons"
import { FinancialStatementImage2 } from "@/components/atoms/Icons"
import { FinancialStatementImage5 } from "@/components/atoms/Icons"
import { FinancialStatementImage6 } from "@/components/atoms/Icons"

const ledger = [
	{
		"id": 1,
		"title": "Categories Name",
		"description": "Staff Salary for the month of Jan",
		"balance": "24.600.590",
		"icon": <FinancialStatementImage2 />
	},
	{
		"id": 2,
		"title": "Categories Name",
		"description": "Staff Salary for the month of Jan",
		"balance": "24.600.590",
		"icon": <FinancialStatementImage1 />
	},
	{
		"id": 3,
		"title": "Categories Name",
		"description": "Staff Salary for the month of Jan",
		"balance": "24.600.590",
		"icon": <img src={"/images/financial-statement/mullet.svg"} />
	},
	{
		"id": 4,
		"title": "Categories Name",
		"description": "Staff Salary for the month of Jan",
		"balance": "24.600.590",
		"icon": <img src={"/images/financial-statement/formal.svg"} />
	},
	{
		"id": 5,
		"title": "Categories Name",
		"description": "Staff Salary for the month of Jan",
		"balance": "24.600.590",
		"icon": <FinancialStatementImage5 />
	},
	{
		"id": 6,
		"title": "Categories Name",
		"description": "Staff Salary for the month of Jan",
		"balance": "24.600.590",
		"icon": <FinancialStatementImage6 />
	}
]

export default function GeneralCosting({ className }) {
	return (
		<div className={`${className}`}>
			<div className="font-light mb-3 text-lg leading-[26px] text-gray-10">
				Monthly General Costing
			</div>

			<MonthInput />

			<div className="flex flex-col lg:flex-row flex-wrap lg:*:w-[49%] mt-8 gap-5">
				{
					ledger.map((item, index) => (
						<Withdraw
							key={item.id}
							title={item.title}
							description={item.description}
							balance={item.balance}
							icon={item.icon}
						/>	
					))
				}
			</div>
		</div>
	)
}