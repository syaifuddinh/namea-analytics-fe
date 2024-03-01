import DatePeriodInput from "@/components/atoms/input/date-period"
import AgentCard from "./agent-card"
import PlatformCard from "./platform-card"

const mostSpentAgents = [
	{
		"id": 1,
		"title": "Platform 1",
		"subtitle": "Top 1",
		"balance": "500.950.450"
	},
	{
		"id": 2,
		"title": "Platform 2",
		"subtitle": "Top 2",
		"balance": "500.950.450"
	},
	{
		"id": 3,
		"title": "Platform 3",
		"subtitle": "Top 3",
		"balance": "500.950.450"
	}
]


const leastSpentAgents = [
	{
		"id": 1,
		"title": "Platform 4",
		"subtitle": "Top 1",
		"balance": "500.950.450"
	},
	{
		"id": 2,
		"title": "Platform 5",
		"subtitle": "Top 2",
		"balance": "500.950.450"
	},
	{
		"id": 3,
		"title": "Platform 6",
		"subtitle": "Top 3",
		"balance": "500.950.450"
	}
]

export default function TrendAnalysis({
	className
}) {
	return (
		<div className={`${className}`}>
			<div className="flex justify-between items-center">
				<div className="trend-analysis_title font-light text-[18px] leading-[26px] text-gray-10">
					Trend Analysis
				</div>

				<DatePeriodInput />
			</div>

			<div className="flex mt-5 *:grow gap-5">
				<AgentCard
					title="Most Spent Agents"
					className="flex flex-col p-5 gap-4"
				>
					{ mostSpentAgents.map(item => (
						<PlatformCard
							key={item.id}
							title={item.title}
							subtitle={item.subtitle}
							balance={item.balance}
						/>
					)) }
				</AgentCard>

				<AgentCard
					title="Least Spent Agents"
					className="flex flex-col p-5 gap-4"
				>
					{ leastSpentAgents.map(item => (
						<PlatformCard
							key={item.id}
							title={item.title}
							subtitle={item.subtitle}
							balance={item.balance}
						/>
					)) }
				</AgentCard>
			</div>
		</div>
	)
}