import Card from "@/components/atoms/card"
import Divider from "@/components/atoms/divider"
import Badge from "@/components/atoms/badge"
import { MoreIcon, IconChevronDown } from "@/components/atoms/Icons"
import EventLabel from "./event-label"
import MoneyText from "@/components/atoms/text/money"
import Tag from "@/components/atoms/tag"
import Button from "@/components/atoms/button"
import { useState } from "react"

const providers = [
	{ "title": "Layer1/Layer2" },
	{ "title": "Metaverse" },
	{ "title": "Mem" },
	{ "title": "Liquid" },
	{ "title": "+3" }
]

const markets = [
	{ "title": "BTC" },
	{ "title": "ETH" },
	{ "title": "USDT" },
	{ "title": "BNB" },
	{ "title": "+3" }
]

export default function EventCard({
	title,
	description,
	thumbnail,
	period,
	revenue,
	className = "",
	isContentVisibleInitially = false,
	isControlVisible = true
}: {
	title: string,
	description: string,
	thumbnail: string,
	period: string,
	revenue: string,
	className?: string,
	isContentVisibleInitially?: boolean,
	isControlVisible?: boolean
}) {
	const [isContentVisible, setIsContentVisible] = useState(isContentVisibleInitially)

	const onClickControl = () => {
		setIsContentVisible(!isContentVisible)
	}

	return (
		<Card
			paddingTop="6px"
			isUsePaddingBottom={false}
			isDividerVisible={false}
			className={className}
		>
			<div className="p-5 flex items-center justify-between rounded-t-[12px] bg-base-bg5 border-t border-base-bg3">
				<div className="flex flex-col gap-3 lg:gap-0 lg:flex-row lg:items-center">
					<div className="flex items-center gap-4">
						<img src={thumbnail} alt="thumbnail" className="h-[64px] w-auto" />
						<div className="w-[185px]">
							<div className="font-light leading-5 text-sm text-gray-10">{ title }</div>
							<div className="mt-1 font-extralight leading-5 text-sm text-gray-6">{ description }</div>
						</div>
					</div>

					<Divider direction="vertical" height="44px" className="hidden lg:block ml-[40px] xl:ml-[80px]" />

					<div className="lg:ml-[64px] w-[249px]">
						<div className="text-sm leading-5 text-gray-6">
							Promotion Period
						</div>
						<div className="mt-1 text-gray-10 text-sm">
							{ period }
						</div>
					</div>

					<div className="lg:ml-[64px] w-[249px]">
						<div className="text-sm leading-5 text-gray-6">
							Revenue Generated
						</div>
						<MoneyText prefix="+" className="mt-1" fontSize="14px">
							{ revenue }
						</MoneyText>
					</div>

					<Badge title="Active" isTileVisible={true} />
				</div>

				{ isControlVisible === true && (
					<div className="flex items-center gap-2.5">
						<button className="w-[32px] h-[32px] flex items-center justify-center bg-[transparent]">
							<MoreIcon />
						</button>

						<button
							className={`${isContentVisible === true ? "rotate-180" : ""} w-[32px] h-[32px] rounded-[6px] bg-base-bg3 border border-gray-1 flex justify-center items-center`}
							onClick={onClickControl}
						>
							<IconChevronDown />
						</button>
					</div>
				) }
			</div>

			{ isContentVisible === true && (
				<>
					<div className="xl:h-[148px] gap-y-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-5 border-y border-base-bg3">
						<EventLabel
							title="Created By"
							value="Agent Name"
						/>	
						<EventLabel
							title="Promotion Type"
							value="Agent Name"
						/>	
						<EventLabel
							title="Include?"
							value="YES"
						/>	
						<EventLabel
							title="Bonus Amount"
							value="100%"
						/>	
						<EventLabel
							title="Turnover Multipliers"
							value="7"
						/>	
						<EventLabel
							title="Min. deposit"
							value={<MoneyText fontSize="14px" suffixVariant="plain">56.235.459</MoneyText>}
						/>	
						<EventLabel
							title="Max. deposit"
							value={<MoneyText fontSize="14px" suffixVariant="plain">500.950.450</MoneyText>}
						/>	
						<EventLabel
							title="Min. bonus"
							value={<MoneyText fontSize="14px" suffixVariant="plain">8.000.000</MoneyText>}
						/>	
						<EventLabel
							title="Max. bonus"
							value={<MoneyText fontSize="14px" suffixVariant="plain">24.600.590</MoneyText>}
						/>	
					</div>

					<div className="lg:h-[92px] flex-col gap-3 lg:gap-0 lg:flex-row lg:items-center flex p-5 bg-base-bg5">
						<div>
							<div className="font-extralight text-sm leading-5 text-gray-6">
								Provider
							</div>

							<div className="flex gap-2 mt-3">
								{ providers.map(item => (
									<Tag key={item.title} title={item.title} />
								)) }
							</div>
						</div>	

						<div className="lg:ml-[48px]">
							<div className="font-extralight text-sm leading-5 text-gray-6">
								Markets
							</div>

							<div className="flex gap-2 mt-3">
								{ markets.map(item => (
									<Tag key={item.title} title={item.title} />
								)) }
							</div>
						</div>	

						<Button
							variant="link"
							className="lg:ml-[92px]"
							width="121px"
							url="/costing/promotional/event/1"
						>
							More Detail
						</Button>
					</div>
				</>
			) }

		</Card>
	)
}