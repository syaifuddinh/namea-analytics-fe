"use client";

import UploadCSV from "@/components/organisms/costing/upload-csv"
import CostingBreakdown from "@/components/organisms/costing/breakdown"
import GeneralCosting from "@/components/organisms/costing/general-costing"
import Comparison from "@/components/organisms/costing/comparison"
import Header from "@/components/organisms/costing/header"
import CostingLayout from "@/components/templates/costing-layout"

export default function CashflowPage() {
  return (
    <CostingLayout activeMenu="operational-costing" >
      <Header />
      <UploadCSV
      	className="mt-5"
      />
      <CostingBreakdown
      	title="2023 Yearly Costing Breakdown"
      	className="mt-[3.25rem]"
      />
      <Comparison  className="mt-[3.75rem]" />
      <GeneralCosting  className="mt-[3.75rem]" />
    </CostingLayout>
  );
}
