"use client";

import { IconChevronDown } from "@/components/atoms/Icons";
import { useState } from "react"
import { useRef } from "react"
import { useEffect } from "react"
import { createPortal } from 'react-dom';
import { generateId } from "@/utils/number"

type OptionType = {
  value: string | number;
  label: string;
};

type SelectInputType = {
  placeholder?: string;
  value?: string | number;
  options?: OptionType[];
  onChange?: (newValue: string | number) => void;
  placeholderClassName?: string;
  className?: string;
  iconStyle?: string;
};

export default function SelectInput({
  value,
  placeholder,
  options = [],
  placeholderClassName = "",
  className = "",
  iconStyle,
  onChange,
}: SelectInputType) {
  const dropdownId = "dropdown" + generateId()
  const [dataValue, setDataValue] = useState(null)
  const [dataLabel, setDataLabel] = useState(null)
  const [dropdownTop, setDropdownTop] = useState("0px")
  const [dropdownLeft, setDropdownLeft] = useState("0px")
  const [dropdownWidth, setDropdownWidth] = useState("0px")
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)
  const selectEl = useRef(null)
  const dropdownEl = useRef(null)

  const onInitiateValue = () => {
      if(!value) return;
      if(value === dataValue) return;
      const selected = options.find(item => item.value === value)
      if(!selected) return;
      setDataValue(selected.value)
      setDataLabel(selected.label)
  }

  useEffect(() => {
      onInitiateValue()
  }, [value])

  const onClickBrowser = (e) => {
    const el = e.target
    const parentTarget = el.closest(dropdownId)
    if(parentTarget === null) {
        setIsDropdownVisible(false)
        window.removeEventListener("click", onClickBrowser)
    }
  }

  const initiateDropdown = () => {
      if(options.length < 1) return
      if(!selectEl.current) return
      const targetEl = selectEl.current
      const dimension = targetEl.getBoundingClientRect()
      const { top, left, width, height } = dimension
      const x = left
      const y = top + window.scrollY
      const newDropdownTop = y + height + 6
      setDropdownTop(`${newDropdownTop}px`)

      const newDropdownLeft = x 
      setDropdownLeft(`${newDropdownLeft}px`)

      const newDropdownWidth = width 
      setDropdownWidth(`${newDropdownWidth}px`)
  }

  const onClickData = (newValue, newLabel) => {
      setDataValue(newValue)
      setDataLabel(newLabel)
      setIsDropdownVisible(false)
      window.removeEventListener("click", onClickBrowser)
      if(onChange) onChange(newValue)
  }

  const onClickInput = () => {
    if(options.length < 1) return
    initiateDropdown()
    setIsDropdownVisible(true)
    setTimeout(() => {
        window.addEventListener("click", onClickBrowser)
    }, 500)
  }

  return (
    <>
      <button
        className={`flex flex-row rounded-md border border-gray-1 bg-checkbox items-center pr-2 pl-3 py-2 max-h-[2.25rem] ${className}`}
        ref={selectEl}
        onClick={onClickInput}
      >
        <div
          className={`${dataValue ? "text-gray-0" : "text-gray-6"} text-sm mr-[6px] font-extralight ${placeholderClassName} text-left`}
        >
          { dataValue ? dataLabel : placeholder }
        </div>
        <div className="flex flex-1 justify-end">
          <IconChevronDown className={iconStyle} />
        </div>
      </button>

      { isDropdownVisible === true && options.length > 0 && createPortal(
        <div
            ref={dropdownEl}
            id={dropdownId}
            className="select_dropdown z-20 border border-gray-9 absolute bg-checkbox rounded-md overflow-hidden"
            style={{"top": dropdownTop, "left": dropdownLeft, "width": dropdownWidth}}
        >
          { options.map(option => (
            <div
              key={option.value}
              className="min-w-[147px] px-2.5 h-[32px] flex items-center font-extralight text-sm leading-5 text-gray-0 cursor-pointer"
              onClick={() => onClickData(option.value, option.label)}
             >
                { option.label }
            </div>
          )) }
        </div>,
        window.document.body
      ) }
    </>
  );
}
