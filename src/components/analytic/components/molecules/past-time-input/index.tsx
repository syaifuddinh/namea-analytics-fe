import SelectInput from "../../../components/atoms/select-input";
import {
	getCurrentYear,
	getLastMonthLabel,
	getBriefDate,
	getFirstDayOfLastWeek,
	getYearByDate,
	getLastDayOfLastWeek
} from "../../../utils/date";

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

export default function PastTimeInput({ }) {
  return (
    <SelectInput
    	placeholder="Select period"
    	options={options}
    />
  )
}
