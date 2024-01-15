import "./index.style.css"

const TitleText = ({ children }) => {
	return (
		<div className="title-text font-medium text-lg">	
			{ children }
		</div>	
	)
}

export default TitleText;