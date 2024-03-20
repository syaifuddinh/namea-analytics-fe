import EventCard from "@/components/atoms/card/event"
import Button from "@/components/atoms/button"

const items = [
	{
		"id": 1,
		"title": "Monthly Cashback 15%",
		"thumbnail": "/images/costing/event-thumbnail.png",
		"description": "Bonus Cashback",
		"period": "20 Oct 2023 to 27 Oct 2023",
		"revenue": "24.600.590"
	},
	{
		"id": 2,
		"title": "Monthly Cashback 15%",
		"thumbnail": "/images/costing/event-thumbnail.png",
		"description": "Bonus Cashback",
		"period": "20 Oct 2023 to 27 Oct 2023",
		"revenue": "24.600.590"
	},
	{
		"id": 3,
		"title": "Monthly Cashback 15%",
		"thumbnail": "/images/costing/event-thumbnail.png",
		"description": "Bonus Cashback",
		"period": "20 Oct 2023 to 27 Oct 2023",
		"revenue": "24.600.590"
	},
	{
		"id": 4,
		"title": "Monthly Cashback 15%",
		"thumbnail": "/images/costing/event-thumbnail.png",
		"description": "Bonus Cashback",
		"period": "20 Oct 2023 to 27 Oct 2023",
		"revenue": "24.600.590"
	},
	{
		"id": 5,
		"title": "Monthly Cashback 15%",
		"thumbnail": "/images/costing/event-thumbnail.png",
		"description": "Bonus Cashback",
		"period": "20 Oct 2023 to 27 Oct 2023",
		"revenue": "24.600.590"
	},
]

export default function RecentCreatedEvent({ 
	className = "" 
}: {
	className?: string
}) {
	return (
		<div className={className}>
			<div className="flex flex-col md:flex-row gap-2 justify-between md:items-center">
				<div className="font-light text-lg text-gray-10">
					Recent Created Event				
				</div>

				<Button variant="link">
					View All Events
				</Button>
			</div>

			<div className="mt-5 flex flex-col gap-5">
				
				{ items.map(item => (
					<EventCard
						key={item.id}
						thumbnail={item.thumbnail}
						title={item.title}
						description={item.description}
						period={item.period}
						revenue={item.revenue}
					/>
				)) }
			</div>
		</div>
	)
}