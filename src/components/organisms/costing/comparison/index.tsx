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
import TitleText from "@/components/atoms/text/title"

const Header = ({ onApplyButtonClick }) => (
	<div className="border-y border-base-bg3 h-[112px] pt-[1.125rem] px-5 bg-base-bg5">
		<TitleText fontSize="16px" fontWeight={400}>
			Costing Comparation
		</TitleText>

		<div className="flex flex-col md:flex-row gap-2.5 mt-2.5 w-full">
			<div className="grow *:grow flex gap-2.5 flex-col md:flex-row *:w-[33.3333%]">
				<CostingCategoryInput
					value={null}
					onChange={(newValue) => {}}
				/>

				<MonthSelectInput
					value={null}
					variant="multiple"
					onChange={(newValue) => { console.log(newValue) }}
				/>

				<YearSelectInput
					value={null}
					variant="multiple"
					onChange={(newValue) => {}}
				/>
			</div>

			<Button
				variant="default"
				className="max-w-[106px] min-w-[106px]"
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
			paddingTop="6px"
		>
			{ contentVisible === true && (
				<div id="costing-comparison_content">
					<div
						id="costing-comparison_expenses"
						className="sm:h-[154px] flex items-center flex-col sm:flex-row sm:*:h-[114px] *:grow *:w-full gap-4 pl-[19px] pr-5"
					>
						{ expenses.map(item => (
							<BalanceCard
								key={item.id}
								year={item.year}
								balance={item.balance}
							/>
						)) }
					</div>
					
					<div className="costing-comparison_chart border-b border-base-bg3 bg-base-bg5 rounded-b-xl overflow-hidden">
						<CustomChart
							variant="bar"
							tooltipAlign="bottom"
							maxValue={500000}
							labels={labels}
							xClassname="pl-[51px] pr-[44px]"
							yPaddingTop="19px"
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
				<div className="p-4 bg-base-bg5 border-b border-base-bg3 rounded-b-xl">
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