import "./index.style.css"

const MoneyText = ({ 
	children,
	className = ""
}) => {
	return (
		<div className={`money-text font-normal text-base flex ${className} leading-6`}>	
			Rp{ children }
			<div className="money-text_suffix">
				,00
			</div>
		</div>	
	)
}

export default MoneyText;