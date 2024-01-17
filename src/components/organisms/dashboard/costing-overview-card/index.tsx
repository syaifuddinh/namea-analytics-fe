"use client"

import Card from "@/components/atoms/card";
import TitleText from "@/components/atoms/text/title";
import SubtitleText from "@/components/atoms/text/subtitle";
import Panel from "@/components/molecules/panel";
import "./index.style.css";
import Review from "./review"

const Header = () => {
	return (
		<div className="card_header">
			<TitleText>
				Costing Overview
			</TitleText>
			<SubtitleText>
				Record your ideas and to-do’s easily, so you never miss a thing.
			</SubtitleText>
		</div>
	)
}

const CostingOverviewCard = () => {
	return (
		<Card
			headerElement={<Header />}
		>
			<div className="p-2 grid grid-rows-3 md:grid-rows-1 grid-flow-col gap-3">
				<Panel
					label="Operation Cost"
					value="50"
					variant="success"
				/>
				<Panel
					label="Promotion Cost"
					value="25"
					variant="primary"
				/>
				<Panel
					label="Total Cost"
					value="25"
					variant="danger"
				/>
			</div>

			<div className="costing-overview-card_footer p-3 grid grid-rows-3 md:grid-rows-1 grid-flow-col gap-3">
				<Review
					title="Operation Cost"
					description="To run company operations."
					iconSrc="transparent/cpu.svg"
				/>			

				<Review
					title="Promotion Cost"
					description="Marketing or promotion activity."
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