import Card from "@/components/atoms/card";
import MoneyText from "@/components/atoms/text/money";

export default function Debt({ title, subcategory, balance, icon }) {
	return (
		<div className="border-t border-gray-1 pt-1 rounded-t-[16px]">
			<Card
				isDividerVisible={false}
				topRadius="12px"
				bottomRadius="16px"
			>
				<div className="flex items-center py-[1.125rem] px-5">
					<div className="flex items-center gap-2 w-[218px]">
						<div className="debt_icon">
							{ icon }
						</div>

						<div className="w-[120px]">
							<div className="debt_title font-light text-sm leading-5 text-gray-10">
								{ title }
							</div>
						</div>

					</div>

					<div className="debt_subcategory w-[193px]">
						<div className="font-extralight text-sm leading-5 text-gray-6">
							Sub Category
						</div>
						<div className="font-light text-sm leading-5 text-gray-10">
							{ subcategory }
						</div>
					</div>

					<div className="debt_description flex items-center gap-[1.5rem]">
						<div className="debt_balance w-[]">
							<div className="font-extralight text-sm leading-5 text-gray-6">
								Outstanding Debt
							</div>

							<MoneyText
								variant="danger"
								positivity="minus"
								fontSize="0.875rem"
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