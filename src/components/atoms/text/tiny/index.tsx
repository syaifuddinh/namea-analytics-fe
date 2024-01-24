import "./index.style.css"

const TinyText = ({ children, className = "" }) => {
	return (
		<div className={`tiny-text text-xs font-light ${className}`}>	
			{ children }
		</div>	
	)
}

export default TinyText;