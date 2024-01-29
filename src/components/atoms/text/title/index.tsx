import "./index.style.css"

const TitleText = ({ children }) => {
	return (
		<div className="title-text font-base text-lg leading-[26px] tracking-[0.06px]">	
			{ children }
		</div>	
	)
}

export default TitleText;