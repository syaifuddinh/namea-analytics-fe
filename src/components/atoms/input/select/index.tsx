"use client";

import {
  IconDropdown,
} from "@/components/atoms/Icons";

type OptionType = {
	value: string|number,
	label: string
}

type SelectInputType = {
	placeholder?: string,
	value?: string|number,
	options: OptionType[],
	onChange: (newValue: string|number) => void
}

export default function SelectInput({ 
	value,
	placeholder,
	options,
	onChange
}: SelectInputType) {

	return (
		<button className="flex flex-row rounded-md border border-gray-4 bg-checkbox items-center pr-2 pl-3 py-2 mr-2 max-h-[2.25rem]">
            <div className="w-[86px] text-gray-6 text-sm mr-[6px]">
              { placeholder }
            </div>
            <div className="flex flex-1 justify-end">
              <IconDropdown />
            </div>
      	</button>
	)
}
