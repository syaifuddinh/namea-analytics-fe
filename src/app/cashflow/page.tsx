"use client";

import Header from "@/components/organisms/cashflow/header"
import UploadCSV from "@/components/organisms/cashflow/upload-csv"

export default function CashflowPage() {
  return (
    <>
      <Header className="mt-[2rem]" />
      <UploadCSV className="mt-[2rem]" />
    </>
  );
}
