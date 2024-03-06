"use client";
import {
  IconChevronDown,
  IconSmallChevronDown,
  IconThreeDotVertical,
} from "@/components/atoms/Icons";
import { CardOverview } from "@/components/molecules/Card";
import { CardDashboard } from "@/components/molecules/Card/Agent";
import { Header } from "@/components/molecules/Header";
import { PageHeaderSection } from "@/components/molecules/Header/Agent";
import Panel from "@/components/molecules/panel";
import Image from "next/image";
import { useState } from "react";

export default function MemberListAgent() {
  //   const lang = await getDictionary();
  const [search, setSearch] = useState<string>("");
  const [section, setSection] = useState(1);
  const labels = [
    "January",
    "February",
    "May",
    "June",
    "July",
    "August",
    "October",
    "December",
  ];

  const labelDay = [
    { label: "S", active: false },
    { label: "M", active: true },
    { label: "T", active: true },
    { label: "W", active: true },
    { label: "T", active: true },
    { label: "F", active: false },
    { label: "S", active: false },
  ];

  return (
    <>
      <PageHeaderSection
        websiteName={"Website Name"}
        websiteStatus={"Active"}
        websiteUrl={"https://binance.co"}
        onChangeSearch={(value) => setSearch(value)}
        onClickSection={(value) => setSection(value)}
        section={section}
      />

      <Header
        icon="/images/super-agent.png"
        placeholder="Member List"
        subPlaceholder="Monitor Member Information"
      />

      <div className="flex flex-1 border border-gray-1 rounded-2xl bg-base-bg2 overflow-hidden mb-5 mt-5">
        <div className="flex flex-1 flex-col border-t border-base-bg3 mt-[4px] bg-base-bg5 rounded-t-xl">
          <div className="flex flex-1 flex-row px-5 pb-5 items-center pt-[18px]">
            <div className="flex flex-row items-center">
              <Image
                src={"/images/avatar_dummy.png"}
                alt="super agent icon"
                width={40}
                height={40}
              />
              <div className="w-[160px] text-gray-10 text-sm mr-[0.125rem] ml-4 font-light">
                Della J. Mitchell
              </div>
            </div>
            <div className="border-l border-l-gray-1 h-5" />
            <div className="flex flex-1 flex-row items-center pl-12 gap-16">
              <div className="flex flex-col mr-[0.5rem]">
                <div className="text-gray-6 text-sm font-extralight mb-1">
                  Recent Deposit
                </div>
                <div className="flex flex-row items-center text-gray-10 text-sm font-light">
                  26 July 2023, 09.30AM
                </div>
              </div>
              <div className="flex flex-row items-center gap-[10px]">
                {labelDay.map((item) => (
                  <div
                    key={`day-active-${item.label}`}
                    className={`${
                      item.active
                        ? "bg-success-1 border border-success-2 text-gray-10"
                        : "bg-base-bg3 border border-base-bg3 text-gray-6"
                    } flex text-sm rounded-full h-6 w-6 justify-center items-center`}
                  >
                    {item.label}
                  </div>
                ))}
              </div>
              <div className="flex rounded-md flex-row bg-checkbox border border-gray-9 items-center pr-[12px] pl-2 py-[4px] min-h-[28px]">
                <div className="flex bg-dot-blue-border h-3.5 w-3.5 rounded-full items-center justify-center mr-2">
                  <div className="bg-dot-blue h-2 w-2 rounded-full" />
                </div>
                <div className="text-left text-gray-0 text-xs font-light">
                  Active
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center gap-[10px]">
              <IconThreeDotVertical className="!w-5 !h-5" />
              <div className="bg-base-bg3 border border-gray-1 rounded-md py-[6px] px-[6px]">
                <IconChevronDown className="!w-4 !h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <CardOverview
        placeholder="Ethereum Revenue"
        subPlaceholder="Record your ideas and to-do’s easily, so you never miss a thing."
        containerStyle="mb-[4rem]"
        containerBgColor="border-bg-base3"
        divider={false}
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
            <div className="flex flex-1 flex-row border-y border-y-gray-1 mb-[4px] rounded-b-xl p-[1.125rem] gap-4 bg-base-bg5">
              <CardDashboard
                placeholder={"Total Revenue"}
                value={"Rp500.950.450"}
                profit={true}
                percentage={"23.8% (+24)"}
              />
              <CardDashboard
                placeholder={"Ethereum Revenue"}
                value={"Rp245.300.685"}
                profit={false}
                percentage={"-16.5% (-8)"}
              />
              <CardDashboard
                placeholder={"Total Turnover"}
                value={"Rp500.950.450"}
                profit={true}
                percentage={"23.8% (+24)"}
              />
            </div>
          </>
        }
      />
    </>
  );
}
