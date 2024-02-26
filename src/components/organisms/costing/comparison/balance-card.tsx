import BalanceLabel from "@/components/atoms/balance-label"
import SecondaryCard from "@/components/atoms/card/secondary"
import { StrongboxIcon } from "@/components/atoms/Icons"

export default function BalanceCard({ year, balance }) {
	return (
		<SecondaryCard
			className="bg-base-bg4 p-4"
		>
			<div className="flex items-center gap-1">
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
				className="mt-2"
			/>
		</SecondaryCard>
	)
}