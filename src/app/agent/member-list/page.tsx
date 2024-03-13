"use client";
import { CardMemberList } from "@/components/molecules/Card/Agent";
import { Pagination } from "@/components/molecules/Footer/Pagination";
import { Header } from "@/components/molecules/Header";
import { PageHeaderSection } from "@/components/molecules/Header/Agent";
import { useState } from "react";
import dummyDataMember from "@/data/dummyDataMember.json";

export default function MemberListAgent() {
  //   const lang = await getDictionary();
  const [search, setSearch] = useState<string>("");
  const [section, setSection] = useState(1);

  const [showDetail, setShowDetail] = useState(false);
  const [currentIdCard, setCurrentIdCard] = useState(0);

  const toggleShow = (id: number) => {
    if (currentIdCard === id) {
      setShowDetail(!showDetail);
      setCurrentIdCard(id);
    } else if (currentIdCard !== id) {
      if (!showDetail) {
        setShowDetail(true);
      }
      setCurrentIdCard(id);
    }
  };

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

      {dummyDataMember.map((item) => (
        <CardMemberList
          key={`member-${item.id}`}
          id={item.id}
          nameAgent={item.nameAgent}
          depositDate={item.depositDate}
          statusAgent={item.statusAgent}
          currentId={currentIdCard}
          showDetail={showDetail}
          onPressShow={() => toggleShow(item.id)}
        />
      ))}

      <Pagination className="mt-5" totalAgent={28} />
    </>
  );
}
