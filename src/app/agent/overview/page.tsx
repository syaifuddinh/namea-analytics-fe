"use client";
import { IconChevronRight, IconChevronDown } from "@/components/atoms/Icons";
import { IconURL } from "@/components/atoms/Icons/Url";
import { Calendar } from "@/components/atoms/calender";
import CustomChart from "@/components/atoms/custom-chart";
import { InputSearch } from "@/components/atoms/search";
import { CardOverview, CardStatus } from "@/components/molecules/Card";
import {
  CardDashboard,
  CardProfit,
  CardTop,
} from "@/components/molecules/Card/Agent";
import { Header } from "@/components/molecules/Header";
import {
  HeaderProfit,
  PageHeaderSection,
} from "@/components/molecules/Header/Agent";
import Panel from "@/components/molecules/panel";
import dummyProfit from "@/data/dummyProfit.json";
import dummyTopPagesMarket from "@/data/dummyTopPagesMarkets.json";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

export default function OverviewAgent() {
  //   const lang = await getDictionary();
  const [search, setSearch] = useState<string>("");
  const [section, setSection] = useState(0);
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

  const labelStatus = [
    { id: 1, label: "Deposit", bgColor: "bg-dot-blue" },
    { id: 2, label: "Withdraw", bgColor: "bg-dot-blue1" },
    { id: 3, label: "Login", bgColor: "bg-dot-blue2" },
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
        placeholder="Overview"
        subPlaceholder="Show a comprehensive overview of data from different sources."
      >
        <div className="flex items-center">
          <Calendar
            className="!w-[272px] !h-8"
            titleStyle="!pr-0 mr-[22px] !tracking-[0.25px] w-[190px]"
            iconStyle="!w-[1.25rem] !h-[1.25rem]"
          />
        </div>
      </Header>

      <CardOverview
        placeholder="Ethereum Revenue"
        subPlaceholder="Record your ideas and to-do’s easily, so you never miss a thing."
        containerStyle="mb-[4rem]"
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

      <CardOverview
        placeholder="Member Overview"
        subPlaceholder="Record your ideas and to-do’s easily, so you never miss a thing."
        className="flex-row justify-between"
        containerStyle="mb-[4rem]"
        renderHeader={
          <div className="flex flex-row items-center pr-2 pl-3 py-2 rounded-lg border border-gray-1 bg-base-bg3 max-h-max">
            <div className="text-sm text-gray-6 font-extralight mr-1">
              View Member Analysis
            </div>
            <IconChevronRight className="!w-5 !h-5" />
          </div>
        }
        renderContent={
          <div className="grid grid-cols-3 border-y border-y-gray-1 bg-base-bg5 mb-[4px] rounded-b-xl p-[1.125rem] gap-4">
            <CardDashboard
              placeholder={"Total Member"}
              value={"54,695"}
              profit={true}
              percentage={"23.8% (+24)"}
              desc={"compared to last year"}
            />
            <CardDashboard
              placeholder={"New Member"}
              value={"6,458"}
              profit={false}
              percentage={"-16.5% (-8)"}
              desc={"compared to last year"}
            />
            <CardDashboard
              placeholder={"Active Member"}
              value={"24,396"}
              profit={true}
              percentage={"23.8% (+24)"}
              desc={"compared to last year"}
            />
            <CardDashboard
              placeholder={"Avg. Engagement Time"}
              value={"1hr 24min"}
              profit={false}
              percentage={"-16.5% (-8)"}
              desc={"compared to last year"}
            />
            <CardDashboard
              placeholder={"Total Deposit"}
              value={"Rp500.950.450"}
              profit={true}
              percentage={"23.8% (+24)"}
              desc={"compared to last year"}
            />
            <CardDashboard
              placeholder={"Total Withdraw"}
              value={"Rp492.201.500"}
              profit={false}
              percentage={"-16.5% (-8)"}
              desc={"compared to last year"}
            />
          </div>
        }
      />

      <CardOverview
        placeholder="Member Activity"
        containerStyle="mb-[4rem]"
        renderContent={
          <>
            <div className="flex border-y border-y-gray-1 bg-base-bg5 px-5 py-[8px] gap-2 justify-end">
              {labelStatus.map((item) => (
                <CardStatus
                  key={`label-status-${item.id}`}
                  placeholder={item.label}
                  className={item.bgColor}
                />
              ))}
            </div>

            <div className="mb-[4px] border-b border-b-gray-1 rounded-b-xl">
              <CustomChart
                variant="bar"
                maxValue={60000}
                maxAmount={6}
                labels={labels}
                xClassname="pl-[3rem] pr-[2.3rem]"
                yChartStyle="!min-w-[47px] !pl-[10px]"
                fixedBarWidth={28.08}
                minHeight={250}
                values={[
                  [48000, 48000, 48000, 48000, 48000, 48000, 48000, 48000],
                  [20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000],
                  [30000, 30000, 30000, 30000, 30000, 30000, 30000, 30000],
                ]}
                onGenerateTooltip={undefined}
                onGenerateLegend={undefined}
              />
            </div>
          </>
        }
      />

      <div className="flex flex-row items-center gap-5">
        {dummyTopPagesMarket.map((item) => (
          <CardOverview
            key={`top-chart-${item.id}`}
            placeholder={item.placeholder}
            renderContent={
              <div className="flex flex-col border-y border-y-gray-1 bg-base-bg5 mb-[4px] rounded-b-xl p-[1.125rem]">
                {item.dataTopPages.map((i, x) => (
                  <CardTop
                    key={`data-top-${i.id}`}
                    logo={i.logo}
                    placeholder={i.placeholder}
                    value={i.value}
                    barValue={i.barValue}
                    className={x !== item.dataTopPages.length - 1 ? "mb-5" : ""}
                  />
                ))}
              </div>
            }
          />
        ))}
      </div>

      <div className="w-full text-lg text-gray-10 font-light mt-10">
        Profit by Market Category
      </div>

      <div className="grid grid-cols-3 gap-5">
        {dummyProfit.map((item) => (
          <CardOverview
            key={`profit-dashboard-${item.id}`}
            customHeader={
              <HeaderProfit
                title={item.label}
                category={item.category}
                value={item.profitMargin}
              />
            }
            containerStyle={item.id <= 3 ? "!mb-0" : "!mt-0"}
            divider={false}
            renderContent={
              <>
                <div className="flex flex-row px-[1.125rem] py-[1.25rem] gap-2">
                  <div className="w-[72%]">
                    <Panel
                      className="!min-h-0"
                      className1="!h-8"
                      label="72%"
                      variant="success"
                      containerLabel="!pt-[0.400rem] !pb-[0.625rem]"
                    />
                  </div>
                  <div className="w-[28%]">
                    <Panel
                      className="!min-h-0"
                      className1="!h-8"
                      label="28%"
                      variant="primary"
                      containerLabel="!pt-[0.400rem] !pb-[0.625rem]"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col border-y border-y-gray-1 bg-base-bg5 mb-[4px] rounded-b-xl p-[1.125rem] gap-[1.125rem]">
                  {item.dataProfit.map((x) => (
                    <CardProfit
                      key={`data-profit-${x.id}`}
                      iconDot={x.icon}
                      placeholder={x.placeholder}
                      value={x.value}
                      profit={x.profit}
                      percentage={x.precentage}
                    />
                  ))}
                </div>
              </>
            }
          />
        ))}
      </div>
    </>
  );
}
