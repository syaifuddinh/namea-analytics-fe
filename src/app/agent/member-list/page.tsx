"use client";
import {
  IconChevronDown,
  IconChevronUp,
  IconSmallChevronDown,
  IconThreeDotVertical,
} from "@/components/atoms/Icons";
import {
  CardDashboard,
  CardInfoMember,
  CardMemberList,
} from "@/components/molecules/Card/Agent";
import { Header } from "@/components/molecules/Header";
import { PageHeaderSection } from "@/components/molecules/Header/Agent";
import Panel from "@/components/molecules/panel";
import Image from "next/image";
import { useState } from "react";
import dummyCrypto from "@/data/dummyCrypto.json";
import dummyWeeklyDeposit from "@/data/dummyDataWeeklyDeposit.json";
import { Pagination } from "@/components/molecules/Footer/Pagination";

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

  const [showDetail, setShowDetail] = useState(false);

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

      <div className="flex flex-1 border border-gray-1 rounded-2xl bg-base-bg2 overflow-hidden mb-5 mt-[1.375rem]">
        <div className="flex flex-1 flex-col border-t border-base-bg3 mt-[4px] bg-base-bg5 rounded-t-xl">
          <CardInfoMember
            image={"/images/avatar_dummy.png"}
            nameAgent={"Tobias J. Bourgault"}
            depositDate={"26 July 2023, 09.30AM"}
            statusAgent={"Active"}
          />
        </div>
      </div>

      <CardMemberList
        containerBgColor="border-bg-base3"
        customHeader={
          <CardInfoMember
            image={"/images/avatar_dummy.png"}
            nameAgent={"Felicitas A. Nieves"}
            depositDate={"26 July 2023, 09.30AM"}
            statusAgent={"Active"}
          />
        }
        divider={false}
        renderContent={
          <>
            <div className="flex flex-1 flex-row border-b border-b-base-bg3 p-[1.125rem] gap-4">
              <CardDashboard
                placeholder={"Total Deposit"}
                value={"Rp500.950.450"}
                valueStyle="!mb-0"
                profit={true}
              />
              <CardDashboard
                placeholder={"Total Withdrawal"}
                value={"Rp500.950.450"}
                valueStyle="!mb-0"
                profit={false}
              />
              <CardDashboard
                placeholder={"Avg. buy amount"}
                value={"Rp120.950"}
                valueStyle="!mb-0"
                profit={true}
              />
              <CardDashboard
                placeholder={"Last Login"}
                value={"12 July 2023, 11:59PM"}
                valueStyle="!mb-0"
              />
            </div>

            <div className="mt-[1.125rem]">
              <div className="ml-[1.125rem] text-sm text-gray-6 font-light">
                Recent Markets
              </div>
              <div className="grid grid-cols-2 items-center mt-3 mb-[1.125rem] mx-[1.125rem] gap-4">
                {dummyCrypto.map((item) => (
                  <div
                    key={`data-crypto-${item.id}`}
                    className="flex flex-row items-center p-[1.125rem] bg-base-bg4 border border-base-bg3 rounded-xl"
                  >
                    <Image src={item.logo} alt="logo" width={40} height={40} />
                    <div className="flex flex-col ml-4 w-[206px] mr-[118px]">
                      <div className="text-sm text-gray-10 font-extralight">
                        {item.cyptoCode}
                      </div>
                      <div className="text-sm text-gray-6 font-extralight">
                        {item.cryptoName}
                      </div>
                    </div>
                    <div className="flex flex-row items-center text-sm text-gray-6 font-extralight">
                      TotalBuy:
                      <div className="flex flex-row items-center text-sm text-gray-10 font-extralight">
                        {item.totalBuy}
                        <div className="text-sm text-gray-6 font-extralight">
                          ,00
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-base-bg5 border-t border-t-base-bg3 p-[1.125rem]">
              <div className="text-gray-10 text-sm font-light mb-3">
                Weekly Deposit Analysis
              </div>
              <div className="flex flex-col gap-4">
                {dummyWeeklyDeposit.map((item) => (
                  <div
                    key={`total-weekly-deposit-${item.id}`}
                    className="flex flex-row items-center bg-base-bg4 border border-base-bg3 rounded-xl p-[1.125rem]"
                  >
                    <div className="flex flex-1 flex-col mr-[97px]">
                      <div className="flex flex-1 flex-row items-center gap-[10px] mb-1">
                        <div className="text-xs text-gray-6 font-extralight">
                          Total Deposit
                        </div>
                        <div className="bg-gray-2 h-[6px] w-[6px] rounded-full" />
                        <div className="text-xs text-gray-10 font-extralight">
                          {item.weekDeposit}
                        </div>
                      </div>
                      <div className="flex flex-row items-center text-sm text-gray-10">
                        {item.totalDeposit}
                        <div className="text-sm text-gray-6">,00</div>
                      </div>
                    </div>
                    <div className="border-l border-l-gray-1 h-6" />
                    <div className="flex flex-row items-center ml-[46px] gap-2">
                      {item.weeklyDeposit.map((x) => (
                        <div
                          key={`weekly-deposit-${x.id}`}
                          className="flex flex-row items-center min-w-[110px] bg-success-1 border border-success-2 rounded-full py-1 pl-1 pr-3 gap-2"
                        >
                          <div className="flex bg-success-1 border border-success-2 rounded-full h-6 w-6 justify-center items-center text-sm text-gray-10">
                            {x.codeDay}
                          </div>
                          <div
                            className={`text-xs text-gray-10 ${
                              x.deposit === "0" && "flex flex-row items-center"
                            }`}
                          >
                            Rp{x.deposit}
                            {x.deposit === "0" && (
                              <div className="text-xs text-gray-6">,00</div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        }
      />

      <div className="flex flex-1 border border-gray-1 rounded-2xl bg-base-bg2 overflow-hidden mb-5 mt-5">
        <div className="flex flex-1 flex-col border-t border-base-bg3 mt-[4px] bg-base-bg5 rounded-t-xl">
          <CardInfoMember
            image={"/images/avatar_dummy.png"}
            nameAgent={"Thomas J. Jones"}
            depositDate={"26 July 2023, 09.30AM"}
            statusAgent={"Active"}
          />
        </div>
      </div>

      <div className="flex flex-1 border border-gray-1 rounded-2xl bg-base-bg2 overflow-hidden mb-5 mt-5">
        <div className="flex flex-1 flex-col border-t border-base-bg3 mt-[4px] bg-base-bg5 rounded-t-xl">
          <CardInfoMember
            image={"/images/avatar_dummy.png"}
            nameAgent={"Clifford A. Correa"}
            depositDate={"26 July 2023, 09.30AM"}
            statusAgent={"Active"}
          />
        </div>
      </div>

      <div className="flex flex-1 border border-gray-1 rounded-2xl bg-base-bg2 overflow-hidden mb-5 mt-5">
        <div className="flex flex-1 flex-col border-t border-base-bg3 mt-[4px] bg-base-bg5 rounded-t-xl">
          <CardInfoMember
            image={"/images/avatar_dummy.png"}
            nameAgent={"Jesus T. Heffner"}
            depositDate={"26 July 2023, 09.30AM"}
            statusAgent={"Active"}
          />
        </div>
      </div>

      <Pagination className="mt-5" totalAgent={28} />
    </>
  );
}
