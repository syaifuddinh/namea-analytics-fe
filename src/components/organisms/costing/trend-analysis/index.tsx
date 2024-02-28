import DatePeriodInput from "@/components/atoms/input/date-period"
import AgentCard from "./agent-card"

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

			<div className="flex">
				<AgentCard
					title="Most Spent Agents"
				>
					
				</AgentCard>

				<AgentCard
					title="Least Spent Agents"
				>
					
				</AgentCard>
			</div>
		</div>
	)
}