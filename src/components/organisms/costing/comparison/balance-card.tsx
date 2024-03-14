import BalanceLabel from "@/components/atoms/balance-label"
import SecondaryCard from "@/components/atoms/card/secondary"
import { StrongboxIcon } from "@/components/atoms/Icons"

export default function BalanceCard({ year, balance }) {
	return (
		<SecondaryCard
			className="bg-base-bg4 px-5 pt-5"
			borderRadius="0.75rem"
		>
			<div className="flex items-center gap-2">
				<StrongboxIcon />
				<div className="font-light text-sm text-gray-10">
					{ year }
				</div>
			</div>	
			<BalanceLabel
				title="Total Expenses"
				variant="default"
				balance={balance}
				positivity="plus"
				paddingLeft="7px"
				className="mt-[11px]"
			/>
		</SecondaryCard>
	)
}