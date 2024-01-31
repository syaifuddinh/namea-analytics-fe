const CurrencyText = ({ 
	children,
	className = ""
}) => {
	return (
		<div className={`currency-text font-light tracking-[0.15px] text-base flex ${className} leading-6`}>	
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