"use client"

import Card from "@/components/atoms/card";
import Chart from "@/components/atoms/chart";
import MoneyText from "@/components/atoms/text/money";
import TitleText from "@/components/atoms/text/title";
import SubtitleText from "@/components/atoms/text/subtitle";
import Icon from "@/components/atoms/icon";
import ProfitLossChart from "@/components/atoms/profit-loss-chart"

const Header = () => {
	return (
		<div className="card_header p-[20px]">
			<div className="mb-1 flex items-center gap-[8px]">
				<Icon
					src="dollar.svg"
					alt="dollar icon"
				/>
				<SubtitleText>
					Year to Date Profit/Lost
				</SubtitleText>
			</div>

			<MoneyText
				className="mt-[6px]"
			>
				492.509.249
			</MoneyText>
		</div>
	)
}

const labels = ["2020", "2021", "2022", "2023"]

const createGradient = () => {
	const ctx = document.createElement('canvas').getContext('2d');
	const gradient = ctx.createLinearGradient(0, 0, 0, 200);
	gradient.addColorStop(0, '#07B7AC');
	gradient.addColorStop(1, '#087981');
	// ctx.shadowColor = 'rgba(20, 10, 0, 0.5)';
 //    ctx.shadowBlur = 5;
 //    ctx.shadowOffsetX = 3;
 //    ctx.shadowOffsetY = 3;

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
				
			</div>

			<div className="p-5 flex flex-col items-center">
				<div className="text-sm text-[var(--Gray10)] font-base leading-5">
					Total Profit
				</div>

				<div className="text-center text-[var(--Gray6)] text-sm leading-5 mt-[4px] font-light">
					Has been generated from the previous year.
				</div>
			</div>
		</Card> 
	)
}

export default CostingOverviewCard;