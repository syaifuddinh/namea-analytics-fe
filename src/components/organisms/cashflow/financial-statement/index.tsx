import MonthInput from "@/components/molecules/input/month"
import Debt from "./debt"
import { FinancialStatementImage1 } from "@/components/atoms/Icons"
import { FinancialStatementImage2 } from "@/components/atoms/Icons"
import { FinancialStatementImage5 } from "@/components/atoms/Icons"
import { FinancialStatementImage6 } from "@/components/atoms/Icons"

const ledger = [
	{
		"id": 1,
		"title": "Kas Besar",
		"subcategory": "Pinjaman Dana Joni",
		"balance": "6.860.700",
		"icon": <FinancialStatementImage1 />
	},
	{
		"id": 2,
		"title": "Hutang",
		"subcategory": "Pemasukan Uang",
		"balance": "6.860.700",
		"icon": <FinancialStatementImage2 />
	},
	{
		"id": 3,
		"title": "Category Name",
		"subcategory": "Pemasukan Uang",
		"balance": "6.860.700",
		"icon": <img src={"/images/financial-statement/mullet.svg"} />
	},
	{
		"id": 4,
		"title": "Category",
		"subcategory": "Pinjaman Dana Joni",
		"balance": "6.860.700",
		"icon": <img src={"/images/financial-statement/formal.svg"} />
	},
	{
		"id": 5,
		"title": "Category Name",
		"subcategory": "Pinjaman Dana Joni",
		"balance": "6.860.700",
		"icon": <FinancialStatementImage5 />
	},
	{
		"id": 6,
		"title": "Category Name",
		"subcategory": "Pemasukan Uang",
		"balance": "6.860.700",
		"icon": <FinancialStatementImage6 />
	},
	{
		"id": 7,
		"title": "Category Name",
		"subcategory": "Pemasukan Uang",
		"balance": "6.860.700",
		"icon": <FinancialStatementImage2 />
	},
	{
		"id": 8,
		"title": "Category Name",
		"subcategory": "Pinjaman Dana Joni",
		"balance": "6.860.700",
		"icon": <img src={"/images/financial-statement/formal.svg"} />
	}
]

export default function FinancialStatement({ className }) {
	return (
		<div className={`${className}`}>
			<div className="font-light mb-2 text-lg leading-[26px] text-gray-10">
				Financial Statement
			</div>

			<MonthInput />

			<div className="flex flex-col lg:flex-row flex-wrap lg:*:w-[49%] mt-8 gap-5">
				{
					ledger.map((item, index) => (
						<Debt
							key={item.id}
							title={item.title}
							subcategory={item.subcategory}
							balance={item.balance}
							icon={item.icon}
						/>	
					))
				}
			</div>
		</div>
	)
}