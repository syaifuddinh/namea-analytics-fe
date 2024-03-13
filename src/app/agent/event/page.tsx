"use client";
import {
  IconChevronDown,
  IconChevronRight,
  IconChevronUp,
  IconSmallChevronDown,
  IconThreeDotVertical,
} from "@/components/atoms/Icons";
import {
  CardContainer,
  CardDashboard,
  CardInfoEvent,
  CardInfoEventDetail,
  CardEvent,
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

      <CardContainer>
        <CardInfoEvent
          image={"/images/image_event.png"}
          placeholder={"Monthly Cashback 15%"}
          desc={"Bonus Cashback"}
          promoPeriod={"20 Oct 2023 to 27 Oct 2023"}
          revenueGenerated={"Rp24.600.590"}
          statusEvent={"Active"}
        />
      </CardContainer>

      <CardEvent
        containerBgColor="border-bg-base3"
        customHeader={
          <CardInfoEvent
            image={"/images/image_event.png"}
            placeholder={"Monthly Cashback 15%"}
            desc={"Bonus Cashback"}
            promoPeriod={"20 Oct 2023 to 27 Oct 2023"}
            revenueGenerated={"Rp24.600.590"}
            statusEvent={"Active"}
          />
        }
        divider={false}
        renderContent={
          <CardInfoEventDetail
            createdBy={dummyEvent.detailEvent.createdBy}
            promotionType={dummyEvent.detailEvent.promotionType}
            include={dummyEvent.detailEvent.include}
            bonusAmount={dummyEvent.detailEvent.bonusAmount}
            turnoverMultiplier={dummyEvent.detailEvent.turnoverMultiplier}
            minDeposit={dummyEvent.detailEvent.minDeposit}
            maxDeposit={dummyEvent.detailEvent.maxDeposit}
            minBonus={dummyEvent.detailEvent.minBonus}
            maxBonus={dummyEvent.detailEvent.maxBonus}
          />
        }
      />

      <CardContainer>
        <CardInfoEvent
          image={"/images/image_event.png"}
          placeholder={"Monthly Cashback 10%"}
          desc={"Bonus Cashback"}
          promoPeriod={"20 Oct 2023 to 27 Oct 2023"}
          revenueGenerated={"Rp24.600.590"}
          statusEvent={"Active"}
        />
      </CardContainer>

      <CardContainer>
        <CardInfoEvent
          image={"/images/image_event.png"}
          placeholder={"Monthly Cashback 25%"}
          desc={"Bonus Cashback"}
          promoPeriod={"20 Oct 2023 to 27 Oct 2023"}
          revenueGenerated={"Rp24.600.590"}
          statusEvent={"Active"}
        />
      </CardContainer>

      <CardContainer>
        <CardInfoEvent
          image={"/images/image_event.png"}
          placeholder={"Monthly Cashback 10%"}
          desc={"Bonus Cashback"}
          promoPeriod={"20 Oct 2023 to 27 Oct 2023"}
          revenueGenerated={"Rp24.600.590"}
          statusEvent={"Active"}
        />
      </CardContainer>
    </>
  );
}
