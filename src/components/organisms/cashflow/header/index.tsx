import { CashflowHeader } from "@/components/atoms/Icons"

export default function Header({
	className
}) {
	return (
		<div
			className={"flex items-center gap-3 " + className}
		>
			<CashflowHeader />

			<div>
				<div className="cashflow-header_title font-light text-[18px] text-[var(--Gray10)] leading-[26px]">
					Cashflow
				</div>
				<div className="cashflow-header_description font-extralight text-sm leading-5 text-[var(--Gray6)]">
					Show a comprehensive overview of data from different sources.
				</div>
			</div>
		</div>
	)
}