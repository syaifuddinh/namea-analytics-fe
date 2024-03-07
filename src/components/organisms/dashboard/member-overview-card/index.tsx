"use client"

import React from "react";

import Card from "@/components/atoms/card";
import MoneyText from "@/components/atoms/text/money";
import TitleText from "@/components/atoms/text/title";
import SubtitleText from "@/components/atoms/text/subtitle";
// import Icon from "@/components/atoms/icon";
import CardMemberOverview from "@/components/atoms/card/member-overview";

const Header = () => {
	return (
		<div className="@apply card_header p-[20px]">
			<div className="text-base font-light text-[var(--Gray10)] leading-6 tracking-[0.08px]">
				Member Overview
			</div>
			<div
				className="mt-1 text-sm font-extralight tracking-[0.02px] text-[var(--Gray6)] leading-5"
			>
				Record your ideas and to-do’s easily, so you never miss a thing.
			</div>
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
		value: <MoneyText>500.950.450</MoneyText>,
		comparison: "-16.5%",
		compareLastYear: -8
	},
	{
		key: 4,
		title: "New Deposit",
		value: <MoneyText>37.695.800</MoneyText>,
		comparison: "23.8%",
		compareLastYear: 24
	},
	{
		key: 5,
		title: "Total Withdraw",
		value: <MoneyText>492.201.500</MoneyText>,
		comparison: "-16.5%",
		compareLastYear: -8
	}
]

const MemberOverviewCard: React.FC = () => {
	return (
		<Card
			headerElement={<Header />}
		>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5 bg-[var(--base-bg5)]">
				{listMemberOverview.map((values) => <CardMemberOverview {...values} key={values.key} />)}
			</div>
		</Card> 
	)
}

export default MemberOverviewCard;