import Card from "@/components/atoms/card";
import MoneyText from "@/components/atoms/text/money";

export default function Debt({ title, subcategory, balance, icon }) {
	return (
		<Card
			isDividerVisible={false}
		>
			<div className="flex items-center py-4 px-5 gap-5">
				<div className="flex items-center gap-2">
					<div className="debt_icon">
						{ icon }
					</div>

					<div className="w-[120px]">
						<div className="debt_title font-light text-sm leading-5 text-gray-10">
							{ title }
						</div>
					</div>

					<div className="debt_subcategory w-[160px]">
						<div className="font-extralight text-sm leading-5 text-gray-6">
							Sub Category
						</div>
						<div className="font-light text-sm leading-5 text-gray-10">
							{ subcategory }
						</div>
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
						>
							{ balance }
						</MoneyText>
					</div>
				</div>
			</div>
		</Card>
	)
}