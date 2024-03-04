"use client";

import {
  IconCalender,
  IconDropdown
} from "@/components/atoms/Icons";

export default function DatePeriodInput() {
	return (
		<div className="date-period-input flex flex-row items-center border border-gray-1 bg-base-bg3 rounded-md pl-2 pr-[6px] py-[2px]">
            <IconCalender className="pr-1" />
            <div className="text-gray-6 lg:text-sm font-extralight pr-6">
              2 December - 20 December
            </div>
            <div className="flex flex-1 justify-end">
              <IconDropdown />
            </div>
        </div>
	)
}