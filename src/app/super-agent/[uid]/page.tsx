"use client";
import {
  IconAdd,
  IconChevronRight,
  IconChevronDown,
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
import SelectInput from "@/components/atoms/input/select";
import Button from "@/components/atoms/button";

export default function SuperAgentDetail() {
  //   const lang = await getDictionary();
  const [search, setSearch] = useState<string>("");
  const dataAgent = dummyListSuperAgent[1];

  return (
    <>
      <div className="dashboard_header pb-[20px] flex flex-col md:flex-row gap-3 md:items-center mt-[44px] justify-between">
        <div className="dashboard_header_title flex items-center">
          <div className="flex flex-row items-center justify-center self-center border border-gray-1 bg-base-bg3 rounded-md px-[8px] py-[0.125rem]">
            <div className="text-gray-6 lg:text-xs font-extralight">
              Super Agent
            </div>
            <IconChevronRight size={IconSize.sm} className="mx-[2px]" />
            <div className="text-gray-0 lg:text-xs font-extralight">
              Details
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col border border-gray-1 rounded-2xl bg-base-bg2 overflow-hidden mb-5">
        <div className="flex flex-1 flex-col border-t border-b border-gray-1 mt-[4px] bg-base-bg5 rounded-t-xl">
          {dataAgent.rank <= 5 ? (
            <div className="max-w-max text-xs text-rank py-[2px] px-[10px] bg-bg-rank rounded-tl-xl rounded-br-md">
              Top {dataAgent.rank}
            </div>
          ) : (
            <></>
          )}
          <div
            className={clsx(
              "flex flex-1 flex-row px-[1.125rem] pb-[1.125rem] items-center",
              dataAgent.rank > 5 && "pt-[18px]"
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
              <div className="w-[160px] text-gray-10 text-sm mr-[0.125rem] font-light">
                {dataAgent.nameAgent}
              </div>
            </div>
            <div className="border-l border-l-gray-1 h-5" />
            <div className="flex flex-1 flex-row items-center pl-[46px] gap-16">
              <div className="flex flex-col">
                <div className="text-gray-6 text-sm mb-1 font-extralight">
                  Total Agent
                </div>
                <div className="text-gray-10 text-sm font-light">
                  {dataAgent.totalAgent}
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-gray-6 text-sm mb-1 font-extralight">
                  Total Profit
                </div>
                <div className="flex flex-row items-center text-gray-10 text-sm font-light">
                  Rp{dataAgent.totalProfit}
                  <div className="text-gray-6">,00</div>
                </div>
              </div>
              <button className="flex flex-row rounded-md border border-gray-9 bg-checkbox items-center pl-[10px] pr-[2px] w-[147px] h-[28px]">
                <div
                  className={clsx(
                    "bg-dot-blue h-2 w-2 rounded-full",
                    dataAgent.status === "Active"
                      ? "bg-dot-blue"
                      : dataAgent.status === "In Progress"
                      ? "bg-warning"
                      : "bg-danger-medium"
                  )}
                />
                <div className="text-left text-gray-0 text-sm py-[6px] pl-2 font-extralight">
                  {dataAgent.status}
                </div>
                <div className="flex flex-1 justify-end">
                  <IconChevronDown className="!w-[1.188rem] !h-[1.15rem]" />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-1 p-5 items-center">
          <div className="flex flex-1 text-gray-10 text-base font-light">
            Agents ({dataAgent.totalAgent})
          </div>
          <div className="flex flex-row flex-1 items-center border border-gray-1 bg-base-bg3 rounded-md p-2 mr-[0.75rem] max-h-[2.25rem]">
            <IconSearch className="!w-[1.313rem] !h-[1.5rem]" />
            <input
              type="text"
              name={"Search"}
              className={
                "ml-[0.5rem] bg-transparent border-0 text-gray-6 lg:text-sm w-full outline-none"
              }
              style={{ fontWeight: 200 }}
              placeholder={"Search super agent by name or code..."}
              onChange={(evt: any) => setSearch(evt)}
            />
          </div>

          <SelectInput
            placeholder="All Status"
            className="!mr-[0.75rem] !pr-1"
            placeholderClassName="w-[86px]"
            iconStyle="!w-[1.313rem] !h-[1.5rem]"
          />

          <Button variant="default" paddingR="pr-[1rem]">
            <IconAdd className="!w-[1.25rem] !h-[1.25rem] mr-1" />
            <div>Create Agent</div>
          </Button>
        </div>

        <div className="p-5 flex flex-row gap-[1rem] border-b border-base-bg3">
          <CardDashboardDetail
            icon={"/images/total-agent.png"}
            value={"875"}
            placeholder={"Total Agent"}
          />
          <CardDashboardDetail
            icon={"/images/total-profit.png"}
            value={"Rp500.950.450"}
            placeholder={"Total Profit"}
          />
          <CardDashboardDetail
            icon={"/images/total-active-agent.png"}
            value={"640"}
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
