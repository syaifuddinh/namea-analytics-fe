const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
const currentDate = new Date();

export function getCurrentYear(): number {
	return currentDate.getFullYear();
}

export function getYearByDate(targetDate: Date) {
	return targetDate.getFullYear();
}

export function getCurrentMonth(): number {
	return currentDate.getMonth() + 1
} 

export function getMonthLabel(monthIndex: number): string {
	if(monthIndex < 1) throw "Month index can't be less than 1"
	if(monthIndex > 12) throw "Month index can't be more than 12"
	return months[monthIndex - 1];
}

export function getMonthLabelByDate(targetDate: Date): string {
	const index = targetDate.getMonth() + 1
	return getMonthLabel(index)
}

export function getLastMonthLabel(): string {
	return getMonthLabel(getCurrentMonth() - 1)
}

export function getFirstDayOfLastWeek() {
	// Get the current date
	// Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
	var currentDayOfWeek = currentDate.getDay();

	// Calculate the number of days to subtract to get to the first day of the current week
	var daysToSubtract = currentDayOfWeek + 7;

	// Subtract the days to get to the first day of the last week
	var firstDayOfLastWeek = new Date(currentDate.getTime() - (daysToSubtract * 24 * 60 * 60 * 1000));

	// Set the time to midnight to get the exact date
	firstDayOfLastWeek.setHours(0, 0, 0, 0);

	return firstDayOfLastWeek;
}

export function getLastDayOfLastWeek() {
	// Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
	var currentDayOfWeek = currentDate.getDay();

	// Calculate the number of days to subtract to get to the last day of the previous week
	var daysToSubtract = currentDayOfWeek + 1; // Add 1 to include the current day

	// Subtract the days to get to the last day of the last week
	var lastDayOfLastWeek = new Date(currentDate.getTime() - (daysToSubtract * 24 * 60 * 60 * 1000));

	// Set the time to the end of the day to get the last millisecond of the last day
	lastDayOfLastWeek.setHours(23, 59, 59, 999);

	return lastDayOfLastWeek;	
}

export function getBriefDate(targetDate: Date) {
	const monthLabel = getMonthLabelByDate(targetDate)
	const date = targetDate.getDate()

	return monthLabel + " " + date;
}