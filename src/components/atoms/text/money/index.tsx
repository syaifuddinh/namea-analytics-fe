import "./index.style.css"

const MoneyText = ({ 
	children,
	className = ""
}) => {
	return (
		<div className={`money-text font-base text-base flex ${className}`}>	
			Rp{ children }
			<div className="money-text_suffix">
				,00
			</div>
		</div>	
	)
}

export default MoneyText;