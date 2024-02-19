"use client";

import { IconCalender } from "@/components/atoms/Icons"
import "./index.style.css"

export default function CalendarInput() {
	return (
		<div className="calendar cursor-pointer flex items-center justify-between border border-[var(--Gray1)]  min-h-[2.5rem] max-h-[2.5rem] rounded-lg gap-3">
			<div className="calendar_label m-2 ml-4 text-sm text-[var(--Gray10)]">
				January 2023
			</div>

			<div className="calendar_control mr-[4px] border p-[2px] border-[var(--Gray1)] rounded-md">
				<IconCalender />
			</div>
		</div>
	)
}