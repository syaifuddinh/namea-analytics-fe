import "./index.style.css"

const TinyText = ({ children }) => {
	return (
		<div className="tiny-text text-xs">	
			{ children }
		</div>	
	)
}

export default TinyText;