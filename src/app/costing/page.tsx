"use client";

import Submenu from "@/components/organisms/costing/submenu"
import Header from "@/components/organisms/costing/header"
import Divider from "@/components/atoms/divider"

export default function CashflowPage() {
  return (
    <>
      <Submenu />
      <Divider className="absolute left-0" />
      <Header className="mt-8" />
    </>
  );
}
