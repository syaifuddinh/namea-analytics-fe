import "./index.style.css"

const TitleText = ({ children }) => {
	return (
		<div className="title-text font-base text-lg -tracking-[0.216px] leading-[26px]">	
			{ children }
		</div>	
	)
}

export default TitleText;