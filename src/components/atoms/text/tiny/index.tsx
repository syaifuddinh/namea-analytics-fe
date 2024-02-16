import "./index.style.css"

const TinyText = ({ children, className = "" }) => {
	return (
		<div className={`tiny-text text-xs font-extralight tracking-[0.06px] ${className}`}>	
			{ children }
		</div>	
	)
}

export default TinyText;