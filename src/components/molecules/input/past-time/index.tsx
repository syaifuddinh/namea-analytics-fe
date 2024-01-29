import Icon from "@/components/atoms/icon";
import {
	getCurrentYear,
	getLastMonthLabel,
	getBriefDate,
	getFirstDayOfLastWeek,
	getYearByDate,
	getLastDayOfLastWeek
} from "@/utils/date";

const year = getCurrentYear()
const lastYear = year - 1
const lastMonth = getLastMonthLabel()

const lastDayOfLastWeek = getLastDayOfLastWeek();
const firstDayOfLastWeekLabel = getBriefDate(getFirstDayOfLastWeek())
const lastDayOfLastWeekLabel = getBriefDate(lastDayOfLastWeek)
const yearOfLastWeek = getYearByDate(lastDayOfLastWeek)

const options = [
	{
		value: "lastWeek", 
		label: "Last week " + firstDayOfLastWeekLabel + " - " + lastDayOfLastWeekLabel + ", " + yearOfLastWeek
	},
	{ 
		value: "lastMonth",
		label: "Last month " + lastMonth + " 01 - " + lastMonth + " 30, " + year
	},
	{ 
		value: "lastYear", 
		label: "Last year Jan 01 - Dec 30, " + lastYear
	}
]

export default function PastTimeInput({ onChange }) {
	return (
		<div className="past-time-input rounded-[6px] border border-gray1 text-gray2 flex items-center justify-between bg-base-bg3 leading-5  min-w-[309px] max-w-[309px] min-h-[2.001rem] max-h-[2.001rem]">
			<div className="flex items-center mr-5">	
				<div className="past-time-input_days ml-[4px] mr-[1.25rem] px-[6px] py-[2px] bg-base-bg3 rounded text-sm font-light -tracking-[0.14px]">
					Last 30 Days
				</div>
				<div className="past-time-input_date text-sm font-light -tracking-[0.14px]">
					Nov 13 - Dec 10, 2023
				</div>
			</div>

			<div className="cursor-pointer py-2 my-1.5 mr-1.5 pr-[0.125rem]">
				<Icon
					src="transparent/select-chevron-down.svg"
					alt="period input"
					className="w-[10px] h-[10px]"
				/>
			</div>
		</div>
	)
}
