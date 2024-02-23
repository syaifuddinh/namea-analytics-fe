import Card from "@/components/atoms/card";
import SelectInput from "@/components/atoms/input/select"
import Button from "@/components/atoms/button"

const Header = () => (
	<div className="card_header">
		<div className="font-light text-gray-10">
			Costing Comparation
		</div>

		<div className="flex flex-col md:flex-row gap-2 mt-2 *:grow">
			<SelectInput
				placeholder="Select Category"
			/>
			<SelectInput
				placeholder="Select Month"
			/>
			<SelectInput
				placeholder="Select Year"
			/>

			<Button variant="default" className="max-w-[120px]">
				Apply Filters
			</Button>
		</div>
	</div>
)


export default function Comparison({ className }) {
	return (
		<Card
			headerElement={<Header />}
			className={className}
		>
			<div className="p-4 bg-base-bg5">
				<div className="no-data flex flex-col items-center justify-center h-[275px]">
					<img src="/images/crocodile.svg" alt="no-data-image" />
					<div className="no-data_description text-gray-6 text-sm font-extralight">
						Oops! There is no data yet!
					</div>
				</div>
			</div>
		</Card>
	)
}