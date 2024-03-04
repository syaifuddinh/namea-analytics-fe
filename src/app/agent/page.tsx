"use client";
import {
  IconAdd,
  IconArrowUp,
  IconCalender,
  IconChevronRight,
  IconDropdown,
  IconSearch,
  IconSize,
} from "@/components/atoms/Icons";
import { IconURL } from "@/components/atoms/Icons/Url";
import { Calendar } from "@/components/atoms/calender";
import CustomChart from "@/components/atoms/custom-chart";
import { Dot } from "@/components/atoms/dot-global";
import { InputSearch } from "@/components/atoms/search";
import { CardOverview, CardStatus } from "@/components/molecules/Card";
import {
  CardDashboard,
  CardProfit,
  CardTop,
} from "@/components/molecules/Card/Agent";
import { Header } from "@/components/molecules/Header";
import { HeaderProfit } from "@/components/molecules/Header/Agent";
import Panel from "@/components/molecules/panel";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import dummyTopPagesMarket from "@/data/dummyTopPagesMarkets.json";

export default function PageAgent() {
  //   const lang = await getDictionary();
  const [search, setSearch] = useState<string>("");
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

  const [page, setPage] = useState(0);

  const labelPage = [
    { id: 0, label: "Overview" },
    { id: 1, label: "Member List" },
    { id: 2, label: "Event" },
    { id: 3, label: "Data Analyst" },
  ];

  return (
    <>
      <div className="flex flex-row flex-1 items-center mt-[44px]">
        <button className="flex flex-row rounded-md border border-gray-1 bg-checkbox items-center pl-[10px] pr-1 py-[6px] mr-[10px]">
          <Image
            src="/images/avatar_dummy.png"
            alt="super agent icon"
            width={20}
            height={20}
          />
          <div className="text-left text-gray-0 text-sm py-[2px] pl-2 mr-[38px] font-light">
            Website Name
          </div>
          <div className="flex flex-1 justify-end">
            <IconDropdown className={"!w-[1.25rem !h-[1.25rem]"} />
          </div>
        </button>
        <InputSearch
          name={"WebOrBrands"}
          placeholder="Search website or brands"
          onChange={(value) => setSearch(value)}
          className="!py-[6px] !pl-2 !pr-[6px]"
          iconClassName="!w-[1.5rem] !h-[1.25rem]"
          className1="!ml-1"
        />
      </div>

      <div className="flex flex-1 flex-col border border-gray-1 rounded-2xl bg-base-bg2 overflow-hidden my-5">
        <div className="flex flex-1 flex-col border-t border-gray-1 mt-1 bg-base-bg5 rounded-t-xl">
          <div className="flex flex-1 p-[18px] items-center bg-gray-7 ">
            <div className="flex flex-row items-center bg-base-bg5 p-1 gap-1 rounded-[10px] border border-gray-9 text-sm text-gray-10 font-extralight">
              {labelPage.map((item) => (
                <button
                  key={`label-page-${item.id}`}
                  type="button"
                  onClick={() => setPage(item.id)}
                  className={clsx(
                    "py-[4px] px-3 font-thin",
                    page === item.id &&
                      "border border-gray-1 rounded-md bg-base-bg3 !font-extralight"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="h-[10px] border-x border-x-gray-1 mx-5" />
        <div className="flex flex-row border-y border-y-gray-1 bg-base-bg5 mb-1 rounded-b-xl justify-between p-5 items-center">
          <div className="flex flex-row items-center">
            <div className="flex items-center mr-4">
              <Image
                src="/images/avatar_dummy.png"
                alt="super agent icon"
                width={40}
                height={40}
              />
            </div>
            <div className="text-gray-10 text-base mr-3 font-light">
              Website Name
            </div>
            <div className="flex rounded-full flex-row bg-success-1 items-center pr-[10px] pl-2 py-[4px] h-[28px]">
              <div
                className={clsx(
                  "bg-dot-blue h-2 w-2 rounded-full border-[3px] border-dot-blue-border mr-2"
                )}
              />
              <div className="text-left text-success-10 text-xs font-light">
                Active
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center pr-[11px] pl-1 rounded-full border border-base-bg3 gap-2 bg-base-bg3 h-[26px]">
            <IconURL className="!w-5 !h-5" />
            <div className="text-sm text-gray-6 font-extralight">
              https://binance.co
            </div>
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
            <div className="flex border-y border-y-gray-1 bg-base-bg5 px-5 py-[10px] gap-2 justify-end">
              {labelStatus.map((item) => (
                <CardStatus
                  key={`label-status-${item.id}`}
                  placeholder={item.label}
                  className={item.bgColor}
                />
              ))}
            </div>

            <div className="mb-[6px] border-b border-b-gray-1 rounded-b-xl">
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
              <div className="flex flex-col border-y border-y-gray-1 bg-base-bg5 mb-[4px] rounded-b-xl p-5">
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
        <CardOverview
          customHeader={
            <HeaderProfit title={"Token"} category={"Healthy"} value={"+18"} />
          }
          containerStyle="mb-0"
          divider={false}
          renderContent={
            <>
              <div className="flex flex-row p-5 gap-2">
                <div className="w-[72%]">
                  <Panel
                    className="min-h-0"
                    className1="h-8"
                    label="72%"
                    variant="success"
                  />
                </div>
                <div className="w-[28%]">
                  <Panel
                    className="min-h-0"
                    className1="h-8"
                    label="28%"
                    variant="primary"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col border-y border-y-gray-1 bg-base-bg5 mb-[6px] rounded-b-xl p-5 gap-4">
                <CardProfit
                  iconDot={<Dot className="bg-dot-blue border-dot-blue" />}
                  placeholder={"Total Transaction"}
                  value={"Rp500.950.450"}
                  profit={true}
                  percentage={"23.8% (+24)"}
                />
                <CardProfit
                  iconDot={<Dot className="bg-alert-10 border-alert-2" />}
                  placeholder={"Profit/Loss"}
                  value={"Rp500.950.450"}
                  profit={false}
                  percentage={"16.5% (-8)"}
                />
                <CardProfit
                  placeholder={"Total Member"}
                  value={"65.540"}
                  profit={true}
                  percentage={"23.8% (+24)"}
                />
                <CardProfit
                  placeholder={"Total Costing"}
                  value={"Rp500.950.450"}
                  profit={true}
                  percentage={"23.8% (+24)"}
                />
              </div>
            </>
          }
        />
        <CardOverview
          customHeader={
            <HeaderProfit title={"Token"} category={"Risky"} value={"-12"} />
          }
          containerStyle="mb-0"
          divider={false}
          renderContent={
            <>
              <div className="flex flex-row p-5 gap-2">
                <div className="w-[72%]">
                  <Panel
                    className="min-h-0"
                    className1="h-8"
                    label="72%"
                    variant="success"
                  />
                </div>
                <div className="w-[28%]">
                  <Panel
                    className="min-h-0"
                    className1="h-8"
                    label="28%"
                    variant="primary"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col border-y border-y-gray-1 bg-base-bg5 mb-[6px] rounded-b-xl p-5 gap-4">
                <CardProfit
                  iconDot={<Dot className="bg-dot-blue border-dot-blue" />}
                  placeholder={"Total Transaction"}
                  value={"Rp500.950.450"}
                  profit={true}
                  percentage={"23.8% (+24)"}
                />
                <CardProfit
                  iconDot={<Dot className="bg-alert-10 border-alert-2" />}
                  placeholder={"Profit/Loss"}
                  value={"Rp500.950.450"}
                  profit={false}
                  percentage={"16.5% (-8)"}
                />
                <CardProfit
                  placeholder={"Total Member"}
                  value={"65.540"}
                  profit={true}
                  percentage={"23.8% (+24)"}
                />
                <CardProfit
                  placeholder={"Total Costing"}
                  value={"Rp500.950.450"}
                  profit={true}
                  percentage={"23.8% (+24)"}
                />
              </div>
            </>
          }
        />
        <CardOverview
          customHeader={
            <HeaderProfit title={"Token"} category={"Healthy"} value={"+18"} />
          }
          containerStyle="mb-0"
          divider={false}
          renderContent={
            <>
              <div className="flex flex-row p-5 gap-2">
                <div className="w-[72%]">
                  <Panel
                    className="min-h-0"
                    className1="h-8"
                    label="72%"
                    variant="success"
                  />
                </div>
                <div className="w-[28%]">
                  <Panel
                    className="min-h-0"
                    className1="h-8"
                    label="28%"
                    variant="primary"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col border-y border-y-gray-1 bg-base-bg5 mb-[6px] rounded-b-xl p-5 gap-4">
                <CardProfit
                  iconDot={<Dot className="bg-dot-blue border-dot-blue" />}
                  placeholder={"Total Transaction"}
                  value={"Rp500.950.450"}
                  profit={true}
                  percentage={"23.8% (+24)"}
                />
                <CardProfit
                  iconDot={<Dot className="bg-alert-10 border-alert-2" />}
                  placeholder={"Profit/Loss"}
                  value={"Rp500.950.450"}
                  profit={false}
                  percentage={"16.5% (-8)"}
                />
                <CardProfit
                  placeholder={"Total Member"}
                  value={"65.540"}
                  profit={true}
                  percentage={"23.8% (+24)"}
                />
                <CardProfit
                  placeholder={"Total Costing"}
                  value={"Rp500.950.450"}
                  profit={true}
                  percentage={"23.8% (+24)"}
                />
              </div>
            </>
          }
        />
        <CardOverview
          containerStyle="mt-0"
          customHeader={
            <HeaderProfit title={"Token"} category={"Healthy"} value={"+18"} />
          }
          divider={false}
          renderContent={
            <>
              <div className="flex flex-row p-5 gap-2">
                <div className="w-[72%]">
                  <Panel
                    className="min-h-0"
                    className1="h-8"
                    label="72%"
                    variant="success"
                  />
                </div>
                <div className="w-[28%]">
                  <Panel
                    className="min-h-0"
                    className1="h-8"
                    label="28%"
                    variant="primary"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col border-y border-y-gray-1 bg-base-bg5 mb-[6px] rounded-b-xl p-5 gap-4">
                <CardProfit
                  iconDot={<Dot className="bg-dot-blue border-dot-blue" />}
                  placeholder={"Total Transaction"}
                  value={"Rp500.950.450"}
                  profit={true}
                  percentage={"23.8% (+24)"}
                />
                <CardProfit
                  iconDot={<Dot className="bg-alert-10 border-alert-2" />}
                  placeholder={"Profit/Loss"}
                  value={"Rp500.950.450"}
                  profit={false}
                  percentage={"16.5% (-8)"}
                />
                <CardProfit
                  placeholder={"Total Member"}
                  value={"65.540"}
                  profit={true}
                  percentage={"23.8% (+24)"}
                />
                <CardProfit
                  placeholder={"Total Costing"}
                  value={"Rp500.950.450"}
                  profit={true}
                  percentage={"23.8% (+24)"}
                />
              </div>
            </>
          }
        />
        <CardOverview
          containerStyle="mt-0"
          customHeader={
            <HeaderProfit title={"Token"} category={"Risky"} value={"-12"} />
          }
          divider={false}
          renderContent={
            <>
              <div className="flex flex-row p-5 gap-2">
                <div className="w-[72%]">
                  <Panel
                    className="min-h-0"
                    className1="h-8"
                    label="72%"
                    variant="success"
                  />
                </div>
                <div className="w-[28%]">
                  <Panel
                    className="min-h-0"
                    className1="h-8"
                    label="28%"
                    variant="primary"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col border-y border-y-gray-1 bg-base-bg5 mb-[6px] rounded-b-xl p-5 gap-4">
                <CardProfit
                  iconDot={<Dot className="bg-dot-blue border-dot-blue" />}
                  placeholder={"Total Transaction"}
                  value={"Rp500.950.450"}
                  profit={true}
                  percentage={"23.8% (+24)"}
                />
                <CardProfit
                  iconDot={<Dot className="bg-alert-10 border-alert-2" />}
                  placeholder={"Profit/Loss"}
                  value={"Rp500.950.450"}
                  profit={false}
                  percentage={"16.5% (-8)"}
                />
                <CardProfit
                  placeholder={"Total Member"}
                  value={"65.540"}
                  profit={true}
                  percentage={"23.8% (+24)"}
                />
                <CardProfit
                  placeholder={"Total Costing"}
                  value={"Rp500.950.450"}
                  profit={true}
                  percentage={"23.8% (+24)"}
                />
              </div>
            </>
          }
        />
        <CardOverview
          containerStyle="mt-0"
          customHeader={
            <HeaderProfit title={"Token"} category={"Healthy"} value={"+18"} />
          }
          divider={false}
          renderContent={
            <>
              <div className="flex flex-row p-5 gap-2">
                <div className="w-[72%]">
                  <Panel
                    className="min-h-0"
                    className1="h-8"
                    label="72%"
                    variant="success"
                  />
                </div>
                <div className="w-[28%]">
                  <Panel
                    className="min-h-0"
                    className1="h-8"
                    label="28%"
                    variant="primary"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col border-y border-y-gray-1 bg-base-bg5 mb-[6px] rounded-b-xl p-5 gap-4">
                <CardProfit
                  iconDot={<Dot className="bg-dot-blue border-dot-blue" />}
                  placeholder={"Total Transaction"}
                  value={"Rp500.950.450"}
                  profit={true}
                  percentage={"23.8% (+24)"}
                />
                <CardProfit
                  iconDot={<Dot className="bg-alert-10 border-alert-2" />}
                  placeholder={"Profit/Loss"}
                  value={"Rp500.950.450"}
                  profit={false}
                  percentage={"16.5% (-8)"}
                />
                <CardProfit
                  placeholder={"Total Member"}
                  value={"65.540"}
                  profit={true}
                  percentage={"23.8% (+24)"}
                />
                <CardProfit
                  placeholder={"Total Costing"}
                  value={"Rp500.950.450"}
                  profit={true}
                  percentage={"23.8% (+24)"}
                />
              </div>
            </>
          }
        />
      </div>
    </>
  );
}
