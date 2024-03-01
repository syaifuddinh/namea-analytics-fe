import Card from "@/components/atoms/card"
import MoneyText from "@/components/atoms/text/money"
import Divider from "@/components/atoms/divider"
import { GlobalIcon } from "@/components/atoms/Icons"
import {
  CostingDottedLeftArrowIcon,
  CostingDottedRightArrowIcon
} from "@/components/atoms/Icons";

export default function ExpenseCard({ title, balance }) {
	return (
		<Card
			isDividerVisible={false}
			isUsePaddingBottom={false}
		>
			<div className="h-[142px] flex flex-col justify-between bg-base-bg5 pt-5 border-t border-base-bg3 rounded-t-[12px]">
				<div className="px-5">
					<div className="flex gap-2 items-center w-[104px] h-[28px] bg-base-bg4 justify-center border border-gray-1 rounded-[6px]">
						<GlobalIcon />
						<Divider direction="vertical" height="12px" />
						<div className="expense-card_title font-extralight text-xs text-gray-10">
							{ title }
						</div>
					</div>

					<MoneyText
						className="mt-[10px]"
						variant="danger"
						positivity="minus"
					>
						{ balance }
					</MoneyText>
				</div>

				<a href="#" className="w-full h-[40px] gap-3 bg-base-bg3 flex justify-center items-center">
					<CostingDottedLeftArrowIcon height={18.53} width={59.38}/>
					<div className="text-gray-6 font-extralight text-sm">
						More Detail
					</div>
					<CostingDottedRightArrowIcon height={18.53} width={59.38}/>
				</a>
			</div>
		</Card>
	)
}