"use client";
import { Header } from "@/components/molecules/Header";
import { PageHeaderSection } from "@/components/molecules/Header/Agent";
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
        <div className="flex flex-1 flex-col border-t border-gray-1 mt-[4px] bg-base-bg5 rounded-t-xl">
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
                    } text-sm rounded-full py-[2px] px-[7px]`}
                  >
                    {item.label}
                  </div>
                ))}
              </div>
              <div className="flex rounded-md flex-row bg-checkbox border border-gray-9 items-center pr-[10px] pl-3 py-[4px] min-h-[28px]">
                <div className="bg-dot-blue h-2 w-2 rounded-full border-[3px] border-dot-blue-border mr-2" />
                <div className="text-left text-gray-0 text-xs font-light">
                  Active
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
