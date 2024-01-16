"use client"
import "./index.style.css"

const SecondaryCard = ({
	children,
	className = ""
}) => {
	return (
		<div className={`secondary-card ${className}`}>
			{ children }
		</div>
	)
}

export default SecondaryCard