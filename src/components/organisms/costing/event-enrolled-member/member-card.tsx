import Card from "@/components/atoms/card"
import Divider from "@/components/atoms/divider"
import MemberLabel from "./member-label"
import MoneyText from "@/components/atoms/text/money"
import ProgressLabel from "@/components/atoms/progress-label"
import Badge from "@/components/atoms/badge"
import { MoreIcon } from "@/components/atoms/Icons"

export default function MemberCard({
	thumbnail,
	title,
	date,
	claimed
}: {
	thumbnail: string,
	title: string,
	date: string,
	claimed: string
}) {
	return (
		<Card
			isDividerVisible={false}
			isUsePaddingBottom={false}
			paddingTop="5px"
		>
			<div className="bg-base-bg5 border-t border-base-bg3 rounded-t-xl px-5 h-[84px] flex items-center justify-between">
				<div className="flex items-center">
					<div className="flex items-center gap-4">
						<div>
							{ thumbnail }
						</div>
						<div className="w-[120px] xl:w-[160px] font-light text-sm leading-5 text-gray-10">
							{ title }
						</div>
					</div>

					<Divider
						direction="vertical"
						height={24}
					/>

					<MemberLabel
						title="Tanggal"
						content={date}
						className="ml-7 xl:ml-[48px] w-[185px] xl:w-[218px]"
					/>

					<MemberLabel
						title="Claimed"
						content={<MoneyText fontSize="14px">{ claimed }</MoneyText>}
						className="w-[160px] xl:w-[189px]"
					/>

					<ProgressLabel
						value={"100.000"}
						max={"6.000.000"}
					/>

					<Badge
						title="Active"
						variant="primary"
						isTileVisible={true}
						className="ml-[48px]"
					/>
				</div>

				<button className="w-[32px] h-[32px] flex items-center justify-center bg-[transparent]">
					<MoreIcon />
				</button>
			</div>
		</Card> 
	)
}