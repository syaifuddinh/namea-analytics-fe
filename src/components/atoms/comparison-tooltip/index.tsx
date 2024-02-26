import Item from "./item"
import Pile from "@/components/atoms/pile"
import MoneyText from "@/components/atoms/text/money"

const ComparisonTooltip = ({ options, total }) => {
	return (
		<div className="comparison-tooltip min-w-[218px] bg-tooltip-background inline-block border rounded-[6px] border-[var(--Gray1)]">
			{ options.map((item, index) => (
				<div
					key={index} 
					className="comparison-tooltip_item flex items-center justify-between px-2"
				>
					<div className="text-xs text-gray-6 font-extralight">
						{ item.label }
					</div>	

					<MoneyText
						variant="warning"
						fontSize="12px"
					>
						{ item.value }
					</MoneyText> 
				</div>
			)) }
			<div className="comparison-tooltip_total flex justify-between items-center h-[2rem] px-2">
				<div className="text-xs font-extralight leading-4 text-gray-6">Total</div>	
				<MoneyText
					fontSize="12px"
					variant="warning"
				>
					{ total }
				</MoneyText>	
			</div>
		</div>
	)
}

export default ComparisonTooltip;