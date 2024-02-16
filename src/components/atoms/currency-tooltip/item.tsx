const CurrencyTooltipItem = ({ title, price, variant="primary", index = 0 }) => {
	return (
		<div className={`py-2 px-3 h-[2rem] flex items-center justify-between ${index > 0 ? "border-t-1 border-[var(--Gray1)]" : ""}`}>
			<div className="flex gap-2 items-center">
				<div className={`currency-tooltip_pile border-[3px] border-[var(--Success2)] rounded-[5rem]`}>
					<div className={`currency-tooltip_pile-item min-w-[0.5rem] min-h-[0.5rem] rounded-[5rem] ${variant === "primary" ? "bg-[var(--Success10)]" : "bg-[#1a7c73]"}`}>
					</div>
				</div>

				<div className="currency-tooltip_title font-extralight text-sm text-[var(--Gray6)]">
					{ title }
				</div>
			</div>
			<div className={`currency-tooltip_price font-light text-sm text-[var(--Gray10)] flex`}>
				<div>Rp</div>
				<div>
					{ price }
				</div>
			</div>
		</div>
	)
}

export default CurrencyTooltipItem;