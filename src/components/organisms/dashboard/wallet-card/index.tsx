"use client"

import Card from "@/components/atoms/card";
import MoneyText from "@/components/atoms/text/money";
import TitleText from "@/components/atoms/text/title";
import SubtitleText from "@/components/atoms/text/subtitle";
import Icon from "@/components/atoms/icon";

const Header = ({ title }) => {
	return (
		<div className="card_header flex items-center justify-between">
			<TitleText>
				{ title }
			</TitleText>
		</div>
	)
}

const CostingOverviewCard = ({ title }) => {
	return (
		<Card
			headerElement={<Header title={title} />}
		>
			Wallet
		</Card> 
	)
}

export default CostingOverviewCard;