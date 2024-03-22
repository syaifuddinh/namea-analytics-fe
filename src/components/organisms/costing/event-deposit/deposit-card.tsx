import MoneyText from "@/components/atoms/text/money"
import BalanceBadge from "@/components/atoms/balance-badge"
import MutationLabel from "@/components/atoms/mutation-label"

export default function DepositCard({
	title,
	balance,
	mutation,
	mutationVariant
}: {
	title: string,
	balance: string,
	mutation: string,
	mutationVariant: "primary"|"danger"
}) {
	return (
		<div className="event-deposit-card border border-gray-1 rounded-xl px-5 h-[112px] bg-base-bg4 flex flex-col justify-center">
			<div className="font-extralight text-sm leading-5 text-gray-6 pt-[1px]">
				{ title }
			</div>	

			<BalanceBadge
				title={<MoneyText letterSpacing="0.2px">{ balance }</MoneyText>}
				subtitle={<MutationLabel variant={mutationVariant} value={mutation} />}
				positivity="plus"
				className="mt-2.5"
				paddingLeft="6px"
				paddingRight="8px"
			/>
		</div>
	)
}