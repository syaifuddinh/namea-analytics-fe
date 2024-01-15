"use client"

import Icon from "@/components/atoms/icon";
import SecondaryCard from "@/components/atoms/card/secondary";
import MoneyText from "@/components/atoms/text/money";
import TitleText from "@/components/atoms/text/title";
import SubtitleText from "@/components/atoms/text/subtitle";
import MutationLabel from "@/components/atoms/mutation-label"

const Review = ({
	title,
	description,
	iconSrc
}) => {
	return (
		<SecondaryCard>
			<div className="p-5">
				<Icon
					src={iconSrc}
					alt="review icon"
				/>

				<div className="costing-overview_label mt-2 text-sm mb-1 text-gray-theme">
					Total Cost
				</div>

				<MoneyText>
					500.000.000
				</MoneyText>

				<div className="flex gap-2 mt-3 items-center">
					<MutationLabel
						value={"50%"}
						variant="warning"
					/>

					<div className="costing-overview-card_hint text-gray-theme text-xs">
						of total allocation
					</div>
				</div>
			</div>

			<div className="costing-overview-card_review flex flex-col items-center gap-1 p-4 m-1">
				<TitleText>
					{ title }
				</TitleText>			

				<SubtitleText>
					{ description }
				</SubtitleText>
			</div>
		</SecondaryCard>
	)
}

export default Review;