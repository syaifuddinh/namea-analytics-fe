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
import ProfitTooltip from "@/components/atoms/profit-tooltip"
import "./index.style.css"
import { simplifyNumber } from "@/utils/number";
import { toCurrency } from "@/utils/number";

const Header = ({ 
	title, 
	mutationVariant,
	isShowProfitMargin,
	profitMargin,
	balance,
	mutationPercentage
}) => {
	return (
		<div className="card_header max-h-[5.626rem]">
			<div className="card_header-container flex  justify-between items-start">
				<div className="card_header_title flex items-center gap-2">
					<Icon
						src="dollar.svg"
						alt="dollar"
					/>

					<div className="font-extralight text-sm text-gray6">
						{ title }
					</div>
				</div>

				{
					isShowProfitMargin === true && (
						<div className="profit-margin flex flex-col">	
							<div className="flex gap-2 items-center">
								<Icon
									src="transparent/kanban.svg"
									alt="profit-margin-thumbnail"
								/>
								<div className="text-sm font-extralight text-[var(--Gray6)] tracking-[0.06px]">
									Profit Margin
								</div>
							</div>
						</div>
					)
				}
			</div>


			<div className="flex justify-between items-start mt-1.5">	
				<div className="card_header_description flex items-center">
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

				{
					isShowProfitMargin === true && (
						<div className="text-white-theme-color font-light flex items-center gap-2.5 -tracking-[0.16px]">
							<Pile variant="primary" />
							{ profitMargin }%
						</div>
					)
				}
			</div>
		</div>
	)
}

const labels = ["Jan", "", "Feb", "", "Mar", "", "Apr", "", "May", "", "Jun", "", "Jul", "", "Aug"]
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
			<CustomChart
				values={[
					[
						100000, 150000,
						150000, 200000,
						200000, 125000,
						250000, 250000,
						350000, 375000,
						450000, 450000,
						375000, 400000,
						450000	
					]
				]}
				variant="line"
				labels={labels}	
				maxValue={500000}
				xClassname="pl-[10px] pr-[20px]"
				onGenerateTooltip={(item, index) => {
					let month = labels[index]
					if(!month) month = labels[index - 1]
					return <ProfitTooltip
						title={`${month} 2023`}
						price={toCurrency(item)}
					/>
				}}
			/>
		</Card>
	)
}

export default MonthlyInsightCard;