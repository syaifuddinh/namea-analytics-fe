import DatePeriodInput from "@/components/atoms/input/date-period"
import AgentCard from "./agent-card"
import PlatformCard from "./platform-card"
import TitleText from "@/components/atoms/text/title"

const mostSpentAgents = [
	{
		"id": 1,
		"title": "PLATFORM 1",
		"subtitle": "Top 1",
		"balance": "500.950.450"
	},
	{
		"id": 2,
		"title": "PLATFORM 2",
		"subtitle": "Top 2",
		"balance": "500.950.450"
	},
	{
		"id": 3,
		"title": "PLATFORM 3",
		"subtitle": "Top 3",
		"balance": "500.950.450"
	}
]


const leastSpentAgents = [
	{
		"id": 1,
		"title": "PLATFORM 4",
		"subtitle": "Top 1",
		"balance": "500.950.450"
	},
	{
		"id": 2,
		"title": "PLATFORM 5",
		"subtitle": "Top 2",
		"balance": "500.950.450"
	},
	{
		"id": 3,
		"title": "PLATFORM 6",
		"subtitle": "Top 3",
		"balance": "500.950.450"
	}
]

export default function TrendAnalysis({
	className
}) {
	return (
		<div className={`${className}`}>
			<div className="flex gap-2 flex-col md:flex-row justify-between md:items-center">
				<TitleText>
					Trend Analysis
				</TitleText>

				<DatePeriodInput />
			</div>

			<div className="grid lg:grid-cols-2 grid-cols-1 mt-5 gap-5">
				<AgentCard
					title="Most Spent Agents"
					className="flex flex-col py-5 px-[1.125rem]  gap-4"
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