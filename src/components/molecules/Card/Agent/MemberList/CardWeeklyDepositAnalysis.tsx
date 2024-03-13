import { ICardWeeklyDeposit, IWeeklyDeposit, WeeklyDeposit } from "./types";

export const CardWeeklyDepositAnalysis: React.FC<ICardWeeklyDeposit> = ({
  data,
}) => {
  return (
    <div className="bg-base-bg5 border-t border-t-base-bg3 p-[1.188rem]">
      <div className="text-gray-10 text-sm font-light mb-3">
        Weekly Deposit Analysis
      </div>
      <div className="flex flex-col gap-4">
        {data.map((item: IWeeklyDeposit) => (
          <div
            key={`total-weekly-deposit-${item.id}`}
            className="flex flex-row items-center bg-base-bg4 border border-base-bg3 rounded-xl p-[1.188rem]"
          >
            <div className="flex w-[189px] flex-col mr-[97px]">
              <div className="flex flex-row items-center gap-[10px] mb-[6px]">
                <div className="text-sm text-gray-6 font-extralight">
                  Total Deposit
                </div>
                <div className="bg-gray-2 h-[6px] w-[6px] rounded-full" />
                <div className="text-sm text-gray-10 font-extralight">
                  {item.weekDeposit}
                </div>
              </div>
              <div className="flex flex-row items-center text-sm text-gray-10 font-light">
                {item.totalDeposit}
                <div className="text-sm text-gray-6">,00</div>
              </div>
            </div>
            <div className="border-l border-l-gray-1 h-6" />
            <div className="flex flex-1 flex-row items-center ml-[46px] gap-3">
              {item.weeklyDeposit.map((x: WeeklyDeposit) => (
                <div
                  key={`weekly-deposit-${x.id}`}
                  className={`flex flex-row items-center w-[110px] border ${
                    x.deposit === "0"
                      ? "bg-base-bg3 border-base-bg3"
                      : "bg-success-1 border-success-2"
                  } rounded-full py-1 pl-1 pr-3 gap-2`}
                >
                  <div
                    className={`flex border rounded-full h-6 w-6 justify-center items-center text-sm ${
                      x.deposit === "0"
                        ? "text-gray-6 bg-base-bg3 border-base-bg3"
                        : "text-gray-10 bg-success-1 border-success-2"
                    }`}
                  >
                    {x.codeDay}
                  </div>
                  <div
                    className={`${
                      x.deposit === "0" && "flex flex-row items-center"
                    }`}
                  >
                    <div className="text-xs text-gray-10 font-light">
                      Rp{x.deposit}
                    </div>
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
  );
};
