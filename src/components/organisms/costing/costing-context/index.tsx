const items = [
	{
		"id": 1,
		"title": "View Details"
	},
	{
		"id": 2,
		"title": "Action 2"
	},
	{
		"id": 3,
		"title": "Action 3"
	}
]

export default function CostingContext({ 
	top, left }: {
	top: string,
	left: string
}) {
	return (
		<div
			className="border *:border-b *:border-base-bg3 last:*:border-0 min-w-[154px] rounded-lg overflow-hidden border-gray-1 bg-tooltip-background"
		>
			{ items.map(item => (
				<div key={item.id} className="h-[32px] flex items-center px-3 text-gray-6 text-xs font-light cursor-pointer">
					{ item.title }
				</div>
			)) }			
		</div>
	)
}