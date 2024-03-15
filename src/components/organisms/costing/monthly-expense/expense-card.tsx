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
			paddingTop="4px"
		>
			<a
				href="/costing/promotional/1" 
				className="h-[142px] flex flex-col justify-between bg-base-bg5 pt-[18.5px] border-t border-base-bg3 rounded-t-[12px]">
				<div className="pl-[19px] pr-5">
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
						fontWeight={400}
					>
						{ balance }
					</MoneyText>
				</div>

				<div className="w-full h-[40px] gap-3 bg-base-bg3 flex justify-center items-center">
					<CostingDottedLeftArrowIcon className="w-[59px] h-[19px]" />
					<div className="text-gray-6 font-extralight text-sm">
						More Detail
					</div>
					<CostingDottedRightArrowIcon />
				</div>
			</a>
		</Card>
	)
}