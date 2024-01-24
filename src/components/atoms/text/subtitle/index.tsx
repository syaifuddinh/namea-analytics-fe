import "./index.style.css"

const SubtitleText = ({ children, className = "" }) => {
	return (
		<div className={`subtitle-text text-sm font-light ${className}`}>	
			{ children }
		</div>	
	)
}

export default SubtitleText;