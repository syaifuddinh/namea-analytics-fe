"use client";

import Header from "@/components/organisms/cashflow/header"
import UploadCSV from "@/components/organisms/cashflow/upload-csv"
import CashflowOverviewCard from "@/components/organisms/dashboard/cashflow-overview-card";
import Divider from "@/components/atoms/divider"

export default function CashflowPage() {
  return (
    <>
      <Header className="mt-[2rem]" />
      <UploadCSV className="mt-[2rem]" />
      <Divider className="mt-6" />
      <CashflowOverviewCard className="mt-[2rem]" />
    </>
  );
}
