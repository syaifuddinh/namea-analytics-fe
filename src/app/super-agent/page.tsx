"use client";
import {
  IconArrowDown,
  IconArrowLeft,
  IconArrowRight,
  IconArrowUp,
  IconCalender,
  IconChevronRight,
  IconDropdown,
  IconSearch,
  IconSmallChevronDown,
} from "@/components/atoms/Icons";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import dummyDashboardSuperAgent from "@/data/dummyDashboardSuperAgent.json";
import dummyListSuperAgent from "@/data/dummyListSuperAgent.json";
import {
  CardDashboard,
  CardListAgent,
} from "@/components/molecules/Card/SuperAgent";
import { Pagination } from "@/components/molecules/Footer/Pagination";

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
          <div className="flex flex-row flex-1 items-center border border-gray-1 bg-base-bg3 rounded-md p-[6px] mr-2">
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
          <div className="flex flex-row gap-1 items-center border border-gray-1 bg-base-bg3 rounded-md p-[6px]">
            <IconCalender />
            <div className="text-gray-6 lg:text-sm">
              2 December - 20 December
            </div>
            <IconDropdown />
          </div>
        </div>
      </div>
      <div className="my-6 flex flex-row gap-3">
        {dummyDashboardSuperAgent.map((item) => {
          return (
            <CardDashboard
              key={`dashboard-agent-${item.id}`}
              icon={item.icon}
              label={item.label}
              nominal={item.label}
              revenue={item.revenue}
            />
          );
        })}
      </div>
      {dummyListSuperAgent.map((item) => {
        return (
          <CardListAgent
            key={`super-agent-${item.id}`}
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
      <Pagination totalAgent={dummyListSuperAgent.length} />
    </>
  );
}
