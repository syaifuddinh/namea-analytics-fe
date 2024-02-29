import Card from "@/components/atoms/card"

const Header = ({ title }) => (
	<div className="font-light text-gray-10 h-[64px] flex items-center px-5 bg-base-bg5 border-y border-base-bg3 rounded-t-[12px]">
		{ title }
	</div>
) 

export default function AgentCard({ children, title, className = "" }) {

	return (
		<Card
			headerElement={<Header title={title} />}
			isDividerVisible={false}
			isUsePaddingBottom={false}
		>
			<div className={className}>
				{ children }
			</div>
		</Card>
	)
}