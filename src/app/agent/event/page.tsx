"use client";
import { CardEvent } from "@/components/molecules/Card/Agent";
import { Header } from "@/components/molecules/Header";
import { PageHeaderSection } from "@/components/molecules/Header/Agent";
import dummyEvent from "@/data/dummyEvent.json";
import { useState } from "react";

export default function EventAgent() {
  //   const lang = await getDictionary();
  const [search, setSearch] = useState<string>("");
  const [section, setSection] = useState(2);

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
        placeholder="On Going Event"
        textStyle="tracking-[0.5px]"
        subStyle="tracking-[0px]"
        subPlaceholder="All on going event created by agent"
      />

      {dummyEvent.map((item) => (
        <CardEvent
          key={`event-${item.id}`}
          id={item.id}
          currentId={currentIdCard}
          placeholder={item.eventName}
          desc={item.descEventName}
          promoPeriod={item.promotionPeriode}
          revenueGenerated={item.revenueGenerated}
          statusEvent={item.eventStatus}
          detailEvent={item.detailEvent}
          showDetail={showDetail}
          onPressShow={() => toggleShow(item.id)}
        />
      ))}
    </>
  );
}
