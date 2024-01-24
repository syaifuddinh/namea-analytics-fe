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
		<div className={`card pt-[5px] ${ isUsePaddingBottom === true ? 'pb-[5px]' : ''} border border-gray1 rounded-[16px] ${className}`}>
			<div className="card_container">
				{ headerElement } 
				{ isDividerVisible === true && (
					<div className="card_divider px-[20px] h-2.5">
						<div className="card_divider__border h-2.5"></div>
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