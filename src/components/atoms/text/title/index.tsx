import { ReactElement } from "react"

const TitleText = ({ 
	children,
	fontSize = "18px", 
	fontWeight = 300, 
	className = "" 
}: {
	children: ReactElement,
	fontSize?: string,
	fontWeight?: string|number,
	className?: string
}) => {
	return (
		<div
			className={`title-text text-gray-10 leading-[26px] ${className}`}
			style={{ fontSize, fontWeight }}
		>	
			{ children }
		</div>	
	)
}

export default TitleText;