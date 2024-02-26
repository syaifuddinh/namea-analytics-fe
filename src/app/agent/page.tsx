"use client";
import {
  IconCalender,
  IconChevronRight,
  IconDropdown,
  IconSearch,
} from "@/components/atoms/Icons";
import { IconURL } from "@/components/atoms/Icons/Url";
import { CardOverview, CardStatus } from "@/components/molecules/Card";
import { CardDashboard } from "@/components/molecules/Card/Agent";
import { Header } from "@/components/molecules/Header";
import Panel from "@/components/molecules/panel";
import Comparison from "@/components/organisms/cashflow/comparison";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

export default function PageAgent() {
  //   const lang = await getDictionary();
  const [search, setSearch] = useState<string>("");

  return (
    <>
      <div className="flex flex-row flex-1 items-center mt-[44px]">
        <button className="flex flex-row rounded-md border border-gray-1 bg-checkbox items-center pl-[10px] pr-2 py-[2px] mr-[10px]">
          <Image
            src="/images/avatar_dummy.png"
            alt="super agent icon"
            width={20}
            height={20}
          />
          <div className="text-left text-gray-0 text-sm py-[2px] pl-2 mr-5 font-extralight">
            Website Name
          </div>
          <div className="flex flex-1 justify-end">
            <IconDropdown className={"w-[1.25rem h-[1.25rem]"} />
          </div>
        </button>
        <div className="flex flex-row flex-1 items-center border border-gray-1 bg-base-bg3 rounded-md px-[6px] py-[2px]">
          <IconSearch />
          <input
            type="text"
            name={"Search"}
            className={
              "ml-3 bg-transparent border-0 text-gray-6 lg:text-sm w-full outline-none"
            }
            style={{ fontWeight: 200 }}
            placeholder={"Search website or brands"}
            onChange={(evt: any) => setSearch(evt)}
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col border border-gray-1 rounded-2xl bg-base-bg2 overflow-hidden my-5">
        <div className="flex flex-1 flex-col border-t border-gray-1 mt-[6px] bg-base-bg5 rounded-t-xl">
          <div className="flex flex-1 p-5 items-center bg-gray-7 ">
            <div className="flex flex-row items-center bg-base-bg5 p-1 gap-1 rounded-[10px] border border-gray-9 text-sm text-gray-10">
              <button
                type="button"
                className="border border-gray-1 bg-base-bg3 py-[6px] px-3 rounded-md"
              >
                Overview
              </button>
              <button type="button" className="py-[6px] px-3 text-gray-6">
                Member List
              </button>
              <button type="button" className="py-[6px] px-3 text-gray-6">
                Event
              </button>
              <button type="button" className="py-[6px] px-3 text-gray-6">
                Data Analyst
              </button>
            </div>
          </div>
        </div>
        <div className="h-[10px] border-x border-x-gray-1 mx-5" />
        <div className="flex flex-row border-y border-y-gray-1 bg-base-bg5 mb-[6px] rounded-b-xl justify-between p-5">
          <div className="flex flex-row items-center">
            <div className="flex items-center mr-4">
              <Image
                src="/images/avatar_dummy.png"
                alt="super agent icon"
                width={40}
                height={40}
              />
            </div>
            <div className="text-gray-10 text-sm mr-6 font-light">
              Website Name
            </div>
            <div className="flex rounded-full flex-row bg-success-1 items-center pr-[10px] pl-2 py-[4px]">
              <div
                className={clsx(
                  "bg-dot-blue h-2 w-2 rounded-full border-[3px] border-dot-blue-border mr-2"
                )}
              />
              <div className="text-left text-success-10 text-xs font-extralight">
                Active
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center pr-[11px] pl-1 rounded-full border border-base-bg3 gap-2 max-h-max">
            <IconURL className="" />
            <div className="text-sm text-gray-6">https://binance.co</div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 border-b border-b-base-bg3" />

      <Header
        icon="/images/super-agent.png"
        placeholder="Overview"
        subPlaceholder="Show a comprehensive overview of data from different sources."
      >
        <div className="flex items-center">
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
      </Header>

      <CardOverview
        placeholder="Ethereum Revenue"
        subPlaceholder="Record your ideas and to-do’s easily, so you never miss a thing."
        renderContent={
          <>
            <div className="flex flex-row p-5 gap-2">
              <div className="w-[60%]">
                <Panel label="Bitcoin" value="50" variant="success" />
              </div>
              <div className="w-[40%]">
                <Panel label="Ethereum" value="25" variant="primary" />
              </div>
            </div>
            <div className="flex flex-1 flex-row border-t border-t-gray-1 bg-base-bg5 mb-[6px] rounded-b-xl p-5 gap-4">
              <CardDashboard
                placeholder={"Total Revenue"}
                label={"Rp500.950.450,00"}
                profit={true}
                percentage={"23.8% (+24)"}
              />
              <CardDashboard
                placeholder={"Ethereum Revenue"}
                label={"Rp245.300.685,00"}
                profit={false}
                percentage={"16.5% (-8)"}
              />
              <CardDashboard
                placeholder={"Total Turn Over"}
                label={"Rp500.950.450,00"}
                profit={true}
                percentage={"23.8% (+24)"}
              />
            </div>
          </>
        }
      />

      <CardOverview
        placeholder="Member Overview"
        subPlaceholder="Record your ideas and to-do’s easily, so you never miss a thing."
        className="flex-row justify-between"
        renderHeader={
          <div className="flex flex-row items-center pr-2 pl-3 py-2 rounded-lg border border-gray-1 bg-base-bg3 max-h-max">
            <div className="text-sm text-gray-6">View Member Analysis</div>
            <IconChevronRight />
          </div>
        }
        renderContent={
          <div className="grid grid-cols-3 border-t border-t-gray-1 bg-base-bg5 mb-[6px] rounded-b-xl p-5 gap-4">
            <CardDashboard
              placeholder={"Total Member"}
              label={"54,695"}
              profit={true}
              percentage={"23.8% (+24)"}
              desc={"compared to last year"}
            />
            <CardDashboard
              placeholder={"New Member"}
              label={"6,458"}
              profit={false}
              percentage={"16.5% (-8)"}
              desc={"compared to last year"}
            />
            <CardDashboard
              placeholder={"Active Member"}
              label={"24,396"}
              profit={true}
              percentage={"23.8% (+24)"}
              desc={"compared to last year"}
            />
            <CardDashboard
              placeholder={"Avg. Engangement Time"}
              label={"1hr 24min"}
              profit={false}
              percentage={"16.5% (-8)"}
              desc={"compared to last year"}
            />
            <CardDashboard
              placeholder={"Total Deposit"}
              label={"Rp500.950.450,00"}
              profit={true}
              percentage={"23.8% (+24)"}
              desc={"compared to last year"}
            />
            <CardDashboard
              placeholder={"Total Withdraw"}
              label={"Rp492.201.500,00"}
              profit={false}
              percentage={"16.5% (-8)"}
              desc={"compared to last year"}
            />
          </div>
        }
      />

      <CardOverview
        placeholder="Member Activity"
        renderContent={
          <>
            <div className="flex border-t border-t-gray-1 bg-base-bg5 p-[10px] gap-2 justify-end">
              <CardStatus placeholder="Active" className="bg-dot-blue" />
              <CardStatus placeholder="Withdraw" className="bg-dot-blue1" />
              <CardStatus placeholder="Login" className="bg-dot-blue2" />
            </div>

            <Comparison className="mt-[1.5rem]" />
          </>
        }
      />
    </>
  );
}
