import "./index.style.css"

const TitleText = ({ children }) => {
	return (
		<div className="title-text font-base text-lg">	
			{ children }
		</div>	
	)
}

export default TitleText;