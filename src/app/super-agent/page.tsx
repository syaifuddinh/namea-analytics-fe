"use client";
import {
  IconCalender,
  IconDropdown,
  IconSearch,
} from "@/components/atoms/Icons";
import {
  CardDashboard,
  CardListSuperAgent,
} from "@/components/molecules/Card/SuperAgent";
import { Pagination } from "@/components/molecules/Footer/Pagination";
import dummyListSuperAgent from "@/data/dummyListSuperAgent.json";
import Image from "next/image";
import { useState } from "react";

export default function PageSuperAgent() {
  //   const lang = await getDictionary();
  const [search, setSearch] = useState<string>("");

  return (
    <>
      <div className="dashboard_header pb-[20px] flex flex-col md:flex-row gap-3 md:items-center mt-[44px] justify-between border-b border-b-base-border-color">
        <div className="dashboard_header_title flex w-1/2 items-center">
          <div className="dashboard_header_thumbnail mr-[16px] ">
            <Image
              src="/images/super-agent.png"
              alt="super agent icon"
              width={40}
              height={40}
            />
          </div>
          <div className="dashboard_header_content">
            <div className="text-[1.063rem] font-light leading-[26px] tracking-[0.7px] text-[var(--white-theme-color)]">
              Super Agent
            </div>
            <div className="text-gray-6 text-sm leading-5 font-extralight mt-[2px] tracking-[0.06px]">
              Show a comprehensive overview of data from different sources.
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-1 items-center">
          <div className="flex flex-row flex-1 items-center border border-gray-1 bg-base-bg3 rounded-md px-[6px] py-[2px] mr-2">
            <IconSearch />
            <input
              type="text"
              name={"Search"}
              className={
                "ml-3 bg-transparent border-0 text-gray-6 lg:text-sm w-full outline-none"
              }
              placeholder={"Search super agent by name or code..."}
              onChange={(evt: any) => setSearch(evt)}
            />
          </div>
          <div className="flex flex-row items-center border border-gray-1 bg-base-bg3 rounded-md pl-2 pr-[6px] py-[2px]">
            <IconCalender className="pr-1" />
            <div className="text-gray-6 lg:text-sm font-extralight pr-6">
              2 December - 20 December
            </div>
            <div className="flex flex-1 justify-end">
              <IconDropdown />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 mb-10 flex flex-row gap-3">
        <CardDashboard
          icon={"/images/total-super-agent.png"}
          placeholder={"Total Super Agent"}
          label={"Rp500.950.450,00"}
          revenueProfit={true}
          revenuePercentage={"23.8% (+24)"}
        />
        <CardDashboard
          icon={"/images/total-active-super-agent.png"}
          placeholder={"Total Active Super Agent"}
          label={"Rp500.950.450,00"}
          revenueProfit={false}
          revenuePercentage={"16.5% (-8)"}
        />
        <CardDashboard
          icon={"/images/total-revenue.png"}
          placeholder={"Total Revenue"}
          label={"Rp500.950.450,00"}
          revenueProfit={true}
          revenuePercentage={"23.8% (+24)"}
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
