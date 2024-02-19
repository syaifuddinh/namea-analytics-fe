"use client";

import Header from "@/components/organisms/cashflow/header"
import UploadCSV from "@/components/organisms/cashflow/upload-csv"
import CashflowOverviewCard from "@/components/organisms/dashboard/cashflow-overview-card";
import Comparison from "@/components/organisms/cashflow/comparison";
import FinancialStatement from "@/components/organisms/cashflow/financial-statement";
import Divider from "@/components/atoms/divider"

export default function CashflowPage() {
  return (
    <>
      <Header className="mt-[2rem]" />
      <UploadCSV className="mt-[2rem]" />
      <Divider className="mt-6" />
      <CashflowOverviewCard className="mt-[2rem]" />
      <Comparison className="mt-[2rem]" />
      <FinancialStatement className="mt-[2rem]" />
    </>
  );
}
