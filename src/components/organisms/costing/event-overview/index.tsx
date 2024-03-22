import TitleText from "@/components/atoms/text/title"
import HeadlineCard from "@/components/atoms/card/headline"
import {
  CardDashboardSA
} from "@/components/molecules/Card/SuperAgent";


export default function EventOverview({
	className = ""
}: {
	className?: string
}) {
	return (
		<div className={className}>
			<TitleText>
				Event Overview
			</TitleText>

			<div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
				<CardDashboardSA
		          icon={"/images/total-super-agent.png"}
		          placeholder={"Revenue Generated"}
		          value={"Rp500.950.450"}
		          profit={true}
		          percentage={"23.8% (+24)"}
		          topLineGap="6px"
		          contentMarginTop="19px"
		          contentMarginX="19px"
		        />

				<CardDashboardSA
		          icon={"/images/total-active-super-agent.png"}
		          placeholder={"Member Joined"}
		          value={"Rp500.950.450"}
		          profit={false}
		          percentage={"16.5% (-8)"}
		          topLineGap="6px"
		          contentMarginTop="19px"
		          contentMarginX="19px"
		        />
		        
				<CardDashboardSA
		          icon={"/images/total-revenue.png"}
		          placeholder={"New Deposit"}
		          value={"Rp500.950.450"}
		          profit={true}
		          percentage={"23.8% (+24)"}
		          topLineGap="6px"
		          contentMarginTop="19px"
		          contentMarginX="19px"
		        />
			</div>
		</div>
	)
}