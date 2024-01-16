"use client"

import Card from "@/components/atoms/card";
import MoneyText from "@/components/atoms/text/money";
import TitleText from "@/components/atoms/text/title";
import SubtitleText from "@/components/atoms/text/subtitle";
import TinyText from "@/components/atoms/text/tiny";
import Icon from "@/components/atoms/icon";
import Pile from "@/components/atoms/pile";
import Chart from "@/components/atoms/chart";
import MutationLabel from "@/components/atoms/mutation-label";
import SecondaryCard from "@/components/atoms/card/secondary";
import { simplifyNumber } from "@/utils/number";
import CurrencyCard from "./currency-card"

const labels = ["Dec Week 1", "Dec Week 2", "Dec Week 3", "Dec Week 4"]
const datasets = [
	{
		backgroundColor: "rgba(7, 183, 172, 1)",
		borderRadius: 8,
		data: [200000, 50000, 400000, 150000]
	},
	{
		backgroundColor: "rgba(7, 183, 172, 0.5)",
		borderRadius: 8,
		data: [50000, 30000, 120000, 110000]
	}
]

const revenueLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"]
const revenueDatasets = [
	{
		backgroundColor: "rgba(7, 183, 172, 1)",
		borderRadius: 8,
		data: [200000, 50000, 400000, 150000, 300000, 200000, 250000, 450000]

	},
	{
		backgroundColor: "rgba(7, 183, 172, 0.5)",
		borderRadius: 8,
		data: [50000, 30000, 120000, 110000, 120000, 350000, 240000, 460000]
	}
]
const Header = ({ title }) => {
	return (
		<div className="card_header flex items-center justify-between">
			<TitleText>
				{ title }
			</TitleText>
		</div>	
	)
}

const WalletCard = ({ 
	title,
	variant = "turnover"
}) => {
	return (
		<Card
			headerElement={<Header title={title} />}
			paddingBottom={0}
		>
			<div className="p-4">	
				{ variant === "turnover" && (
					<Chart
						labels={labels}
						datasets={datasets}
						variant="bar"
						yTicksCallback={oldValue => simplifyNumber(oldValue) }
					/>
				) }

				{ variant === "revenue" && (
					<Chart
						labels={revenueLabels}
						datasets={revenueDatasets}
						variant="bar"
						yTicksCallback={oldValue => simplifyNumber(oldValue) }
						yStacked={true}
						xStacked={true}
					/>
				) }
			</div>

			<div className="p-4 grid grid-rows-2 md:grid-rows-1 grid-flow-col gap-4 border-t-1 border-base-bg3">	
				<CurrencyCard
					currencyName="Ethereum"
					mutationVariant="primary"
				/>	
	
				<CurrencyCard
					currencyName="Bitcoin"
					mutationVariant="danger"
				/>	
	
			</div>

			<div className="border-t-1 border-base-bg3 flex justify-between items-center px-4 py-3">
				<SecondaryCard className="p-2 text-sm text-gray6 flex items-center gap-2">	
					<div className="pr-2 border-r-2 border-base-bg3">	
						<Icon
							src="transparent/blend.svg"
							alt="blend"
						/>
					</div>
					Total { title }
				</SecondaryCard>		

				<div className="flex gap-3">
					<MoneyText>	
						339.450.965
					</MoneyText>

					<MutationLabel
						value="23.8% (+24)"
						variant="primary"
					/>		
				</div>
			</div>
		</Card> 
	)
}

export default WalletCard;