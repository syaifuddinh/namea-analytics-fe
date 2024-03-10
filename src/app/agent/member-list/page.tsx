"use client";
import {
  CardContainer,
  CardDashboard,
  CardInfoMember,
  CardMemberList,
  CardRecentMarkets,
  CardWeeklyDepositAnalysis,
} from "@/components/molecules/Card/Agent";
import { Pagination } from "@/components/molecules/Footer/Pagination";
import { Header } from "@/components/molecules/Header";
import { PageHeaderSection } from "@/components/molecules/Header/Agent";
import dummyCrypto from "@/data/dummyCrypto.json";
import dummyWeeklyDeposit from "@/data/dummyDataWeeklyDeposit.json";
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
        placeholder="Member List"
        subPlaceholder="Monitor Member Information"
      />

      <CardContainer>
        <CardInfoMember
          image={"/images/avatar_dummy.png"}
          nameAgent={"Tobias J. Bourgault"}
          depositDate={"26 July 2023, 09.30AM"}
          statusAgent={"Active"}
        />
      </CardContainer>

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

            <CardRecentMarkets data={dummyCrypto} />
            <CardWeeklyDepositAnalysis data={dummyWeeklyDeposit} />
          </>
        }
      />

      <CardContainer>
        <CardInfoMember
          image={"/images/avatar_dummy.png"}
          nameAgent={"Thomas J. Jones"}
          depositDate={"26 July 2023, 09.30AM"}
          statusAgent={"Active"}
        />
      </CardContainer>

      <CardContainer>
        <CardInfoMember
          image={"/images/avatar_dummy.png"}
          nameAgent={"Clifford A. Correa"}
          depositDate={"26 July 2023, 09.30AM"}
          statusAgent={"Active"}
        />
      </CardContainer>

      <CardContainer>
        <CardInfoMember
          image={"/images/avatar_dummy.png"}
          nameAgent={"Jesus T. Heffner"}
          depositDate={"26 July 2023, 09.30AM"}
          statusAgent={"Active"}
        />
      </CardContainer>

      <Pagination className="mt-5" totalAgent={28} />
    </>
  );
}
