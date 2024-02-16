"use client";

import { useState } from "react";
import Menu from "./menu.json";
import "./index.style.css";
import Logo from "@/assets/images/logo.svg";
import Image from "next/image";
import Icon from "@/components/atoms/icon";
import UserProfile from "./user-profile";
import DropdownMenu from "./dropdown-menu";
import FloatingItem from "@/components/atoms/floating-item";

const Menubar = () => {
  const [dropdownItems, setDropdownItems] = useState([]);
  const [dropdownPosition, setDropdownPosition] = useState({
    top: 0,
    left: 0,
  });
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const onMenuOver = (e, menuItems) => {
    e.stopPropagation();
    if (menuItems.length === 0) return;
    const target = e.target;
    const rect = target.getBoundingClientRect();
    setDropdownPosition({
      top: rect.top + rect.height + 16,
      left: rect.left,
    });
    setDropdownItems(menuItems);
    setIsDropdownVisible(true);
  };

  const onMenuClick = (menuId) => {
    setIsDropdownVisible(false);
  };

  return (
    <div className="menubar flex items-center justify-between">
      <div className="flex items-center">
        <div className="menubar_logo flex text-[var(--Gray10)] leading-5 gap-3 font-base mr-[30px] items-center">
          <Image src={Logo} alt="logo" className="w-[24px] h-[25px]" />
          <div className="font-normal font-neue-montreal3 tracking-[0.1px]">
            LX Analytics
          </div>
        </div>
        <div className="menubar_items flex gap-2">
          {Menu.items.map((item) => (
            <div
              key={item.id}
              className={`menubar_item font-light capitalize cursor-pointer flex gap-2.5 items-center text-sm leading-5 py-1.5 pl-2.5 ${
                item.childrens.length > 0 ? "pr-1.5" : "pr-2.5"
              } text-[var(--Gray10)] hover:bg-[var(--base-bg3)] rounded-[6px] ${
                item.id == "home" ? "active" : ""
              }`}
              onMouseEnter={(e) => {
                e.stopPropagation();
                onMenuOver(e, item.childrens);
              }}
            >
              <div className="tracking-[0.08px]">{item.name}</div>
              {item.childrens.length > 0 && (
                <div className="px-[4px] py-[7px]">
                  <Icon
                    src="transparent/menu-chevron-down2.svg"
                    alt="expanding-menu-icon"
                    className="w-[12px] h-[6px]"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <UserProfile />
    </div>
  );
};

export default Menubar;
