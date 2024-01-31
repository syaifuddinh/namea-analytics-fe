"use client"

import Card from "@/components/atoms/card";
import CurrencyText from "@/components/atoms/text/currency";
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
import FrequencyInput from "@/components/molecules/input/frequency"
import CustomChart from "@/components/atoms/custom-chart"

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
		<div className="card_header p-[20px] flex items-center justify-between max-h-[76px]">
			<div className="text-[var(--Gray10)] text-base font-light leading-6">
				{ title }
			</div>
			
			<FrequencyInput />
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
			isUsePaddingBottom={false}
			className="bg-base-bg2"
		>
			<div className="bg-[var(--base-bg5)]">	
				{ variant === "turnover" && (
					<CustomChart
						labels={["Dec Week 1", "Dec Week 2", "Dec Week 3", "Dec Week 4"]}	
						maxValue={500000}
						values={[
							[
								450000,
								300000,
								400000,
								500000
							],
							[
								300000,
								350000,
								250000,
								350000
							]
						]}
						variant="bar"
						xClassname="pl-[32px]"
					/>
				) }

				{ variant === "revenue" && (
					<CustomChart
						values={["500K", "400K", "300K", "200K", "100K", "0"]}
						labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"]}	
						maxValue={500000}
						xClassname="pl-2.5 pr-5"
						
					/>
				) }
			</div>

			<div className="p-[20px] grid grid-rows-2 md:grid-rows-1 grid-flow-col gap-4 border-t-1 border-base-bg3">	
				<CurrencyCard
					currencyName="Ethereum"
					mutationVariant="primary"
					balance="339.450.965"
					mutationValue="23.8% (+24)"
				/>	
	
				<CurrencyCard
					currencyName="Bitcoin"
					mutationVariant="danger"
					balance="245.300.685"
					mutationValue="-16.5% (-8)"
				/>	
	
			</div>

			<div className="border-t-1 border-base-bg3 flex justify-between items-center pl-2.5 pr-[1.25rem] py-2 bg-[var(--Gray7)]">
				<SecondaryCard
					className="bg-base-bg4 font-extralight py-[4px] pl-2 pr-3 text-sm text-gray6 flex items-center gap-2.5"
				>	
						<Icon
							src="transparent/blend.svg"
							alt="blend"
						/>

						<div className="w-[1px] h-[15px] bg-[var(--Gray8)]"></div>

						Total { title }
				</SecondaryCard>		

				<div className="flex gap-3">
					<CurrencyText>	
						339.450.965
					</CurrencyText>

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