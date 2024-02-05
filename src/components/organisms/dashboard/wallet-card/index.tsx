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
		<div className="card_header pt-5 relative flex items-center justify-between max-h-[76px] min-h-[76px]">
			<div className="text-[var(--Gray10)] text-base font-light leading-6 absolute left-[1.25rem] top-[1.7rem]">
				{ title }
			</div>
			
			<div className="absolute right-[1.15rem] top-[1.3rem]">
				<FrequencyInput />
			</div>
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
						xClassname="pl-[32px] pr-5"
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

			<div className="p-[20px] flex gap-[1rem] border-t-1 border-base-bg3">	
				<CurrencyCard
					currencyName="Ethereum"
					mutationVariant="primary"
					balance="339.450.965"
					mutationValue="23.8% (+24)"
					contentPaddingLeft="1.18rem"
					style={{width: "45.8%"}}
				/>	
	
				<CurrencyCard
					currencyName="Bitcoin"
					mutationVariant="danger"
					balance="245.300.685"
					mutationValue="-16.5% (-8)"
					contentPaddingLeft="1.18rem"
					mutationStyle={{minWidth: "88px"}}
				/>	
	
			</div>

			<div className="border-t-1 border-base-bg3 flex justify-between items-center pl-2.5 pr-[1.125rem] py-2 bg-[var(--Gray7)] min-h-[3.00049rem]">
				<SecondaryCard
					className="bg-base-bg4 font-extralight py-[4px] pl-[0.438rem] pr-3 text-sm text-gray6 flex items-center gap-2.5"
				>	
						<Icon
							src="transparent/blend.svg"
							alt="blend"
						/>

						<div className="w-[1px] h-[15px] bg-[var(--Gray8)]"></div>
						<span>
							Total { title }
						</span>
				</SecondaryCard>		

				<div className="flex items-center gap-3">
					<CurrencyText
						letterSpacing="0.2px"
					>	
						339.450.965
					</CurrencyText>

					<MutationLabel
						value="23.8% (+24)"
						variant="primary"
						radius="0.625rem"
					/>		
				</div>
			</div>
		</Card> 
	)
}

export default WalletCard;