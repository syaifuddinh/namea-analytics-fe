"use client";

import UploadCSV from "@/components/organisms/costing/upload-csv"
import CostingBreakdown from "@/components/organisms/costing/breakdown"
import MonthlyExpense from "@/components/organisms/costing/monthly-expense"
import Header from "@/components/organisms/costing/header"
import TrendAnalysis from "@/components/organisms/costing/trend-analysis"
import PromotionalCostingTab from "@/components/organisms/costing/promotional-costing-tab"
import CostingLayout from "@/components/templates/costing-layout"
import FrequencyInput from "@/components/molecules/input/frequency"
import Divider from "@/components/atoms/divider"

export default function PromotionalCostingPage() {
  return (
    <CostingLayout activeMenu="promotional-costing" >
    	<PromotionalCostingTab />
    	<Header className="mt-8" />
    	<UploadCSV className="mt-5" />
        <Divider className="mt-5" />
    	<CostingBreakdown
    		title="Total Pengeluaran Lomba"
    		className="mt-8"
            sideElement={
                <FrequencyInput
                    variant="monthly-daily"
                    width="137px"
                />
            }
    	/>
        <TrendAnalysis className="mt-[3.25rem]" />
        <MonthlyExpense className="mt-[93px]" />
    </CostingLayout>
  );
}
