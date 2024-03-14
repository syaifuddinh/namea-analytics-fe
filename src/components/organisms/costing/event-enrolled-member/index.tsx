import TitleText from "@/components/atoms/text/title"
import MemberCard from "./member-card"
import { FinancialStatementImage1 } from "@/components/atoms/Icons"
import { FinancialStatementImage2 } from "@/components/atoms/Icons"
import { FinancialStatementImage5 } from "@/components/atoms/Icons"
import { FinancialStatementImage6 } from "@/components/atoms/Icons"

const members = [
	{
		"id": 1,
		"thumbnail": <FinancialStatementImage1 />,
		"name": "Agent Name",
		"date": "26 July 2023, 09:30AM",
		"claimed": "500.950.450"
	},
	{
		"id": 2,
		"thumbnail": <FinancialStatementImage1 />,
		"name": "Agent Name",
		"date": "26 July 2023, 09:30AM",
		"claimed": "500.950.450"
	},
	{
		"id": 3,
		"thumbnail": <FinancialStatementImage1 />,
		"name": "Agent Name",
		"date": "26 July 2023, 09:30AM",
		"claimed": "500.950.450"
	},
	{
		"id": 4,
		"thumbnail": <FinancialStatementImage1 />,
		"name": "Agent Name",
		"date": "26 July 2023, 09:30AM",
		"claimed": "500.950.450"
	},
	{
		"id": 5,
		"thumbnail": <FinancialStatementImage1 />,
		"name": "Agent Name",
		"date": "26 July 2023, 09:30AM",
		"claimed": "500.950.450"
	},
]

export default function EventEnrolledMember({ 
	className = ""
}: {
	className?: string
}) {
	return (
		<div className={className}>
			<TitleText>
				Enrolled Member
			</TitleText>

			<div className="grid grid-cols-1 gap-5 mt-5">
				{ members.map(item => (
					<MemberCard
						key={item.id}
						thumbnail={item.thumbnail}
						title={item.name}
						date={item.date}
						claimed={item.claimed}
					/>
				)) }
			</div>
		</div>
	)
}