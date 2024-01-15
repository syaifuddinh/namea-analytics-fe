import "./index.style.css"

const MoneyText = ({ children }) => {
	return (
		<div className="money-text font-medium text-base flex">	
			Rp{ children }
			<div className="money-text_suffix">
				,00
			</div>
		</div>	
	)
}

export default MoneyText;