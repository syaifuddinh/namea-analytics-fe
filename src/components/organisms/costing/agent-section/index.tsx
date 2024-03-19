import AgentCard from "./agent-card"
import { FinancialStatementImage1 } from "@/components/atoms/Icons"

const items = [
	{
		"id": 1,
		"title": "Agent Name",
		"icon": <FinancialStatementImage1 />,
		"subtitle": "Top 1",
		"activeEvent": "24",
		"revenue": "24.600.590"
	},
	{
		"id": 2,
		"title": "Agent Name",
		"icon": <FinancialStatementImage1 />,
		"subtitle": "Top 2",
		"activeEvent": "24",
		"revenue": "24.600.590"
	},
	{
		"id": 3,
		"title": "Agent Name",
		"icon": <FinancialStatementImage1 />,
		"subtitle": "Top 3",
		"activeEvent": "24",
		"revenue": "24.600.590"
	},
	{
		"id": 4,
		"title": "Agent Name",
		"icon": <FinancialStatementImage1 />,
		"subtitle": "Top 4",
		"activeEvent": "24",
		"revenue": "24.600.590"
	},
	{
		"id": 5,
		"title": "Agent Name",
		"icon": <FinancialStatementImage1 />,
		"subtitle": "Top 5",
		"activeEvent": "24",
		"revenue": "24.600.590"
	},
	{
		"id": 6,
		"title": "Agent Name",
		"icon": <FinancialStatementImage1 />,
		"subtitle": "Top 6",
		"activeEvent": "24",
		"revenue": "24.600.590"
	},
	{
		"id": 7,
		"title": "Agent Name",
		"icon": <FinancialStatementImage1 />,
		"subtitle": "Top 7",
		"activeEvent": "24",
		"revenue": "24.600.590"
	},
	{
		"id": 8,
		"title": "Agent Name",
		"icon": <FinancialStatementImage1 />,
		"subtitle": "Top 8",
		"activeEvent": "24",
		"revenue": "24.600.590"
	},
	{
		"id": 9,
		"title": "Agent Name",
		"icon": <FinancialStatementImage1 />,
		"subtitle": "Top 9",
		"activeEvent": "24",
		"revenue": "24.600.590"
	}
]

export default function AgentSection({ 
	className = "" 
}: {
	className?: string
}) {
	return (
		<div className={className}>
			<div className="font-light text-lg text-gray-10">
				All Agent				
			</div>

			<div className="grid mt-[18px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">				
				{ items.map(item => (
					<AgentCard
						key={item.id}
						title={item.title}
						icon={item.icon}
						subtitle={item.subtitle}
						activeEvent={item.activeEvent}
						revenue={item.revenue}
					/>
				)) }
			</div>
		</div>
	)
}