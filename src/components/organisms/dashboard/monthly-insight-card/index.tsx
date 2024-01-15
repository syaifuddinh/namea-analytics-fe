"use client"

import Card from "@/components/atoms/card"
import Chart from "@/components/atoms/chart"
import SubtitleText from "@/components/atoms/text/subtitle"
import Icon from "@/components/atoms/icon"
import MoneyText from "@/components/atoms/text/money"
import TinyText from "@/components/atoms/text/tiny"
import MutationLabel from "@/components/atoms/mutation-label"
import "./index.style.css"

const Header = ({ title, mutationVariant }) => {
	return (
		<div className="card_header">
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
	mutationVariant
}) => {
	return (
		<Card
			headerElement={<Header 
				title={title}
				mutationVariant={mutationVariant}
			/>}
		>
			<div className="pt-5 px-3">
				<Chart
					labels={labels}
					datasets={datasets}
					variant="line"
				/>
			</div>
		</Card>
	)
}

export default MonthlyInsightCard;