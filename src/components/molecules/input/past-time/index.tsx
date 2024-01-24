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
		<div className="past-time-input rounded-[6px] border border-gray1 text-gray2 flex items-center bg-base-bg3 leading-5 min-w-[309px] h-[32px]">
			<div className="past-time-input_days ml-[4px] mr-[17px] px-[6px] py-[2px] bg-base-bg3 rounded text-sm font-light">
				Last 30 Days
			</div>
			<div className="past-time-input_date mr-[20px] text-sm font-light">
				Nov 13 - Dec 10, 2023
			</div>

			<div className="cursor-pointer py-2 px-[3px] my-1.5 mr-[3px]">
				<Icon
					src="transparent/chevron-down.svg"
					alt="period input"
				/>
			</div>
		</div>
	)
}
