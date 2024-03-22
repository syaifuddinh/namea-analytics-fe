import { CardInfoEvent } from "./CardInfoEvent";
import { CardInfoEventDetail } from "./CardInfoEventDetail";
import { ICardEvent } from "./types";

export const CardEvent: React.FC<ICardEvent> = ({
  id,
  currentId,
  placeholder,
  desc,
  promoPeriod,
  revenueGenerated,
  statusEvent,
  showDetail,
  onPressShow,
  detailEvent,
}) => {
  return (
    <div className="flex flex-1 flex-col border border-gray-1 rounded-2xl bg-base-bg2 overflow-hidden mt-5 mb-5">
      <div
        className={`flex flex-1 flex-col ${
          currentId === id && showDetail ? "border-y " : "border-t"
        } border-gray-1 mt-1 bg-base-bg5 rounded-t-xl border-bg-base3`}
      >
        <CardInfoEvent
          image={"/images/image_event.png"}
          placeholder={placeholder}
          desc={desc}
          promoPeriod={promoPeriod}
          revenueGenerated={revenueGenerated}
          statusEvent={statusEvent}
          id={id}
          currentId={currentId}
          showDetail={showDetail}
          onPressShow={onPressShow}
        />
      </div>
      {currentId === id && showDetail && (
        <CardInfoEventDetail
          createdBy={detailEvent?.createdBy}
          promotionType={detailEvent?.promotionType}
          include={detailEvent?.include}
          bonusAmount={detailEvent?.bonusAmount}
          turnoverMultiplier={detailEvent?.turnoverMultiplier}
          minDeposit={detailEvent?.minDeposit}
          maxDeposit={detailEvent?.maxDeposit}
          minBonus={detailEvent?.minBonus}
          maxBonus={detailEvent?.maxBonus}
        />
      )}
    </div>
  );
};
