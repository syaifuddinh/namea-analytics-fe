"use client"

import Card from "@/components/atoms/card";
import TitleText from "@/components/atoms/text/title";
import SubtitleText from "@/components/atoms/text/subtitle";
import Panel from "@/components/molecules/panel";
import "./index.style.css";
import Review from "./review"

const Header = () => {
	return (
		<div className="card_header p-[20px]">
			<div className="font-base text-[var(--Gray10)] leading-6">
				Costing Overview
			</div>
			<SubtitleText
				className="mt-[4px]"
			>
				Record your ideas and to-do’s easily, so you never miss a thing.
			</SubtitleText>
		</div>
	)
}

const CostingOverviewCard = () => {
	return (
		<Card
			headerElement={<Header />}
			isDividerVisible={false}
		>
			<div className="p-[20px] bg-[#03020C0D] flex gap-[8px]">
				<div className="w-1/2">
					<Panel
						label="Operation Cost"
						value="50"
						variant="success"
					/>
				</div>
				<div className="w-1/4">
					<Panel
						label="Promotion Cost"
						value="25"
						variant="primary"
					/>
				</div>
				<div className="w-1/4">
					<Panel
						label="Other Cost"
						value="25"
						variant="danger"
					/>
				</div>
			</div>

			<div className="costing-overview-card_footer p-[20px] grid grid-rows-3 md:grid-rows-1 grid-flow-col gap-[16px] bg-[var(--base-bg5)]">
				<Review
					title="Operation Cost"
					description="To run company operations."
					iconSrc="transparent/cpu.svg"
				/>			

				<Review
					title="Promotion Cost"
					description="Marketing or promotional activity."
					iconSrc="transparent/megaphone.svg"
				/>			
				
				<Review
					title="Other Cost"
					description="Include various types of costs."
					iconSrc="transparent/more.svg"
				/>			
			</div>
		</Card> 
	)
}

export default CostingOverviewCard;