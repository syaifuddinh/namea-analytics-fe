"use client";

import UploadCSV from "@/components/organisms/costing/upload-csv"
import CostingBreakdown from "@/components/organisms/costing/breakdown"
import GeneralCosting from "@/components/organisms/costing/general-costing"
import Comparison from "@/components/organisms/costing/comparison"
import Header from "@/components/organisms/costing/header"
import PromotionalCostingTab from "@/components/organisms/costing/promotional-costing-tab"
import CostingLayout from "@/components/templates/costing-layout"

export default function PromotionalCostingPage() {
  return (
    <CostingLayout activeMenu="promotional-costing" >
    	<PromotionalCostingTab />
    	<Header className="mt-8" />
    	<UploadCSV className="mt-5" />
    </CostingLayout>
  );
}
