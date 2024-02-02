const CurrencyText = ({ 
	children,
	className = "",
	letterSpacing="0.15px"
}) => {
	return (
		<div
			className={`currency-text font-light text-base flex ${className} leading-6`}
			style={{ letterSpacing }}
		>	
			<div className="text-[var(--Gray10)]">
				Rp{ children }
			</div>
			<div className="text-[var(--Gray6)]">
				,00
			</div>
		</div>	
	)
}

export default CurrencyText;