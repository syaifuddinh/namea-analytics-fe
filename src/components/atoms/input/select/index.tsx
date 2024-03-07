"use client";

import { IconChevronDown } from "@/components/atoms/Icons";
import { useState } from "react"
import { useRef } from "react"
import { useEffect } from "react"

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
  const [dataValue, setDataValue] = useState(null)
  const [dataLabel, setDataLabel] = useState(null)
  const selectEl = useRef(null)

  const initiateDropdown = () => {
      if(!selectEl.current) return
      const targetEl = selectEl.current

  }

  useEffect(() => {
    initiateDropdown()

    return () => false
  }, [selectEl])

  const onClickData = (newValue, newLabel) => {
      setDataValue(newValue)
      setDataLabel(newLabel)
  }

  return (
    <>
      <button
        className={`flex flex-row rounded-md border border-gray-1 bg-checkbox items-center pr-2 pl-3 py-2 max-h-[2.25rem] ${className}`}
        ref={selectEl}
        onLoad={() => { alert("abc") }}
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

      { false && options.length > 0 && (
        <div className="select_dropdown bg-checkbox rounded-md overflow-hidden">
          { options.map(option => (
            <div
              key={option.value}
              className="min-w-[147px] px-2.5 h-[32px] flex items-center font-extralight text-sm leading-5 text-gray-0 cursor-pointer"
              onClick={() => onClickData(option.value, option.label)}
             >
                { option.label }
            </div>
          )) }
        </div>
      ) }
    </>
  );
}
