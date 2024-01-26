import "./index.style.css"

const SubtitleText = ({ children, className = "" }) => {
	return (
		<div className={`subtitle-text text-sm font-light -tracking-[0.14px]  ${className}`}>	
			{ children }
		</div>	
	)
}

export default SubtitleText;