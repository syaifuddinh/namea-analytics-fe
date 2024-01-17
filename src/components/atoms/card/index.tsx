"use client"
import "./index.style.css"

const Card = ({
	children,
	headerElement,
	className = "",
	paddingBottom = 1
}) => {
	return (
		<div className={`card pt-1 pb-${paddingBottom} ${className}`}>
			<div className="card_container">
				{ headerElement } 
				<div className="card_divider">
					<div className="card_divider__border"></div>
				</div>
				<div className="card_content">
					{ children }
				</div>
			</div>
		</div>
	)
}

export default Card