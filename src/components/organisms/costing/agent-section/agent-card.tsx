import MoneyText from "@/components/atoms/text/money"
import "./agent-card.style.css"
import { IconChevronRight } from "@/components/atoms/Icons"
import Divider from "@/components/atoms/divider"

export default function AgentCard({
	title,
	subtitle,
	icon,
	activeEvent,
	revenue
}: {
	title: string,
	subtitle: string,
	icon: any,
	activeEvent: number|string,
	revenue: string
}) {
	return (
		<div className="agent-card bg-primary-gradient4 border border-gray-1 pt-[2px] px-[2px] rounded-[18px]">
			<div className="bg-base-bg5 h-[80px] rounded-[16px] overflow-hidden border border-base-bg3">
				<div className="text-warning text-xs bg-bg-rank w-[50px] h-[20px] pl-[10px] pt-[2px] rounded-br-[6px]">
					{ subtitle }
				</div>

				<div className="px-5 flex justify-between items-center">
					<div className="flex items-center gap-4">
						<div>{ icon }</div>
						<div className="font-light text-sm text-gray-10 leading-5">
							{ title }
						</div>
					</div>

					<IconChevronRight />
				</div>
			</div>

			<div className="flex h-[92px] flex items-center justify-center">
				<div className="flex flex-col items-center w-[199.5px] py-6">
					<div className="font-extralight text-sm leading-5 text-gray-6">
						Active Events
					</div>

					<div className="text-gray-10 font-light leading-5 mt-1 text-sm">
						{ activeEvent } Active Events
					</div>
				</div>

				<Divider height="48px" direction="vertical" />

				<div className="flex flex-col items-center w-[199.5px] py-6">
					<div className="font-extralight text-sm leading-5 text-gray-6">
						Revenue Generated
					</div>

					<MoneyText
						className="mt-[2px]"
						fontSize="14px"
						letterSpacing="0.2px"
					>
						{ revenue }
					</MoneyText>
				</div>
			</div>
		</div>
	)
}