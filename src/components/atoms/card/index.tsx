"use client"
import "./index.style.css"

const Card = ({
	children,
	headerElement
}) => {
	return (
		<div className="card">
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