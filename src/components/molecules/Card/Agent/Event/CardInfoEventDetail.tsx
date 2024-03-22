import { IconChevronRight } from "@/components/atoms/Icons";
import { ICardInfoEventDetail } from "./types";

export const CardInfoEventDetail: React.FC<ICardInfoEventDetail> = ({
  createdBy,
  promotionType,
  include,
  bonusAmount,
  turnoverMultiplier,
  minDeposit,
  maxDeposit,
  minBonus,
  maxBonus,
}) => {
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

  return (
    <>
      <div className="flex flex-col p-[1.125rem] gap-y-5 gap-x-4">
        <div className="flex flex-row items-center">
          <div className="flex flex-col w-[235px] gap-1">
            <div className="text-sm text-gray-6 font-extralight">
              Created by
            </div>
            <div className="text-sm text-gray-10 font-light">{createdBy}</div>
          </div>
          <div className="flex flex-col w-[235px] gap-1">
            <div className="text-sm text-gray-6 font-extralight">
              Promotion Type
            </div>
            <div className="text-sm text-gray-10 font-light">
              {promotionType}
            </div>
          </div>
          <div className="flex flex-col w-[235px] gap-1">
            <div className="text-sm text-gray-6 font-extralight">Include?</div>
            <div className="text-sm text-gray-10 font-light">{include}</div>
          </div>
          <div className="flex flex-col w-[235px] gap-1">
            <div className="text-sm text-gray-6 font-extralight">
              Bonus Amount
            </div>
            <div className="text-sm text-gray-10 font-light">{bonusAmount}</div>
          </div>
          <div className="flex flex-col w-[235px] gap-1">
            <div className="text-sm text-gray-6 font-extralight">
              Turnover Multiplier
            </div>
            <div className="text-sm text-gray-10 font-light">
              {turnoverMultiplier}
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center">
          <div className="flex flex-col w-[235px] gap-1">
            <div className="text-sm text-gray-6 font-extralight">
              Min. Deposit
            </div>
            <div className="text-sm text-gray-10 font-light">{minDeposit}</div>
          </div>
          <div className="flex flex-col w-[235px] gap-1">
            <div className="text-sm text-gray-6 font-extralight">
              Max. Deposit
            </div>
            <div className="text-sm text-gray-10 font-light">{maxDeposit}</div>
          </div>
          <div className="flex flex-col w-[235px] gap-1">
            <div className="text-sm text-gray-6 font-extralight">
              Min. Bonus
            </div>
            <div className="text-sm text-gray-10 font-light">{minBonus}</div>
          </div>
          <div className="flex flex-col w-[235px] gap-1">
            <div className="text-sm text-gray-6 font-extralight">
              Max. Bonus
            </div>
            <div className="text-sm text-gray-10 font-light">{maxBonus}</div>
          </div>
        </div>
      </div>

      <div className="flex flex-row px-[1.125rem] pb-[1.125rem] pt-5 bg-base-bg5 border-t border-t-base-bg3">
        <div className="flex flex-row items-center">
          <div className="flex flex-col mr-12">
            <div className="text-sm text-gray-6 font-extralight mb-2">
              Provider
            </div>
            <div className="flex flex-row items-center gap-2">
              {labelProvider.map((item) => (
                <div
                  key={`provider-${item.label}`}
                  className="bg-base-bg3 border border-gray-1 text-xs text-gray-6 px-2 py-1 rounded-[6px] font-extralight"
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col mr-[92px]">
            <div className="text-sm text-gray-6 font-extralight mb-2">
              Markets
            </div>
            <div className="flex flex-row items-center gap-2">
              {labelMarkets.map((item) => (
                <div
                  key={`provider-${item.label}`}
                  className="bg-base-bg3 border border-gray-1 text-xs text-gray-6 px-2 py-1 rounded-[6px] font-extralight"
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center self-end bg-base-bg3 border border-gray-1 text-sm text-gray-6 pl-3 pr-2 py-2 h-[36px] rounded-lg font-extralight">
          More Detail
          <IconChevronRight className="ml-[6px] !w-[1.313rem] !h-[1.5rem]" />
        </div>
      </div>
    </>
  );
};
