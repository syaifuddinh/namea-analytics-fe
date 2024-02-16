"use client"
import "./index.style.css"

const SecondaryCard = ({
	children,
	className = "",
	style
}) => {
	return (
		<div className={`secondary-card ${className}`} style={style}>
			{ children }
		</div>
	)
}

export default SecondaryCard