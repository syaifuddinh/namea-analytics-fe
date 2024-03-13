import clsx from "clsx";
import { ICardMemberList } from "./types";
import { CardInfoMember } from "./CardInfoMember";
import { CardRecentMarkets } from "./CardRecentMarkets";
import { CardWeeklyDepositAnalysis } from "./CardWeeklyDepositAnalysis";
import { CardDashboard } from "../CardDashboard";
import dummyCrypto from "@/data/dummyCrypto.json";
import dummyWeeklyDeposit from "@/data/dummyDataWeeklyDeposit.json";

export const CardMemberList: React.FC<ICardMemberList> = ({
  id,
  currentId,
  nameAgent,
  depositDate,
  statusAgent,
  showDetail,
  onPressShow,
}) => {
  console.log("id ==>", id);
  console.log("currentId ==>", currentId);
  console.log("showDetail ==>", showDetail);

  return (
    <div className="flex flex-1 flex-col border border-gray-1 rounded-2xl bg-base-bg2 overflow-hidden mt-5 mb-5">
      <div
        className={`flex flex-1 flex-col ${
          showDetail ? "border-y " : "border-t"
        } border-gray-1 mt-1 bg-base-bg5 rounded-t-xl border-bg-base3`}
      >
        <CardInfoMember
          id={id}
          image={"/images/avatar_dummy.png"}
          nameAgent={nameAgent}
          depositDate={depositDate}
          statusAgent={statusAgent}
          showDetail={showDetail}
          currentId={currentId}
          onPressShow={onPressShow}
        />
      </div>
      {currentId === id && showDetail && (
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
      )}
    </div>
  );
};
