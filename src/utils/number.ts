export function simplifyNumber(number) {
    if (number >= 1000) {
        const suffixes = ["", "K", "M", "B", "T"];
        const suffixIndex = Math.floor(Math.log10(number) / 3);
        let shortNumber = (number / Math.pow(1000, suffixIndex)).toFixed(1);
        shortNumber = parseInt(shortNumber)
        return shortNumber + suffixes[suffixIndex];
    } else {
        return number.toString();
    }
}