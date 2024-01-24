"use client"

import Icon from "@/components/atoms/icon";
import SecondaryCard from "@/components/atoms/card/secondary";
import MoneyText from "@/components/atoms/text/money";
import TitleText from "@/components/atoms/text/title";
import SubtitleText from "@/components/atoms/text/subtitle";
import MutationLabel from "@/components/atoms/mutation-label"
import PercentageLabel from "@/components/atoms/percentage-label"

const Review = ({
	title,
	description,
	iconSrc
}) => {
	return (
		<SecondaryCard
			className="bg-[var(--base-bg5)] flex flex-col justify-between"
		>
			<div className="px-[20px] pt-[20px] pb-[16px]">
				<Icon
					src={iconSrc}
					alt="review icon"
				/>

				<div className="costing-overview_label mt-[12px] text-sm mb-1 text-[var(--Gray6)] font-light">
					Total Cost
				</div>

				<MoneyText>
					500.000.000
				</MoneyText>

				<div className="flex gap-2 mt-3 items-center">
					<PercentageLabel
						value={"50%"}
						variant="warning"
					/>

					<div className="costing-overview-card_hint font-light text-gray-theme text-xs">
						of total allocation
					</div>
				</div>
			</div>

			<div className="costing-overview-card_review flex flex-col items-center gap-1 px-[26px] py-[19px] m-1">
				<div className="text-sm font-base text-white-theme-color leading-5">
					{ title }
				</div>			

				<div className="text-center text-[var(--Gray6)] font-light text-sm">
					{ description }
				</div>
			</div>
		</SecondaryCard>
	)
}

export default Review;