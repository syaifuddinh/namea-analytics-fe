"use client";

import AgentSection from "@/components/organisms/costing/agent-section"
import RecentCreatedEvent from "@/components/organisms/costing/recent-created-event"
import TopCategory from "@/components/organisms/costing/top-category"
import Header from "@/components/organisms/costing/header"
import TrendAnalysis from "@/components/organisms/costing/trend-analysis"
import PromotionalCostingTab from "@/components/organisms/costing/promotional-costing-tab"
import CostingLayout from "@/components/templates/costing-layout"
import FrequencyInput from "@/components/molecules/input/frequency"
import HeadlineCard from "@/components/atoms/card/headline"
import MutationLabel from "@/components/atoms/mutation-label"
import MoneyText from "@/components/atoms/text/money"

const reports = [
    {
        "title": "Total Revenue",
        "content": <MoneyText prefix="+">500.950.450</MoneyText>,
        "mutation": "23.8% (+24)",
        "mutationVariant": "primary"
    },
    {
        "title": "Active Event",
        "content": "42/64",
        "mutation": "-16.5% (-8)",
        "mutationVariant": "danger"
    },
    {
        "title": "Avg. conversion rate",
        "content": "45%",
        "mutation": "23.8% (+24)",
        "mutationVariant": "primary"
    },
    {
        "title": "Avg. bounce rate",
        "content": "72.5%",
        "mutation": "-16.5% (-8)",
        "mutationVariant": "danger"
    }
]

export default function PromotionalCostingPage() {
    return (
        <CostingLayout activeMenu="promotional-costing" >
        	<PromotionalCostingTab
                value="event"
            />

            <div className="mt-8 flex flex-col lg:flex-row gap-5">
                { reports.map(report => (
                	<HeadlineCard key={report.title}>
                		<div className="p-5">
    	            		<div className="text-gray-6 text-sm font-extralight">
    	            			{ report.title }
    	            		</div>

                            <div className="mt-1 font-light text-gray-10">
                                { report.content }
                            </div>

    	            		<MutationLabel
    	            			variant={report.mutationVariant}
    	            			value={report.mutation}
    	            			className="mt-4"
    	            		/>
                		</div>
                	</HeadlineCard>
                )) }
            </div>

            <AgentSection className="mt-[60px]" />
            <RecentCreatedEvent className="mt-[60px]" />
            <TopCategory className="mt-[60px]" />
        </CostingLayout>
    );
}
