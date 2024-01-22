"use client"
import "./index.style.css"

const Card = ({
	children,
	headerElement,
	className = "",
	paddingBottom = "6px",
	isUsePaddingBottom = true,
	isDividerVisible = true
}) => {
	return (
		<div className={`card pt-[6px] ${ isUsePaddingBottom === true ? 'pb-[6px]' : ''} border border-gray1 rounded-[16px] ${className}`}>
			<div className="card_container">
				{ headerElement } 
				{ isDividerVisible === true && (
					<div className="card_divider px-[20px]">
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