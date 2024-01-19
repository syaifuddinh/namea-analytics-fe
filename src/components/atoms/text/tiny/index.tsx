import "./index.style.css"

const TinyText = ({ children }) => {
	return (
		<div className="tiny-text text-xs font-light">	
			{ children }
		</div>	
	)
}

export default TinyText;