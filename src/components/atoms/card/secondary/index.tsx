"use client"

const SecondaryCard = ({
	children,
	className = "",
	style,
	borderRadius = "0.5rem"
}) => {
	return (
		<div
			className={`secondary-card border border-gray-1 ${className}`}
			style={{ ...style, borderRadius }}
		>
			{ children }
		</div>
	)
}

export default SecondaryCard