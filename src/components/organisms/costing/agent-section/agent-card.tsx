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
		<div className="agent-card bg-primary-gradient4 border border-gray-1 p-1 rounded-[16px]">
			<div className="bg-base-bg5 h-[80px] rounded-[12px] overflow-hidden border border-base-bg3">
				<div className="text-warning text-xs bg-bg-rank w-[50px] h-[20px] pl-[10px] pt-[2px] rounded-br-[6px]">
					{ subtitle }
				</div>

				<div className="px-5 flex justify-between items-center">
					<div className="flex items-center">
						<div>{ icon }</div>
						<div className="ml-[6px] font-light text-sm text-gray-10 leading-5">
							{ title }
						</div>
					</div>

					<IconChevronRight />
				</div>
			</div>

			<div className="flex h-[92px] flex *:grow items-center justify-between">
				<div className="flex flex-col items-center">
					<div className="font-extralight text-sm leading-5 text-gray-6">
						Active Events
					</div>

					<div className="text-gray-10 font-light leading-5 mt-1">
						{ activeEvent } Active Events
					</div>
				</div>

				<Divider height="48px" direction="vertical" />

				<div className="flex flex-col items-center">
					<div className="font-extralight text-sm leading-5 text-gray-6">
						Revenue Generated
					</div>

					<MoneyText
						className="mt-1"
						fontSize="14px"
					>
						{ revenue }
					</MoneyText>
				</div>
			</div>
		</div>
	)
}