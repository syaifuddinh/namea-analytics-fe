"use client";

import Submenu from "@/components/organisms/costing/submenu"
import Header from "@/components/organisms/costing/header"
import UploadCSV from "@/components/organisms/costing/upload-csv"
import CostingBreakdown from "@/components/organisms/costing/breakdown"
import GeneralCosting from "@/components/organisms/costing/general-costing"
import Comparison from "@/components/organisms/costing/comparison"
import Divider from "@/components/atoms/divider"

export default function CashflowPage() {
  return (
    <>
      <Submenu />
      <Divider className="absolute left-0" />
      <Header className="mt-8" />
      <UploadCSV className="mt-[1.5rem]" />
      <CostingBreakdown  className="mt-[1.5rem]" />
      <Comparison  className="mt-[1.5rem]" />
      <GeneralCosting  className="mt-[1.5rem]" />
    </>
  );
}
