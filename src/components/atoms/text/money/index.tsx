const MoneyText = ({ 
	children,
	className = "",
	positivity="plus",
	variant = "default"
}) => {
	return (
		<div className={`money-text font-light text-base flex ${className} leading-6 ${variant === "default" ? "text-[var(--white-theme-color)]" : ""} ${variant === "danger" ? "text-alert-10" : ""} `}>	
			{ positivity === "minus" && "-" }
			<span className={``}>
				Rp{ children }
			</span>
			<div className={`money-text_suffix ${variant === "default" ? "text-[var(--gray-theme-color)]" : ""} ${variant === "danger" ? "text-alert-6" : ""}`}>

				,00
			</div>
		</div>	
	)
}

export default MoneyText;