export function simplifyNumber(number) {
    if (number >= 1000) {
        const suffixes = ["", "K", "M", "B", "T"];
        const suffixIndex = Math.floor(Math.log10(number) / 3);
        let shortNumber = (number / Math.pow(1000, suffixIndex)).toFixed(1);
        if(shortNumber % 1 === 0) shortNumber = parseInt(shortNumber)
        return shortNumber + suffixes[suffixIndex];
    } else {
        return number.toString();
    }
}

export function toCurrency(number) {
	let currencyString = number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
	currencyString = currencyString.replace("$", "")
	currencyString = currencyString.replace(/\./g, "#")
	currencyString = currencyString.replace(/,/g, ".")
	currencyString = currencyString.replace(/\#/g, ",")

	return currencyString
}

export function generateId() {
	const id = Math.round(Math.random() * 999999999)

	return id
}
