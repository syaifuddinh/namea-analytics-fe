"use client"

import { useState } from "react";
import Menu from "./menu.json"
import "./index.style.css"
import Logo from "@/assets/images/logo.svg"
import Image from "next/image";
import Icon from "@/components/atoms/icon"
import UserProfile from "./user-profile"
import DropdownMenu from "./dropdown-menu"
import FloatingItem from "@/components/atoms/floating-item"

const Menubar = () => {
	const [dropdownItems, setDropdownItems] = useState([])
	const [dropdownPosition, setDropdownPosition] = useState({
		top: 0,
		left: 0
	})
	const [isDropdownVisible, setIsDropdownVisible] = useState(false);

	const onMenuOver = (e, menuItems) => {
		e.stopPropagation()
		if(menuItems.length === 0) return;
		const target = e.target;
		const rect = target.getBoundingClientRect()
		setDropdownPosition({
			top: rect.top + rect.height + 16,
			left: rect.left
		})
		setDropdownItems(menuItems)
		setIsDropdownVisible(true)
	}

	const onMenuClick= (menuId) => {
		setIsDropdownVisible(false)
	}

	return (
		<div className="menubar flex items-center justify-between">
			<div className="flex items-center">
				<div className="menubar_logo flex gap-2 font-medium mr-[30px] items-center">
					<Image
						src={Logo}
						alt="logo"
					/>

					LX Analytics
				</div>
				<div className="menubar_items flex gap-[8px] ">
					{
						Menu.items.map(item => (
							<div
								key={item.id}
								className="menubar_item capitalize cursor-pointer font-medium flex gap-2 items-center text-sm leading-5 tracking px-[10px] py-[6px]"
								onMouseEnter={e => { e.stopPropagation(); onMenuOver(e, item.childrens)}}
							>
								{ item.name }
								{ item.childrens.length > 0 && (
									<Icon
										src="transparent/chevron-down.svg"
										alt="expanding-menu-icon"
									/>
								) }
							</div>
						))	
					}
				</div>
			</div>

			<UserProfile />
		</div>
	)
}

export default Menubar