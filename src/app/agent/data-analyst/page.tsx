"use client";

import { IconArrowDown, IconArrowUp } from "@/components/atoms/Icons";
import {
  CardDashboard,
  CardDataAnalyst,
  CardMonthlyAnalyst,
} from "@/components/molecules/Card/Agent";
import { Header } from "@/components/molecules/Header";
import {
  ILabelYear,
  PageHeaderSection,
} from "@/components/molecules/Header/Agent";
import dummyDataAnalyst from "@/data/dummyDataAnalyst.json";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import LineChart from "@/components/atoms/line-chart"

export default function DataAnalystAgent() {
  //   const lang = await getDictionary();
  const [search, setSearch] = useState<string>("");
  const [section, setSection] = useState(3);
  const [yearIdx, setYearIdx] = useState(0);
  const labelYear = [
    { id: 0, label: "2021" },
    { id: 1, label: "2022" },
    { id: 2, label: "2023" },
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

      <CardDataAnalyst
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
                  <button
                    key={`label-page-${item.id}`}
                    onClick={() => setYearIdx(item.id)}
                    className={clsx(
                      "py-[4px] px-[10px] font-thin",
                      yearIdx === item.id &&
                        "border border-gray-1 rounded-md bg-base-bg3 !font-extralight"
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        }
        divider={false}
        renderContent={
          <>
            <div className="flex flex-1 flex-row rounded-b-xl p-[1.25rem] gap-4">
              <CardDashboard
                placeholder={"Total Revenue"}
                value={"Rp500.950.450"}
                profit={true}
                percentage={"23.8% (+24)"}
                pContainer="p-[1.125rem]"
              />
              <CardDashboard
                placeholder={"Total Turnover"}
                value={"Rp500.950.450"}
                profit={false}
                percentage={"-16.5% (-8)"}
                pContainer="p-[1.125rem]"
              />
            </div>

            <div className="bg-base-bg5 border-t border-t-base-bg3">
                <div className="flex p-[1.125rem] gap-5 justify-center">
                  {dummyDataAnalyst.map((item) => (
                    <CardMonthlyAnalyst
                      key={`monthly-analyst-${item.id}`}
                      month={item.month}
                      revenue={item.revenue}
                      profit={item.profit}
                      percentage={item.percentage}
                    />
                  ))}
                </div>

                <div className="px-5 pb-5">
                  <LineChart
                      className="mt-5"
                      maxValue={100}
                      values={[50, 40, 50, 30, 70, 60, 15, 50, 40, 30, 55, 100]}
                  />
                </div>
            </div>
          </>
        }
      />
    </>
  );
}
