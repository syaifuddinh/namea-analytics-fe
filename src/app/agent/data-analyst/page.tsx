"use client";
import {
  IconArrowDown,
  IconArrowUp,
  IconChevronDown,
  IconChevronRight,
  IconChevronUp,
  IconSmallChevronDown,
  IconThreeDotVertical,
} from "@/components/atoms/Icons";
import {
  CardDashboard,
  CardMemberList,
} from "@/components/molecules/Card/Agent";
import { Header } from "@/components/molecules/Header";
import {
  ILabelSection,
  ILabelYear,
  PageHeaderSection,
} from "@/components/molecules/Header/Agent";
import Panel from "@/components/molecules/panel";
import Image from "next/image";
import { useState } from "react";
import dummyCrypto from "@/data/dummyCrypto.json";
import dummyDataAnalyst from "@/data/dummyDataAnalyst.json";
import { Pagination } from "@/components/molecules/Footer/Pagination";
import Link from "next/link";
import clsx from "clsx";

export default function DataAnalystAgent() {
  //   const lang = await getDictionary();
  const [search, setSearch] = useState<string>("");
  const [section, setSection] = useState(0);
  const labelYear = [
    { id: 0, label: "2021" },
    { id: 1, label: "2022" },
    { id: 2, label: "2023" },
  ];

  const labelProvider = [
    { label: "Layer1/Layer2" },
    { label: "Metaverse" },
    { label: "Meme" },
    { label: "Liquid" },
    { label: "+3" },
  ];

  const labelMarkets = [
    { label: "BTC" },
    { label: "ETH" },
    { label: "USDT" },
    { label: "BNB" },
    { label: "+3" },
  ];

  const [showDetail, setShowDetail] = useState(false);

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
        placeholder="Data Analyst"
        subPlaceholder="Monitor the performance of your platform seamlessly throughout the entire year."
      />

      <CardMemberList
        containerBgColor="border-bg-base3"
        customHeader={
          <div className="flex flex-1 flex-row items-center p-[1.125rem]">
            <div className="w-8 h-8 bg-gray-1 rounded-full mr-3" />
            <div className="text-base text-gray-10 font-light flex flex-1">
              Ethereums
            </div>
            <div className="flex flex-1 items-center justify-end">
              <div className="flex flex-row items-center bg-base-bg5 p-1 gap-1 rounded-[10px] border border-gray-9 text-sm text-gray-10 font-extralight">
                {labelYear.map((item: ILabelYear) => (
                  <Link
                    key={`label-page-${item.id}`}
                    href={{}}
                    className={clsx(
                      "py-[4px] px-3 font-thin",
                      section === item.id &&
                        "border border-gray-1 rounded-md bg-base-bg3 !font-extralight"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        }
        divider={false}
        renderContent={
          <>
            <div className="flex flex-1 flex-row rounded-b-xl p-[1.125rem] gap-4">
              <CardDashboard
                placeholder={"Total Revenue"}
                value={"+Rp500.950.450"}
                profit={true}
                percentage={"23.8% (+24)"}
              />
              <CardDashboard
                placeholder={"Total Turnover"}
                value={"-Rp500.950.450"}
                profit={false}
                percentage={"-16.5% (-8)"}
              />
            </div>

            <div className="flex flex-wrap p-[1.125rem] bg-base-bg5 border-t border-t-base-bg3 gap-6 justify-center">
              {dummyDataAnalyst.map((item) => (
                <div
                  key={`data-analyst-revenue-${item.id}`}
                  className="flex flex-row border border-gray-1 rounded-2xl bg-base-bg2"
                >
                  <div className="flex flex-col border-t border-gray-1 mt-1 bg-base-bg5 rounded-t-xl divide-y divide-base-bg3">
                    <div className="flex w-full p-2 justify-center text-gray-6 text-sm">
                      {item.month}
                    </div>
                    <div className="flex w-full p-2 justify-center text-gray-6 text-sm">
                      {item.revenue}
                    </div>
                    <div className="flex w-full p-2 justify-center">
                      <div
                        className={`flex flex-row gap-1 items-center ${
                          item.profit ? "bg-success-1" : "bg-alert-1"
                        } py-[2px] pl-1 pr-[6px] rounded-3xl max-w-max`}
                      >
                        {item.profit ? (
                          <IconArrowUp className="text-success-10 !w-[13px] !h-[13px]" />
                        ) : (
                          <IconArrowDown className="text-alert-10 !w-[13px] !h-[13px]" />
                        )}
                        <div
                          className={clsx(
                            "text-xs font-light",
                            item.profit ? "text-success-10" : "text-alert-10"
                          )}
                        >
                          {item.percentage}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        }
      />
    </>
  );
}
