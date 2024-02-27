import Card from "@/components/atoms/card";
import {
  CostingDottedLeftArrowIcon,
  CostingDottedRightArrowIcon
} from "@/components/atoms/Icons";
import CustomChart from "@/components/atoms/custom-chart"

const Header = () => (
	<div className="card_header flex items-center justify-center gap-5 h-[64px]">
		<CostingDottedRightArrowIcon />
		<div className="font-light text-gray-10">
			2023 Yearly Costing Breakdown
		</div>
		<CostingDottedLeftArrowIcon />
	</div>
)

const labels = ["Jan 23", "Feb 23", "Mar 23", "Apr 23", "May 23", "Jun 23", "Jul 23", "Aug 23", "Sep 23", "Oct 23", "Nov 23", "Dec 23"] 
const values = [
	[
		350000,
		100000,
		200000,
		400000,
		375000,
		300000,
		475000,
		275000,
		400000,
		0,
		0,
		0
	]
]

export default function Breakdown({ className }) {
	return (
		<Card
			headerElement={<Header />}
			className={className}
		>
			<CustomChart
				labels={labels}
				values={values}
				variant="bar"
				fixedBarWidth={70}
				maxValue={500000}
				xClassname={"pl-8 pr-6"}
			/>
		</Card>
	)
}