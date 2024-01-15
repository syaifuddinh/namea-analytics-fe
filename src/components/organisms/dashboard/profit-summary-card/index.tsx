"use client"

import Card from "@/components/atoms/card";
import Chart from "@/components/atoms/chart";
import MoneyText from "@/components/atoms/text/money";
import TitleText from "@/components/atoms/text/title";
import SubtitleText from "@/components/atoms/text/subtitle";
import Icon from "@/components/atoms/icon";

const Header = () => {
	return (
		<div className="card_header">
			<div className="mb-1 flex items-center gap-2">
				<Icon
					src="dollar.svg"
					alt="dollar icon"
				/>
				<SubtitleText>
					Year to Date Profit/Lost
				</SubtitleText>
			</div>

			<MoneyText>
				492.509.249
			</MoneyText>
		</div>
	)
}

const labels = ["2020", "2021", "2022", "2023"]

const createGradient = () => {
	const ctx = document.createElement('canvas').getContext('2d');
	const gradient = ctx.createLinearGradient(0, 0, 0, 200);
	gradient.addColorStop(0, 'rgba(7, 183, 172, 1)');
	gradient.addColorStop(1, 'rgba(8, 121, 129, 1)');
	return gradient;
};

const datasets = [
	{
		borderRadius: 16,
		backgroundColor: createGradient(),
		data: [20000000, 30000000, 25000000, 19000000]
	}
]

const CostingOverviewCard = () => {
	return (
		<Card
			headerElement={<Header />}
		>
			<div class="costing-overview-card_content pt-5 px-3">
				<Chart
					labels={labels}
					datasets={datasets}
					variant="bar"
				/>
			</div>

			<div className="p-5 flex flex-col items-center">
				<TitleText>
					Total Profit
				</TitleText>
				<SubtitleText>
					Has been generated from the previous year.
				</SubtitleText>
			</div>
		</Card> 
	)
}

export default CostingOverviewCard;