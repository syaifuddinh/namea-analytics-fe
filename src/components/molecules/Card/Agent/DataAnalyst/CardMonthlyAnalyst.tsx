import clsx from "clsx";
import { ICardMonthlyAnalyst } from "./types";
import { IconArrowDown, IconArrowUp } from "@/components/atoms/Icons";

export const CardMonthlyAnalyst: React.FC<ICardMonthlyAnalyst> = ({
  month,
  revenue,
  profit,
  percentage,
}) => {
  return (
    <div className="border border-gray-1 rounded-2xl bg-base-bg2 w-[81.172px]">
      <div className="flex flex-col border-t border-gray-1 mt-1 bg-base-bg5 rounded-t-xl w-[81.172px]">
        <div className="flex p-2 justify-center text-gray-6 text-sm">
          {month}
        </div>
        <div className="flex flex-1 border-b border-base-bg3" />
        <div className="flex p-2 justify-center text-gray-10 text-sm">
          {revenue}
        </div>
        <div className="flex flex-1 border-b border-base-bg3" />
        <div className="flex p-2 justify-center">
          <div
            className={`flex flex-row gap-1 items-center ${
              profit ? "bg-success-1" : "bg-alert-1"
            } py-[2px] pl-1 pr-[6px] rounded-3xl max-w-max`}
          >
            {profit ? (
              <IconArrowUp className="text-success-10 !w-[13px] !h-[13px]" />
            ) : (
              <IconArrowDown className="text-alert-10 !w-[13px] !h-[13px]" />
            )}
            <div
              className={clsx(
                "text-xs font-light",
                profit ? "text-success-10" : "text-alert-10"
              )}
            >
              {percentage}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
