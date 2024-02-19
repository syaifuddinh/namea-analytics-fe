import { CashflowHeader } from "@/components/atoms/Icons"
import YearOptionInput from "@/components/molecules/input/year-option"

export default function Header({
	className
}) {
	return (
		<div
			className={"flex lg:flex-row flex-col lg:items-center justify-between gap-5 " + className}
		>
			<div className="flex gap-3 items-center">
				<CashflowHeader />

				<div className="cashflow-header_sign">
					<div className="cashflow-header_title font-light text-[18px] text-[var(--Gray10)] leading-[26px]">
						Cashflow
					</div>
					<div className="cashflow-header_description font-extralight text-sm leading-5 text-[var(--Gray6)]">
						Show a comprehensive overview of data from different sources.
					</div>
				</div>
			</div>

			<YearOptionInput />
		</div>
	)
}