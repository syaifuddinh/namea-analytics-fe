"use client"
import React from "react";

import Card from "@/components/atoms/card";
// import MoneyText from "@/components/atoms/text/money";
import TitleText from "@/components/atoms/text/title";
import SubtitleText from "@/components/atoms/text/subtitle";
// import Icon from "@/components/atoms/icon";
import CardMemberOverview from "@/components/atoms/card/member-overview";

const Header = () => {
	return (
		<div className="card_header">
			<TitleText>
				Member Overview
			</TitleText>
			<SubtitleText>
				Record your ideas and to-do’s easily, so you never miss a thing.
			</SubtitleText>
		</div>
	)
}

const listMemberOverview = [
	{
		key: 0,
		title: "Total Member",
		value: "54,695",
		comparison: "23.8%",
		compareLastYear: 24
	},
	{
		key: 1,
		title: "New Member",
		value: "6,458",
		comparison: "-16.5%",
		compareLastYear: -8
	},
	{
		key: 2,
		title: "Active Member",
		value: "24,396",
		comparison: "23.8%",
		compareLastYear: 24
	},
	{
		key: 3,
		title: "Total Deposit",
		value: "500.950.450,00",
		comparison: "-16.5%",
		compareLastYear: -8
	},
	{
		key: 4,
		title: "New Deposit",
		value: "37.695.800,00",
		comparison: "23.8%",
		compareLastYear: 24
	},
	{
		key: 5,
		title: "Total Withdraw",
		value: "37.695.800,00",
		comparison: "-16.5%",
		compareLastYear: -8
	}
]

const MemberOverviewCard: React.FC = () => {
	return (
		<Card
			headerElement={<Header />}
		>
			<div className="grid grid-cols-[auto_auto_auto] gap-x-5 gap-y-5 p-5">
				{listMemberOverview.map((values) => <CardMemberOverview {...values} key={values.key} />)}
			</div>
		</Card> 
	)
}

export default MemberOverviewCard;