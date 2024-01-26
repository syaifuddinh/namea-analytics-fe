import "./index.style.css"

const TinyText = ({ children, className = "" }) => {
	return (
		<div className={`tiny-text text-xs font-light -tracking-[0.12px] ${className}`}>	
			{ children }
		</div>	
	)
}

export default TinyText;