import Card from "@/components/atoms/card";
import MoneyText from "@/components/atoms/text/money";
import Divider from "@/components/atoms/divider"

export default function Withdraw({ 
	title, 
	description, 
	balance, 
	icon 
}) {
	return (
		<div className="border-t border-gray-1 pt-1.5 rounded-t-[16px] bg-base-bg2">
			<Card
				isDividerVisible={false}
				topRadius="12px"
				bottomRadius="16px"
				className="max-h-[84px]"
			>
				<div className="flex flex-col sm:flex-row justify-between gap-2 sm:items-center py-[0.875rem] px-5">
					<div className="flex items-center gap-4">
						<div className="withdraw_icon">
							{ icon }
						</div>

						<div className="">
							<div className="withdraw_title font-light text-sm leading-5 text-gray-10">
								{ title }
							</div>
							<div className="withdraw_description text-sm font-extralight leading-5 text-gray-6 mt-1">
								{ description }
							</div>
						</div>
					</div>


					<div className="withdraw_balance flex items-center">
						<Divider direction="vertical" />
						<div className="ml-[57px] w-[164px]">
							<div className="font-extralight text-sm leading-5 text-gray-6">
								Amount Spent
							</div>

							<MoneyText
								fontSize="0.875rem"
								fontWeight={400}
								className="mt-[3px]"
							>
								{ balance }
							</MoneyText>
						</div>
					</div>
				</div>
			</Card>
		</div>
	)
}