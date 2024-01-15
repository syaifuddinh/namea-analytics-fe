"use client"

import Card from "@/components/atoms/card";
import MoneyText from "@/components/atoms/text/money";
import TitleText from "@/components/atoms/text/title";
import SubtitleText from "@/components/atoms/text/subtitle";
import Icon from "@/components/atoms/icon";

const Header = ({ title }) => {
	return (
		<div className="card_header">
			<TitleText>
				Cashflow Overview
			</TitleText>
			<SubtitleText>
				Record your ideas and to-do’s easily, so you never miss a thing.
			</SubtitleText>
		</div>
	)
}

const MemberOverviewCard = () => {
	return (
		<Card
			headerElement={<Header />}
		>
			Member Overview
		</Card> 
	)
}

export default MemberOverviewCard;