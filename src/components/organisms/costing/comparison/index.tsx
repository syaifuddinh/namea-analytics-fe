"use client"

import { useState } from "react";
import Card from "@/components/atoms/card";
import SelectInput from "@/components/atoms/input/select"
import Button from "@/components/atoms/button"
import BalanceCard from "./balance-card"
import CustomChart from "@/components/atoms/custom-chart"
import ComparisonTooltip from "@/components/atoms/comparison-tooltip"
import CostingCategoryInput from "@/components/molecules/input/costing-category"
import MonthSelectInput from "@/components/molecules/input/month-select"
import YearSelectInput from "@/components/molecules/input/year-select"

const Header = ({ onApplyButtonClick }) => (
	<div className="card_header">
		<div className="font-light text-gray-10">
			Costing Comparation
		</div>

		<div className="flex flex-col md:flex-row gap-[0.625rem] mt-3 *:grow">
			<CostingCategoryInput
				value={null}
				onChange={(newValue) => {}}
			/>

			<MonthSelectInput
				value={null}
				onChange={(newValue) => {}}
			/>

			<YearSelectInput
				value={null}
				onChange={(newValue) => {}}
			/>

			<Button
				variant="default"
				className="max-w-[106px]"
				onClick={onApplyButtonClick}
			>
				Apply Filters
			</Button>
		</div>
	</div>
)

const expenses = [
	{
		"id": 1,
		"year": "2023",
		"balance": "694.354.766"
	},
	{
		"id": 2,
		"year": "2022",
		"balance": "694.354.766"
	},
	{
		"id": 3,
		"year": "2021",
		"balance": "694.354.766"
	}
]

const labels = ["January", "February", "May", "June", "July", "August", "October", "December"]

export default function Comparison({ className }) {
	const [contentVisible, setContentVisible] = useState(false)

	const onApplyButtonClick = () => {
		setContentVisible(true)
	}

	return (
		<Card
			headerElement={<Header onApplyButtonClick={onApplyButtonClick} />}
			isDividerVisible={false}
			className={className}
		>
			{ contentVisible === true && (
				<div id="costing-comparison_content">
					<div
						id="costing-comparison_expenses"
						className="sm:h-[154px] flex items-center flex-col sm:flex-row sm:*:h-[114px] *:grow *:w-full gap-4 px-5"
					>
						{ expenses.map(item => (
							<BalanceCard
								key={item.id}
								year={item.year}
								balance={item.balance}
							/>
						)) }
					</div>
					
					<div className="costing-comparison_chart bg-base-bg5">
						<CustomChart
							variant="bar"
							tooltipAlign="bottom"
							maxValue={500000}
							labels={labels}
							xClassname="pl-[3rem] pr-[2.3rem]"
							fixedBarWidth={31.95}
							values={[
								[
									480000,
									480000,
									480000,
									480000,
									480000,
									480000,
									480000,
									480000
								],
								[
									200000,
									200000,
									200000,
									200000,
									200000,
									200000,
									200000,
									200000
								],
								[
									300000,
									300000,
									300000,
									300000,
									300000,
									300000,
									300000,
									300000
								]
							]}
							onGenerateTooltip={() => {
								return (
									<ComparisonTooltip 
										total={"54.643.864"}
										options={[
											{
												"label": "Jan 2021",
												"value": "25.333.333"
											},
											{
												"label": "Jan 2022",
												"value": "25.333.333"
											},
											{
												"label": "Jan 2023",
												"value": "25.333.333"
											}
										]}
									/>
								)
							}}
						/>
					</div>
				</div>
			) }

			{ contentVisible === false && (
				<div className="p-4 bg-base-bg5">
					<div className="no-data flex flex-col items-center justify-center h-[275px]">
						<img src="/images/crocodile.svg" alt="no-data-image" />
						<div className="no-data_description text-gray-6 text-sm font-extralight">
							Oops! There is no data yet!
						</div>
					</div>
				</div>
			) }
		</Card>
	)
}