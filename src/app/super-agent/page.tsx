"use client";
import { Calendar } from "@/components/atoms/calender";
import { InputSearch } from "@/components/atoms/search";
import {
  CardDashboardSA,
  CardListSuperAgent,
} from "@/components/molecules/Card/SuperAgent";
import { Pagination } from "@/components/molecules/Footer/Pagination";
import { Header } from "@/components/molecules/Header";
import dummyListSuperAgent from "@/data/dummyListSuperAgent.json";
import { useState } from "react";

export default function PageSuperAgent() {
  //   const lang = await getDictionary();
  const [search, setSearch] = useState<string>("");

  return (
    <>
      <Header
        icon="/images/super-agent.png"
        placeholder="Super Agent"
        subPlaceholder="Show a comprehensive overview of data from different sources."
        className="w-[47%]"
        divider
      >
        <div className="flex flex-row flex-1 items-center">
          <InputSearch
            name={"SuperAgent"}
            placeholder="Search super agent by name or code..."
            onChange={(value) => setSearch(value)}
            className="w-[375px] h-8 mr-2"
            className1="ml-1"
          />
          <Calendar className="w-[272px] h-8" />
        </div>
      </Header>

      <div className="mt-8 mb-10 flex flex-row gap-6">
        <CardDashboardSA
          icon={"/images/total-super-agent.png"}
          placeholder={"Total Super Agent"}
          value={"Rp500.950.450"}
          profit={true}
          percentage={"23.8% (+24)"}
        />
        <CardDashboardSA
          icon={"/images/total-active-super-agent.png"}
          placeholder={"Total Active Super Agent"}
          value={"Rp500.950.450"}
          profit={false}
          percentage={"16.5% (-8)"}
        />
        <CardDashboardSA
          icon={"/images/total-revenue.png"}
          placeholder={"Total Revenue"}
          value={"Rp500.950.450"}
          profit={true}
          percentage={"23.8% (+24)"}
        />
      </div>
      {dummyListSuperAgent.map((item) => {
        return (
          <CardListSuperAgent
            key={`super-agent-${item.id}`}
            id={item.id}
            rank={item.rank}
            image={item.image}
            codeAgent={item.codeAgent}
            nameAgent={item.nameAgent}
            totalAgent={item.totalAgent}
            totalProfit={item.totalProfit}
            status={item.status}
          />
        );
      })}
      <Pagination className="mt-5" totalAgent={dummyListSuperAgent.length} />
    </>
  );
}
