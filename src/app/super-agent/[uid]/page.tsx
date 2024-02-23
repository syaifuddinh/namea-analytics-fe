"use client";
import {
  IconAdd,
  IconChevronRight,
  IconDropdown,
  IconSearch,
  IconSize,
} from "@/components/atoms/Icons";
import {
  CardDashboardDetail,
  CardListAgent,
} from "@/components/molecules/Card/SuperAgent";
import { Pagination } from "@/components/molecules/Footer/Pagination";
import dummyListAgent from "@/data/dummyListAgent.json";
import dummyListSuperAgent from "@/data/dummyListSuperAgent.json";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import SelectInput from "@/components/atoms/input/select"

export default function SuperAgentDetail() {
  //   const lang = await getDictionary();
  const [search, setSearch] = useState<string>("");
  const dataAgent = dummyListSuperAgent[0];

  return (
    <>
      <div className="dashboard_header pb-[20px] flex flex-col md:flex-row gap-3 md:items-center mt-[44px] justify-between">
        <div className="dashboard_header_title flex items-center">
          <div className="flex flex-row items-center justify-center self-center border border-gray-1 bg-base-bg3 rounded-md px-[8px] py-1">
            <div className="text-gray-6 lg:text-xs">Super Agent</div>
            <IconChevronRight size={IconSize.sm} className="mx-[6px]" />
            <div className="text-gray-0 lg:text-xs">Details</div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col border border-gray-1 rounded-2xl bg-base-bg2 overflow-hidden mb-5">
        <div className="flex flex-1 flex-col border-t border-b border-gray-1 mt-[6px] bg-base-bg5 rounded-t-xl">
          {dataAgent.rank <= 5 ? (
            <div className="max-w-max text-xs text-rank py-[2px] px-[10px] bg-bg-rank rounded-tl-xl rounded-br-md">
              Top {dataAgent.rank}
            </div>
          ) : (
            <></>
          )}
          <div
            className={clsx(
              "flex flex-1 flex-row px-5 pb-5  divide-x divide-gray-1 items-center",
              dataAgent.rank > 5 ? "pt-5" : "pt-[2px]"
            )}
          >
            <div className="flex flex-row items-center">
              <Image
                src={dataAgent.image}
                alt="super agent icon"
                width={40}
                height={40}
              />
              <div className="text-gray-10 text-xs py-1 px-2 mx-3 bg-base-bg3 rounded-3xl">
                {dataAgent.codeAgent}
              </div>
              <div className="w-[160px] text-gray-10 text-sm mr-6">
                {dataAgent.nameAgent}
              </div>
            </div>
            <div className="flex flex-1 flex-row items-center pl-12 gap-16">
              <div className="flex flex-col">
                <div className="text-gray-6 text-sm">Total Agent</div>
                <div className="text-gray-10 text-sm">
                  {dataAgent.totalAgent}
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-gray-6 text-sm">Total Profit</div>
                <div className="text-gray-10 text-sm">
                  Rp{dataAgent.totalProfit}
                </div>
              </div>
              <button className="flex flex-row rounded-md border border-gray-4 bg-checkbox items-center px-[10px]">
                <div
                  className={clsx(
                    "bg-dot-blue h-2 w-2 rounded-full",
                    dataAgent.status === "Active"
                      ? "bg-dot-blue"
                      : dataAgent.status === "In Process"
                      ? "bg-warning"
                      : "bg-danger-medium"
                  )}
                />
                <div className="text-left w-[97px] text-gray-0 text-sm py-[6px] pl-2 mr-5">
                  {dataAgent.status}
                </div>
                <div className="flex flex-1 justify-end">
                  <IconDropdown />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-1 p-5 items-center">
          <div className="flex flex-1 text-gray-10 text-base">
            Agents ({dataAgent.totalAgent})
          </div>
          <div className="flex flex-row flex-1 items-center border border-gray-1 bg-base-bg3 rounded-md p-2 mr-2 max-h-[2.25rem]">
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

          <SelectInput
              placeholder="All Status"
          />

          <button className="flex flex-row rounded-md border border-dot-blue bg-checkbox items-center pr-4 pl-3 py-2 max-h-[2.25rem]">
            <IconAdd />
            <div className="text-gray-10 text-sm">Create Agent</div>
          </button>
        </div>
        <div className="p-5 flex flex-row gap-3 border-b border-base-bg3">
          <CardDashboardDetail
            icon={"/images/total-agent.png"}
            label={"875"}
            placeholder={"Total Agent"}
          />
          <CardDashboardDetail
            icon={"/images/total-profit.png"}
            label={"Rp500.950.450,00"}
            placeholder={"Total Profit"}
          />
          <CardDashboardDetail
            icon={"/images/total-active-agent.png"}
            label={"640"}
            placeholder={"Total Active Agent"}
          />
        </div>

        <div className="flex flex-col mx-5 mt-5">
          {dummyListAgent.map((item) => {
            return (
              <CardListAgent
                key={`list-agent-${item.id}`}
                rank={item.rank}
                image={item.image}
                codeAgent={item.codeAgent}
                nameAgent={item.nameAgent}
                bitcoin={item.bitcoin}
                ethereum={item.ethereum}
                totalTurnOver={item.totalTurnOver}
                totalProfit={item.totalProfit}
                status={item.status}
              />
            );
          })}
        </div>
        <Pagination
          className="px-5 bg-base-bg5"
          totalAgent={dummyListAgent.length}
        />
      </div>
    </>
  );
}
