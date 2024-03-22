"use client"

import Button from "@/components/atoms/button"
import { CardEvent } from "@/components/molecules/Card/Agent";
import { useState } from "react"

const items = [
	{
		"id": 1,
		"title": "Monthly Cashback 15%",
		"thumbnail": "/images/costing/event-thumbnail.png",
		"description": "Bonus Cashback",
		"period": "20 Oct 2023 to 27 Oct 2023",
		"revenue": "Rp24.600.590",
		"status": "Active",
		"detailEvent": {
	      "createdBy": "Agent Name",
	      "promotionType": "Agent Name",
	      "include": "YES",
	      "bonusAmount": "100%",
	      "turnoverMultiplier": "7",
	      "minDeposit": "Rp56.235.459,00",
	      "maxDeposit": "Rp500.950.450,00",
	      "minBonus": "Rp8.000.000,00",
	      "maxBonus": "Rp24.600.590,00"
	    }
	},
	{
		"id": 2,
		"title": "Monthly Cashback 15%",
		"thumbnail": "/images/costing/event-thumbnail.png",
		"description": "Bonus Cashback",
		"period": "20 Oct 2023 to 27 Oct 2023",
		"revenue": "Rp24.600.590",
		"status": "Active",
		"detailEvent": {
	      "createdBy": "Agent Name",
	      "promotionType": "Agent Name",
	      "include": "YES",
	      "bonusAmount": "100%",
	      "turnoverMultiplier": "7",
	      "minDeposit": "Rp56.235.459,00",
	      "maxDeposit": "Rp500.950.450,00",
	      "minBonus": "Rp8.000.000,00",
	      "maxBonus": "Rp24.600.590,00"
	    }
	},
	{
		"id": 3,
		"title": "Monthly Cashback 15%",
		"thumbnail": "/images/costing/event-thumbnail.png",
		"description": "Bonus Cashback",
		"period": "20 Oct 2023 to 27 Oct 2023",
		"revenue": "Rp24.600.590",
		"status": "Active",
		"detailEvent": {
	      "createdBy": "Agent Name",
	      "promotionType": "Agent Name",
	      "include": "YES",
	      "bonusAmount": "100%",
	      "turnoverMultiplier": "7",
	      "minDeposit": "Rp56.235.459,00",
	      "maxDeposit": "Rp500.950.450,00",
	      "minBonus": "Rp8.000.000,00",
	      "maxBonus": "Rp24.600.590,00"
	    }
	},
	{
		"id": 4,
		"title": "Monthly Cashback 15%",
		"thumbnail": "/images/costing/event-thumbnail.png",
		"description": "Bonus Cashback",
		"period": "20 Oct 2023 to 27 Oct 2023",
		"revenue": "Rp24.600.590",
		"status": "Active",
		"detailEvent": {
	      "createdBy": "Agent Name",
	      "promotionType": "Agent Name",
	      "include": "YES",
	      "bonusAmount": "100%",
	      "turnoverMultiplier": "7",
	      "minDeposit": "Rp56.235.459,00",
	      "maxDeposit": "Rp500.950.450,00",
	      "minBonus": "Rp8.000.000,00",
	      "maxBonus": "Rp24.600.590,00"
	    }
	},
	{
		"id": 5,
		"title": "Monthly Cashback 15%",
		"thumbnail": "/images/costing/event-thumbnail.png",
		"description": "Bonus Cashback",
		"period": "20 Oct 2023 to 27 Oct 2023",
		"revenue": "Rp24.600.590",
		"status": "Active",
		"detailEvent": {
	      "createdBy": "Agent Name",
	      "promotionType": "Agent Name",
	      "include": "YES",
	      "bonusAmount": "100%",
	      "turnoverMultiplier": "7",
	      "minDeposit": "Rp56.235.459,00",
	      "maxDeposit": "Rp500.950.450,00",
	      "minBonus": "Rp8.000.000,00",
	      "maxBonus": "Rp24.600.590,00"
	    }
	},
]

export default function RecentCreatedEvent({ 
	className = "" 
}: {
	className?: string
}) {
	const [activeEventId, setActiveEventId] = useState(null)

	const onToggleEvent = id => {
		setActiveEventId(
			id === activeEventId ? null : id 
		)
	}

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

			<div className="mt-5 flex flex-col">
				
				{ items.map(item => (
					<CardEvent
						key={item.id}
						id={item.id}
						currentId={activeEventId}
						placeholder={item.title}
						desc={item.description}
						promoPeriod={item.period}
						revenueGenerated={item.revenue}
						statusEvent={item.status}
						showDetail={true}
						detailEvent={item.detailEvent}
						onPressShow={() => onToggleEvent(item.id)}
					/>
				)) }
			</div>
		</div>
	)
}