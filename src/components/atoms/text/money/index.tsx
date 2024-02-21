const MoneyText = ({ 
	children,
	className = "",
	positivity="plus",
	fontSize="1rem",
	variant = "default"
}) => {
	return (
		<div
			className={`money-text font-light flex ${className} leading-6 ${variant === "default" ? "text-[var(--white-theme-color)]" : ""} ${variant === "danger" ? "text-alert-10" : ""} `}
			style={{ fontSize }}
		>	
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