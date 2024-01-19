"use client"
import "./index.style.css"

const Card = ({
	children,
	headerElement,
	className = "",
	paddingBottom = "6px",
	isDividerVisible = true
}) => {
	return (
		<div className={`card pt-[6px] border-t border-b border-gray1 rounded-[16px] pb-[${paddingBottom}] ${className}`}>
			<div className="card_container">
				{ headerElement } 
				{ isDividerVisible === true && (
					<div className="card_divider">
						<div className="card_divider__border"></div>
					</div>
				) }
				<div className="card_content">
					{ children }
				</div>
			</div>
		</div>
	)
}

export default Card