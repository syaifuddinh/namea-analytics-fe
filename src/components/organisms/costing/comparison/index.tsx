import Card from "@/components/atoms/card";
import SelectInput from "@/components/atoms/input/select"

const Header = () => (
	<div className="card_header">
		<div className="font-light text-gray-10">
			Costing Comparation
		</div>

		<div className="flex gap-2 mt-2">
			<SelectInput
				placeholder="Select Category"
			/>
			<SelectInput
				placeholder="Select Month"
			/>
			<SelectInput
				placeholder="Select Year"
			/>
		</div>
	</div>
)


export default function Comparison({ className }) {
	return (
		<Card
			headerElement={<Header />}
			className={className}
		>
			<div className="p-4">
				<div className="no-data flex flex-col items-center">
					<img src="/images/crocodile.svg" alt="no-data-image" />
					<div className="no-data_description text-gray-6 text-sm font-extralight">
						Oops! There is no data yet!
					</div>
				</div>
			</div>
		</Card>
	)
}