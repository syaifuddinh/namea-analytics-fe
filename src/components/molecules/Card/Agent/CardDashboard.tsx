import { IconArrowDown, IconArrowUp } from "@/components/atoms/Icons";
import clsx from "clsx";
import { ICardDashboard } from "./types";

export const CardDashboard: React.FC<ICardDashboard> = ({
  icon,
  placeholder,
  value,
  profit,
  percentage,
  desc,
  valueStyle = "mb-4",
  pContainer = "p-5",
  currencyStyle = "text-gray-6",
}) => {
  return (
    <div className="flex flex-1 border border-gray-1 rounded-2xl bg-base-bg2 overflow-hidden">
      <div
        className={`flex flex-col flex-1 border-t border-gray-1 mt-[4px] bg-base-bg5 rounded-t-xl ${pContainer}`}
      >
        <div className="text-sm text-gray-6 font-extralight mb-1">
          {placeholder}
        </div>
        <div
          className={clsx(
            `text-[1rem] ${valueStyle} text-gray-10`,
            value.includes("Rp") && "flex flex-row items-center"
          )}
        >
          {value}
          {value.includes("Rp") && (
            <div className={`${currencyStyle} text-[1rem] font-light`}>,00</div>
          )}
        </div>
        {percentage && (
          <div className="flex flex-row items-center gap-2">
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
            <div className="text-xs text-gray-6 font-extralight">{desc}</div>
          </div>
        )}
      </div>
    </div>
  );
};
