import Card from "@/components/atoms/card"
import TitleText from "@/components/atoms/text/title"
import DepositCard from "./deposit-card"
import CustomChart from "@/components/atoms/custom-chart"

const Header = () => {
	return (
		<div className="bg-base-bg5 h-[64px] flex items-center px-5 border-y border-base-bg3 rounded-t-xl">
			<TitleText fontSize="16px">
				Deposit
			</TitleText>
		</div>
	)
}

export default function EventDeposit({ 
	className = ""
}: {
	className?: string
}) {
	return (
		<Card
			className={className}
			headerElement={<Header />}
			paddingTop="5px"
			dividerPaddingLeft="18px"
		>
			<div className="bg-base-bg5 flex flex-col md:flex-row md:h-[284px] border-y border-base-bg3">
				<div className="grow p-5 grid grid-cols-1 gap-5 min-w-[275px]">
					<DepositCard
						title="Total Deposit"
						balance="694.354.766"
						mutation="23.8% (+24)"
						mutationVariant="primary"
					/>
					<DepositCard
						title="Total Withdrawal"
						balance="694.354.766"
						mutation="23.8% (+24)"
						mutationVariant="primary"
					/>
				</div>

				<div className="lg:w-[650px] xl:w-[752px] border-l border-base-bg3">
					<CustomChart
						variant="bar"
						labels={["Dec Week 1", "Dec Week 2", "Dec Week 3", "Dec Week 4"]}
						maxValue={500000}
						values={[
							[450000, 200000, 250000, 150000]
						]}
						xClassname="pl-8 pr-8"
					/>
				</div>
			</div>
		</Card>
	)
}