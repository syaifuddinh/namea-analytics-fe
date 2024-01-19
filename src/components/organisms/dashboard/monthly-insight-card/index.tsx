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
	profitMargin
}) => {
	return (
		<div className="card_header flex items-center justify-between max-h-[90px]">
			<div className="card_header-container flex flex-col items-between pr-4">	
				<div className="card_header_title flex items-center gap-2">
					<Icon
						src="dollar.svg"
						alt="dollar"
					/>

					<SubtitleText>
						{ title }
					</SubtitleText>
				</div>

				<div className="card_header_description mt-1 flex items-center gap-3">
					<MoneyText>
						500.950.450
					</MoneyText>				

					<div className="card_header_description__divider"> </div>

					<MutationLabel value="23.8% (+24)" variant={mutationVariant} />

					<TinyText>
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
							<SubtitleText>
								Profit Margin
							</SubtitleText>
						</div>
						<div className="text-white-theme-color mt-2 font-medium flex items-center gap-2">
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
	profitMargin
}) => {
	return (
		<Card
			className="w-full"
			paddingBottom="6px"
			headerElement={<Header 
				title={title}
				mutationVariant={mutationVariant}
				isShowProfitMargin={isShowProfitMargin}
				profitMargin={profitMargin}
			/>}
		>
			<div className="border-y border-[var(--base-bg3)]">
				<CustomChart
					values={["500K", "400K", "300K", "200K", "100K", "0"]}
					labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"]}	
				/>
			</div>
		</Card>
	)
}

export default MonthlyInsightCard;