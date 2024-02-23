import Image from "next/image";
import clsx from "clsx";
import { ICardDashboard } from "./types";
import { IconArrowDown, IconArrowUp, IconSize } from "@/components/atoms/Icons";

export const CardDashboard: React.FC<ICardDashboard> = ({
  icon,
  placeholder,
  label,
  revenueProfit,
  revenuePercentage,
}) => {
  return (
    <div className="flex flex-1 border border-gray-1 rounded-2xl bg-base-bg2 overflow-hidden">
      <div className="flex flex-1 border-t border-gray-1 mt-[4px] bg-base-bg5 rounded-t-xl">
        <div className="flex flex-1 border-t border-x border-gray-1 mt-[1.125rem] mx-[1.125rem] bg-base-bg4 rounded-t-xl">
          <div className="flex items-center">
            <div className="flex flex-col gap-[0.125rem] m-5">
              <Image
                src={icon}
                alt=""
                width={40}
                height={40}
                className="mb-[0.625rem]"
              />
              <div className="text-sm text-gray-6 font-extralight mb-[0.125rem]">
                {placeholder}
              </div>
              <div className="flex flex-row divide-x divide-gray-1 items-center">
                <div className="text-gray-10 text-[1rem] pr-2">{label}</div>
                <div className="pl-2">
                  <div className="flex flex-row gap-1 items-center bg-success-1 py-[2px] pl-1 pr-[6px] rounded-3xl">
                    {revenueProfit ? (
                      <IconArrowUp className="text-success-10 w-[0.825rem] h-[0.825rem]" />
                    ) : (
                      <IconArrowDown className="text-alert-10 w-[0.825rem] h-[0.825rem]" />
                    )}
                    <div
                      className={clsx(
                        "text-[0.825rem] font-light",
                        revenueProfit ? "text-success-10" : "text-alert-10"
                      )}
                    >
                      {revenuePercentage}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
