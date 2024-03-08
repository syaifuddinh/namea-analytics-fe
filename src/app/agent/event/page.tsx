"use client";
import {
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
import { PageHeaderSection } from "@/components/molecules/Header/Agent";
import Panel from "@/components/molecules/panel";
import Image from "next/image";
import { useState } from "react";
import dummyCrypto from "@/data/dummyCrypto.json";
import dummyEvent from "@/data/dummyEvent.json";
import { Pagination } from "@/components/molecules/Footer/Pagination";

export default function EventAgent() {
  //   const lang = await getDictionary();
  const [search, setSearch] = useState<string>("");
  const [section, setSection] = useState(2);
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
        placeholder="On Going Event"
        subPlaceholder="All on going event created by agent"
      />

      <div className="flex flex-1 border border-gray-1 rounded-2xl bg-base-bg2 overflow-hidden mb-5 mt-5">
        <div className="flex flex-1 flex-col border-t border-base-bg3 mt-[4px] bg-base-bg5 rounded-t-xl">
          <div className="flex flex-1 flex-row px-5 pb-5 items-center pt-[18px]">
            <div className="flex flex-row items-center">
              <Image
                src={"/images/image_event.png"}
                alt="super agent icon"
                width={106}
                height={64}
              />
              <div className="flex flex-col w-[185px] ml-4 mr-[80px]">
                <div className="text-gray-10 text-sm font-extralight mb-1">
                  Monthly Cashback 15%
                </div>
                <div className="flex flex-row items-center text-gray-6 text-sm font-light">
                  Bonus Cashback
                </div>
              </div>
            </div>
            <div className="border-l border-l-gray-1 h-[38px]" />
            <div className="flex flex-1 flex-row items-center pl-16">
              <div className="flex flex-col mr-16">
                <div className="text-gray-6 text-sm font-extralight mb-1">
                  Promotion Period
                </div>
                <div className="flex flex-row items-center text-gray-10 text-sm font-light">
                  20 Oct 2023 to 27 Oct 2023
                </div>
              </div>
              <div className="flex flex-col mr-[68px]">
                <div className="text-gray-6 text-sm font-extralight mb-1">
                  Revenue Generated
                </div>
                <div className="flex flex-row items-center text-gray-10 text-sm font-light">
                  Rp24.600.590
                  <div className="text-sm text-gray-6 font-extralight">,00</div>
                </div>
              </div>
              <div className="flex rounded-md flex-row bg-checkbox border border-gray-9 items-center pr-[12px] pl-2 py-[4px] min-h-[28px]">
                <div className="bg-dot-blue h-2 w-2 rounded-full mr-2" />
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

      <CardMemberList
        containerBgColor="border-bg-base3"
        customHeader={
          <div className="flex flex-1 flex-row px-5 pb-5 items-center pt-[18px]">
            <div className="flex flex-row items-center">
              <Image
                src={"/images/image_event.png"}
                alt="super agent icon"
                width={106}
                height={64}
              />
              <div className="flex flex-col w-[185px] ml-4 mr-[80px]">
                <div className="text-gray-10 text-sm font-extralight mb-1">
                  {dummyEvent.eventName}
                </div>
                <div className="flex flex-row items-center text-gray-6 text-sm font-light">
                  {dummyEvent.descEventName}
                </div>
              </div>
            </div>
            <div className="border-l border-l-gray-1 h-[38px]" />
            <div className="flex flex-1 flex-row items-center pl-16">
              <div className="flex flex-col mr-16">
                <div className="text-gray-6 text-sm font-extralight mb-1">
                  Promotion Periode
                </div>
                <div className="flex flex-row items-center text-gray-10 text-sm font-light">
                  {dummyEvent.promotionPeriode}
                </div>
              </div>
              <div className="flex flex-col mr-[68px]">
                <div className="text-gray-6 text-sm font-extralight mb-1">
                  Revenue Generated
                </div>
                <div className="flex flex-row items-center text-gray-10 text-sm font-light">
                  {dummyEvent.revenueGenerated}
                  <div className="text-sm text-gray-6 font-extralight">,00</div>
                </div>
              </div>
              <div className="flex rounded-md flex-row bg-checkbox border border-gray-9 items-center pr-[12px] pl-2 py-[4px] min-h-[28px]">
                <div className="bg-dot-blue h-2 w-2 rounded-full mr-2" />
                <div className="text-left text-gray-0 text-xs font-light">
                  {dummyEvent.eventStatus}
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
        }
        divider={false}
        renderContent={
          <>
            <div className="flex flex-col p-[1.125rem] gap-y-[1.125rem] gap-x-4">
              <div className="flex flex-row items-center gap-[70px]">
                <div className="flex flex-col w-[142px] gap-1">
                  <div className="text-sm text-gray-6 font-extralight">
                    Created by
                  </div>
                  <div className="text-sm text-gray-10 font-light">
                    {dummyEvent.detailEvent.createdBy}
                  </div>
                </div>
                <div className="flex flex-col w-[142px] gap-1">
                  <div className="text-sm text-gray-6 font-extralight">
                    Promotion Type
                  </div>
                  <div className="text-sm text-gray-10 font-light">
                    {dummyEvent.detailEvent.promotionType}
                  </div>
                </div>
                <div className="flex flex-col w-[142px] gap-1">
                  <div className="text-sm text-gray-6 font-extralight">
                    Include?
                  </div>
                  <div className="text-sm text-gray-10 font-light">
                    {dummyEvent.detailEvent.include}
                  </div>
                </div>
                <div className="flex flex-col w-[142px] gap-1">
                  <div className="text-sm text-gray-6 font-extralight">
                    Bonus Amount
                  </div>
                  <div className="text-sm text-gray-10 font-light">
                    {dummyEvent.detailEvent.bonusAmount}
                  </div>
                </div>
                <div className="flex flex-col w-[142px] gap-1">
                  <div className="text-sm text-gray-6 font-extralight">
                    Turnover Multiplier
                  </div>
                  <div className="text-sm text-gray-10 font-light">
                    {dummyEvent.detailEvent.turnoverMultiplier}
                  </div>
                </div>
              </div>

              <div className="flex flex-row items-center gap-[70px]">
                <div className="flex flex-col w-[142px] gap-1">
                  <div className="text-sm text-gray-6 font-extralight">
                    Min. Deposit
                  </div>
                  <div className="text-sm text-gray-10 font-light">
                    {dummyEvent.detailEvent.minDeposit}
                  </div>
                </div>
                <div className="flex flex-col w-[142px] gap-1">
                  <div className="text-sm text-gray-6 font-extralight">
                    Max. Deposit
                  </div>
                  <div className="text-sm text-gray-10 font-light">
                    {dummyEvent.detailEvent.maxDeposit}
                  </div>
                </div>
                <div className="flex flex-col w-[142px] gap-1">
                  <div className="text-sm text-gray-6 font-extralight">
                    Min. Bonus
                  </div>
                  <div className="text-sm text-gray-10 font-light">
                    {dummyEvent.detailEvent.minBonus}
                  </div>
                </div>
                <div className="flex flex-col w-[142px] gap-1">
                  <div className="text-sm text-gray-6 font-extralight">
                    Max. Bonus
                  </div>
                  <div className="text-sm text-gray-10 font-light">
                    {dummyEvent.detailEvent.maxBonus}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row p-[1.125rem] bg-base-bg5 border-t border-t-base-bg3">
              <div className="flex flex-row items-center">
                <div className="flex flex-col mr-12">
                  <div className="text-sm text-gray-6 font-light mb-2">
                    Provider
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    {labelProvider.map((item) => (
                      <div
                        key={`provider-${item.label}`}
                        className="bg-base-bg3 border border-gray-1 text-xs text-gray-6 px-2 py-1 rounded-[6px]"
                      >
                        {item.label}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col mr-[92px]">
                  <div className="text-sm text-gray-6 font-light mb-2">
                    Markets
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    {labelMarkets.map((item) => (
                      <div
                        key={`provider-${item.label}`}
                        className="bg-base-bg3 border border-gray-1 text-xs text-gray-6 px-2 py-1 rounded-[6px]"
                      >
                        {item.label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-row items-center self-end bg-base-bg3 border border-gray-1 text-sm text-gray-6 pl-3 pr-2 py-2 h-[36px] rounded-lg">
                More Detail
                <IconChevronRight className="ml-[6px] !w-[1.313rem] !h-[1.5rem]" />
              </div>
            </div>
          </>
        }
      />

      <div className="flex flex-1 border border-gray-1 rounded-2xl bg-base-bg2 overflow-hidden mb-5 mt-5">
        <div className="flex flex-1 flex-col border-t border-base-bg3 mt-[4px] bg-base-bg5 rounded-t-xl">
          <div className="flex flex-1 flex-row px-5 pb-5 items-center pt-[18px]">
            <div className="flex flex-row items-center">
              <Image
                src={"/images/image_event.png"}
                alt="super agent icon"
                width={106}
                height={64}
              />
              <div className="flex flex-col w-[185px] ml-4 mr-[80px]">
                <div className="text-gray-10 text-sm font-extralight mb-1">
                  Monthly Cashback 10%
                </div>
                <div className="flex flex-row items-center text-gray-6 text-sm font-light">
                  Bonus Cashback
                </div>
              </div>
            </div>
            <div className="border-l border-l-gray-1 h-[38px]" />
            <div className="flex flex-1 flex-row items-center pl-16">
              <div className="flex flex-col mr-16">
                <div className="text-gray-6 text-sm font-extralight mb-1">
                  Promotion Period
                </div>
                <div className="flex flex-row items-center text-gray-10 text-sm font-light">
                  20 Oct 2023 to 27 Oct 2023
                </div>
              </div>
              <div className="flex flex-col mr-[68px]">
                <div className="text-gray-6 text-sm font-extralight mb-1">
                  Revenue Generated
                </div>
                <div className="flex flex-row items-center text-gray-10 text-sm font-light">
                  Rp24.600.590
                  <div className="text-sm text-gray-6 font-extralight">,00</div>
                </div>
              </div>
              <div className="flex rounded-md flex-row bg-checkbox border border-gray-9 items-center pr-[12px] pl-2 py-[4px] min-h-[28px]">
                <div className="bg-dot-blue h-2 w-2 rounded-full mr-2" />
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

      <div className="flex flex-1 border border-gray-1 rounded-2xl bg-base-bg2 overflow-hidden mb-5 mt-5">
        <div className="flex flex-1 flex-col border-t border-base-bg3 mt-[4px] bg-base-bg5 rounded-t-xl">
          <div className="flex flex-1 flex-row px-5 pb-5 items-center pt-[18px]">
            <div className="flex flex-row items-center">
              <Image
                src={"/images/image_event.png"}
                alt="super agent icon"
                width={106}
                height={64}
              />
              <div className="flex flex-col w-[185px] ml-4 mr-[80px]">
                <div className="text-gray-10 text-sm font-extralight mb-1">
                  Monthly Cashback 25%
                </div>
                <div className="flex flex-row items-center text-gray-6 text-sm font-light">
                  Bonus Cashback
                </div>
              </div>
            </div>
            <div className="border-l border-l-gray-1 h-[38px]" />
            <div className="flex flex-1 flex-row items-center pl-16">
              <div className="flex flex-col mr-16">
                <div className="text-gray-6 text-sm font-extralight mb-1">
                  Promotion Period
                </div>
                <div className="flex flex-row items-center text-gray-10 text-sm font-light">
                  20 Oct 2023 to 27 Oct 2023
                </div>
              </div>
              <div className="flex flex-col mr-[68px]">
                <div className="text-gray-6 text-sm font-extralight mb-1">
                  Revenue Generated
                </div>
                <div className="flex flex-row items-center text-gray-10 text-sm font-light">
                  Rp24.600.590
                  <div className="text-sm text-gray-6 font-extralight">,00</div>
                </div>
              </div>
              <div className="flex rounded-md flex-row bg-checkbox border border-gray-9 items-center pr-[12px] pl-2 py-[4px] min-h-[28px]">
                <div className="bg-dot-blue h-2 w-2 rounded-full mr-2" />
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

      <div className="flex flex-1 border border-gray-1 rounded-2xl bg-base-bg2 overflow-hidden mb-5 mt-5">
        <div className="flex flex-1 flex-col border-t border-base-bg3 mt-[4px] bg-base-bg5 rounded-t-xl">
          <div className="flex flex-1 flex-row px-5 pb-5 items-center pt-[18px]">
            <div className="flex flex-row items-center">
              <Image
                src={"/images/image_event.png"}
                alt="super agent icon"
                width={106}
                height={64}
              />
              <div className="flex flex-col w-[185px] ml-4 mr-[80px]">
                <div className="text-gray-10 text-sm font-extralight mb-1">
                  Monthly Cashback 10%
                </div>
                <div className="flex flex-row items-center text-gray-6 text-sm font-light">
                  Bonus Cashback
                </div>
              </div>
            </div>
            <div className="border-l border-l-gray-1 h-[38px]" />
            <div className="flex flex-1 flex-row items-center pl-16">
              <div className="flex flex-col mr-16">
                <div className="text-gray-6 text-sm font-extralight mb-1">
                  Promotion Period
                </div>
                <div className="flex flex-row items-center text-gray-10 text-sm font-light">
                  20 Oct 2023 to 27 Oct 2023
                </div>
              </div>
              <div className="flex flex-col mr-[68px]">
                <div className="text-gray-6 text-sm font-extralight mb-1">
                  Revenue Generated
                </div>
                <div className="flex flex-row items-center text-gray-10 text-sm font-light">
                  Rp24.600.590
                  <div className="text-sm text-gray-6 font-extralight">,00</div>
                </div>
              </div>
              <div className="flex rounded-md flex-row bg-checkbox border border-gray-9 items-center pr-[12px] pl-2 py-[4px] min-h-[28px]">
                <div className="bg-dot-blue h-2 w-2 rounded-full mr-2" />
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
    </>
  );
}
