import Card from "@/components/atoms/card";

const Header = () => (
	<div className="card_header flex justify-center">
		<div className="font-light text-gray-10">
			2023 Yearly Costing Breakdown
		</div>
	</div>
)

export default function Breakdown({ className }) {
	return (
		<Card
			headerElement={<Header />}
			className={className}
		>
			
		</Card>
	)
}