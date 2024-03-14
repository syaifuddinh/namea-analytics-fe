import { ReactElement } from "react"

const TitleText = ({ 
	children,
	fontSize = "18px", 
	className = "" 
}: {
	children: ReactElement,
	fontSize: string,
	className?: string
}) => {
	return (
		<div
			className={`title-text font-light text-gray-10 leading-[26px] ${className}`}
			style={{ fontSize }}
		>	
			{ children }
		</div>	
	)
}

export default TitleText;