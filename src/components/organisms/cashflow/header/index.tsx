import { CashflowHeader } from "@/components/atoms/Icons"
import YearOptionInput from "@/components/molecules/input/year-option"
import Headline from "@/components/atoms/headline"

export default function Header({
	className
}) {
	return (
		<Headline
			title="Cash Flow"
			description="Show a comprehensive overview of data from different sources."
			className={className}
		>
			<YearOptionInput />
		</Headline>
	)
}