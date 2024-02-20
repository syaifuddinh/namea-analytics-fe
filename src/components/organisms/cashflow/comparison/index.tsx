import Card from "@/components/atoms/card"
import Wrapper from "./wrapper"
import CalendarInput from "@/components/atoms/input/calendar"
import PriceTag from "./price-tag"
import Divider from "@/components/atoms/divider"

const Header = () => {
	return (
		<div className="card_header pt-5 relative max-h-[76px] min-h-[76px]">
			<div className="text-[var(--Gray10)] text-base font-light leading-6 ">
				Cash Flow Comparison
			</div>
			
			<div
				className="mt-[4px] text-sm font-extralight leading-5 text-[var(--Gray6)]"
			>
				Record your ideas and to-do’s easily, so you never miss a thing.
			</div>
		</div>	
	)
}

export default function Comparison({
	className
}) {
	return (
		<Card
			headerElement={<Header />}
			className={className}
			isDividerVisible={false}
		>
			<div className="py-4">
				<Wrapper className="mx-4">
					<CalendarInput />
					
					<PriceTag
						title="Cash Balance"
						price="694.354.766"
						variant="default"
					/>

					<PriceTag
						title="Outstanding Debt"
						price="694.354.766"
						variant="danger"
					/>
				</Wrapper>

				<div className="comparison-divider flex justify-center items-center my-6">
					<Divider style="dashed" />
					<span className="comparison-divider_label font-extralight text-sm leading-5 text-gray-4 mx-2">
						and
					</span>
					<Divider style="dashed" />
				</div>

				<Wrapper className="mx-4">
					<CalendarInput />
					
					<PriceTag
						title="Cash Balance"
						price="694.354.766"
						variant="default"
					/>

					<PriceTag
						title="Outstanding Debt"
						price="694.354.766"
						variant="danger"
					/>
				</Wrapper>
			</div>
		</Card>
	)
}