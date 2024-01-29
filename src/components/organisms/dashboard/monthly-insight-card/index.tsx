"use client"

import Card from "@/components/atoms/card"
import Chart from "@/components/atoms/chart"
import SubtitleText from "@/components/atoms/text/subtitle"
import Icon from "@/components/atoms/icon"
import Pile from "@/components/atoms/pile"
import MoneyText from "@/components/atoms/text/money"
import TinyText from "@/components/atoms/text/tiny"
import MutationLabel from "@/components/atoms/mutation-label"
import CustomChart from "@/components/atoms/custom-chart"
import "./index.style.css"
import { simplifyNumber } from "@/utils/number";

const Header = ({ 
	title, 
	mutationVariant,
	isShowProfitMargin,
	profitMargin,
	balance,
	mutationPercentage
}) => {
	return (
		<div className="card_header flex items-center justify-between max-h-[5.626rem]">
			<div className="card_header-container flex flex-col items-between pr-4">	
				<div className="card_header_title flex items-center gap-2">
					<Icon
						src="dollar.svg"
						alt="dollar"
					/>

					<div className="font-extralight text-sm text-gray6">
						{ title }
					</div>
				</div>

				<div className="card_header_description mt-1.5 flex items-center">
					<MoneyText
						className="mr-3"
					>
						{ balance }
					</MoneyText>				

					<div className="card_header_description__divider"></div>

					<MutationLabel
						value={mutationPercentage}
						variant={mutationVariant} 
						className="ml-3"
					/>

					<TinyText
						className="ml-2"
					>
						compared to last year
					</TinyText>
				</div>
			</div>

			{
				isShowProfitMargin === true && (
					<div className="profit-margin flex flex-col items-end">	
						<div className="flex gap-2 items-center">
							<Icon
								src="transparent/kanban.svg"
								alt="profit-margin-thumbnail"
							/>
							<div className="text-sm font-extralight text-[var(--Gray6)] -tracking-[0.2px]">
								Profit Margin
							</div>
						</div>
						<div className="text-white-theme-color mt-1.5 font-light flex items-center gap-2.5 -tracking-[0.16px]">
							<Pile variant="primary" />
							{ profitMargin }%
						</div>
					</div>
				)
			}
		</div>
	)
}

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug"]
const datasets = [
	{
		lineTension: 0.6,
		pointBorderWidth: 8,
		pointHoverBackgroundColor: "black",
		borderColor: "rgba(7, 183, 172, 1)",
		data: [20000000, 50000000, 120000000, 240000000, 150000000, 200000000, 4000000, 50000000]
	}
]

const MonthlyInsightCard = ({
	title,
	mutationVariant,
	isShowProfitMargin,
	profitMargin,
	balance,
	mutationPercentage
}) => {
	return (
		<Card
			className="w-full"
			paddingBottom="6px"
			headerElement={<Header 
				title={title}
				balance={balance}
				mutationPercentage={mutationPercentage}
				mutationVariant={mutationVariant}
				isShowProfitMargin={isShowProfitMargin}
				profitMargin={profitMargin}
			/>}
		>
			<div className="border-y border-[var(--base-bg3)] bg-[var(--base-bg5)]">
				<CustomChart
					values={[
						[
							450000,
							300000,
							400000,
							500000
						]
					]}
					labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"]}	
					maxValue={500000}
					xClassname="pl-[10px] pr-[20px]"
				/>
			</div>
		</Card>
	)
}

export default MonthlyInsightCard;