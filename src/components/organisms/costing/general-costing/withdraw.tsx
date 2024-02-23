import Card from "@/components/atoms/card";
import MoneyText from "@/components/atoms/text/money";

export default function Withdraw({ 
	title, 
	description, 
	balance, 
	icon 
}) {
	return (
		<div className="border-t border-gray-1 pt-1 rounded-t-[16px]">
			<Card
				isDividerVisible={false}
				topRadius="12px"
				bottomRadius="16px"
			>
				<div className="flex flex-col sm:flex-row justify-between gap-2 sm:items-center py-[0.875rem] px-5">
					<div className="flex items-center gap-3">
						<div className="withdraw_icon">
							{ icon }
						</div>

						<div className="">
							<div className="withdraw_title font-light text-sm leading-5 text-gray-10">
								{ title }
							</div>
							<div className="withdraw_description text-sm font-extralight leading-5 text-gray-6">
								{ description }
							</div>
						</div>

					</div>

					<div className="withdraw_balance">
						<div className="font-extralight text-sm leading-5 text-gray-6">
							Amount Spent
						</div>

						<MoneyText
							fontSize="0.875rem"
							fontWeight={400}
							className="mt-1"
						>
							{ balance }
						</MoneyText>
					</div>
				</div>
			</Card>
		</div>
	)
}