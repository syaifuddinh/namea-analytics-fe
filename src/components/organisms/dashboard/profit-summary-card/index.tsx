"use client"

import Card from "@/components/atoms/card";
import Chart from "@/components/atoms/chart";
import MoneyText from "@/components/atoms/text/money";
import TitleText from "@/components/atoms/text/title";
import SubtitleText from "@/components/atoms/text/subtitle";
import Icon from "@/components/atoms/icon";
import CustomChart from "@/components/atoms/custom-chart"

const Header = () => {
	return (
		<div className="card_header p-[20px] max-h-[90px]">
			<div className="mb-1 flex items-center gap-[8px]">
				<Icon
					src="dollar.svg"
					alt="dollar icon"
				/>
				<div className="text-sm text-[var(--Gray6)] font-extralight leading-5">
					Year to Date Profit/Lost
				</div>
			</div>

			<div
				className="mt-[6px] font-light tracking-[0.14px] text-base text-[var(--Gray10)]"
			>
				<span>	
					Rp492.509.249
				</span>
				<span className="text-[var(--Gray6)]">,00</span>
			</div>
		</div>
	)
}

const labels = ["2020", "2021", "2022", "2023"]

const ProfitSummaryCard = () => {
	return (
		<Card
			headerElement={<Header />}
		>
			<div class="costing-overview-card_content bg-[var(--Gray7)]">
				<CustomChart
					labels={labels}
					values={[
						[
							45300000,
							78500000,
							55900000,
							25300000
						]
					]}
					isShowYAxes={false}
					variant="bar"
					maxValue={100000000}
					contentHeight={266}
					chartPaddingTop="1.125rem"
					xClassname="px-[1.575rem]"
				/>
			</div>

			<div className="px-5 pt-[1.375rem] pb-[1.25rem] flex flex-col items-center border-t border-[var(--base-bg3)]">
				<div className="text-sm text-[var(--Gray10)] font-light tracking-[0.06px] leading-5">
					Total Profit
				</div>

				<div className="text-center text-[var(--Gray6)] text-sm leading-5 mt-[4px] font-extralight tracking-[0.06px]">
					Has been generated from the previous year.
				</div>
			</div>
		</Card> 
	)
}

export default ProfitSummaryCard;