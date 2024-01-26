import "./index.style.css"

const MoneyText = ({ 
	children,
	className = ""
}) => {
	return (
		<div className={`money-text font-base text-base flex ${className} -tracking-[0.16px] leading-6`}>	
			Rp{ children }
			<div className="money-text_suffix">
				,00
			</div>
		</div>	
	)
}

export default MoneyText;