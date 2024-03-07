import Card from "@/components/atoms/card"
import Divider from "@/components/atoms/divider"
import MoneyText from "@/components/atoms/text/money"
import Badge from "@/components/atoms/badge"
import { MoreIcon, IconChevronDown } from "@/components/atoms/Icons"

export default function EventCard({
	title,
	description,
	thumbnail,
	period,
	revenue
}) {
	return (
		<Card
			paddingTop="6px"
			isUsePaddingBottom={false}
			isDividerVisible={false}
		>
			<div className="p-5 flex items-center justify-between rounded-t-[12px] bg-base-bg-5 border-t border-base-bg3">
				<div className="flex items-center">
					<div className="flex items-center gap-4">
						<img src={thumbnail} alt="thumbnail" className="h-[64px] w-auto" />
						<div className="w-[185px]">
							<div className="font-light leading-5 text-sm text-gray-10">{ title }</div>
							<div className="mt-1 font-extralight leading-5 text-sm text-gray-6">{ description }</div>
						</div>
					</div>

					<Divider direction="vertical" height="44px" className="ml-[80px]" />

					<div className="ml-[64px] w-[249px]">
						<div className="text-sm leading-5 text-gray-6">
							Promotion Period
						</div>
						<div className="mt-1 text-gray-10 text-sm">
							{ period }
						</div>
					</div>

					<div className="ml-[64px] w-[249px]">
						<div className="text-sm leading-5 text-gray-6">
							Revenue Generated
						</div>
						<MoneyText prefix="+" className="mt-1" fontSize="14px">
							{ revenue }
						</MoneyText>
					</div>

					<Badge title="Active" isTileVisible={true} />
				</div>

				<div className="flex items-center gap-2.5">
					<button className="w-[32px] h-[32px] flex items-center justify-center bg-[transparent]">
						<MoreIcon />
					</button>

					<button className="w-[32px] h-[32px] rounded-[6px] bg-base-bg3 border border-gray-1 flex justify-center items-center">
						<IconChevronDown />
					</button>
				</div>
			</div>
		</Card>
	)
}