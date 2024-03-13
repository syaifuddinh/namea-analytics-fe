import { ReactElement } from "react"

const TitleText = ({ 
	children 
}: {
	children: ReactElement
}) => {
	return (
		<div className="title-text font-light text-lg text-gray-10">	
			{ children }
		</div>	
	)
}

export default TitleText;