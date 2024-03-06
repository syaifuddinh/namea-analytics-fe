"use client"

const HeadlineCard = ({
	children,
	className = "",
}) => {
	return (
		<div className="flex flex-1 border border-gray-1 rounded-2xl bg-base-bg2 overflow-hidden">
	      <div className="flex flex-1 border-t border-gray-1 mt-[4px] bg-base-bg5 rounded-t-xl">
		        <div className="flex flex-col flex-1 border-t border-x border-gray-1 mt-[1.125rem] mx-[1.125rem] bg-base-bg4 rounded-t-xl">
					{ children }
				</div>
			</div>
		</div>
	)
}

export default HeadlineCard