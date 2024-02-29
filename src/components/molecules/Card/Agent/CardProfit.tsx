import { IconArrowDown, IconArrowUp } from "@/components/atoms/Icons";
import clsx from "clsx";
import { ICardProfit } from "./types";

export const CardProfit: React.FC<ICardProfit> = ({
  placeholder,
  value,
  profit,
  percentage,
  iconDot,
}) => {
  return (
    <div className="flex flex-1 border border-gray-1 rounded-2xl bg-base-bg2 overflow-hidden">
      <div className="flex flex-row flex-1 border-t border-gray-1 mt-[4px] bg-base-bg5 rounded-t-xl p-5">
        {iconDot ? iconDot : null}
        <div className="flex flex-1 flex-col h-[88px]">
          <div className="text-sm text-gray-6 font-extralight mb-1">
            {placeholder}
          </div>
          <div className="text-gray-10 text-[1rem] mb-4">{value}</div>
        </div>
        <div className="flex flex-row items-start gap-2">
          <div className="flex flex-row gap-[0.125rem] items-center bg-success-1 py-[2px] pl-1 pr-[6px] rounded-3xl max-w-max">
            {profit ? (
              <IconArrowUp className="text-success-10 !w-[1.25rem] !h-[1.25rem]" />
            ) : (
              <IconArrowDown className="text-alert-10 !w-[1.25rem] !h-[1.25rem]" />
            )}
            <div
              className={clsx(
                "text-[0.75rem] font-light",
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
