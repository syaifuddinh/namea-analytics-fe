"use client"

import FloatingItem from "@/components/atoms/floating-item"

const Menubar = ({ top, left, dropdownItems, onMenuClick }) => {
	return (
		<FloatingItem
			top={top}
			left={left}
		>
			<div className="menubar_dropdown-items">
				{
					dropdownItems.map(item => (
						<div
							key={item.id}
							className="menubar_dropdown-item font-medium capitalize px-8 py-2 cursor-pointer"
							onClick={() => onMenuClick(item.id)}
						>
							{ item.name }
						</div>
					))
				}
			</div>
		</FloatingItem>
	)
}

export default Menubar