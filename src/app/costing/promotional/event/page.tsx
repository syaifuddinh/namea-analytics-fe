"use client";

import UploadCSV from "@/components/organisms/costing/upload-csv"
import CostingBreakdown from "@/components/organisms/costing/breakdown"
import GeneralCosting from "@/components/organisms/costing/general-costing"
import Comparison from "@/components/organisms/costing/comparison"
import MonthlyExpense from "@/components/organisms/costing/monthly-expense"
import Header from "@/components/organisms/costing/header"
import TrendAnalysis from "@/components/organisms/costing/trend-analysis"
import PromotionalCostingTab from "@/components/organisms/costing/promotional-costing-tab"
import CostingLayout from "@/components/templates/costing-layout"
import FrequencyInput from "@/components/molecules/input/frequency"

export default function PromotionalCostingPage() {
    return (
        <CostingLayout activeMenu="promotional-costing" >
        	<PromotionalCostingTab
                value="event"
            />
        </CostingLayout>
    );
}
