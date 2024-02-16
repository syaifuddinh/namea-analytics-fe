import Item from "./item"
import Pile from "@/components/atoms/pile"

const ProfitTooltip = ({ title, price }) => {
	return (
		<div className="profit-tooltip bg-[#092B2D] inline-block border rounded-[6px] border-[var(--Gray1)]">
			<div className="profit-tooltip_title text-sm font-extralight leading-4 text-[var(--Gray6)] py-2 px-2.5 text-sm rounded-[1.5px] border-b border-[var(--Gray1)]">
				{ title }
			</div>

			<div className="py-2 px-2.5">
				<div className="profit-tooltip_price font-light text-sm leading-4 text-[var(--Gray10)]">
					Rp{ price },00
				</div>

				<div className="profit-tooltip_description mt-1 flex items-center gap-2">
					<Pile variant="primary" />
					<div className="profit-tooltip_profit text-sm text-[var(--Gray6)] font-extralight">
						Monthly Profit
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProfitTooltip;