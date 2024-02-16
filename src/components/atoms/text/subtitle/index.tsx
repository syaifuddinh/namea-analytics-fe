import "./index.style.css"

const SubtitleText = ({ children, className = "" }) => {
	return (
		<div className={`subtitle-text text-sm font-extralight tracking-[0.06px] leading-5 ${className}`}>	
			{ children }
		</div>	
	)
}

export default SubtitleText;