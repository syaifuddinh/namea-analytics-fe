import { IconArrowDown, IconArrowUp } from "@/components/atoms/Icons";
import clsx from "clsx";
import Image from "next/image";
import { ICardDashboard } from "./types";
import HeadlineCard from "@/components/atoms/card/headline"

export const CardDashboardSA: React.FC<ICardDashboard> = ({
  icon,
  placeholder,
  value,
  profit,
  percentage,
  className,
  imgStyle = "mb-[0.375rem]",
  valueStyle,
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
                className={"mb-[0.875rem]"}
              />
              <div className="text-sm text-gray-6 font-extralight mb-[0.125rem]">
                {placeholder}
              </div>
              <div className="pl-3">
                <div className="flex flex-row !gap-[0.125rem] items-center bg-success-1 py-[2px] pl-1 pr-[6px] rounded-3xl">
                  {profit ? (
                    <IconArrowUp className="text-success-10 !w-[0.875rem] !h-[0.875rem]" />
                  ) : (
                    <IconArrowDown className="text-alert-10 !w-[0.875rem] !h-[0.875rem]" />
                  )}
                >
                  {value}
                  {value.includes("Rp") && (
                    <div className="text-gray-6 text-[1rem] font-light">
                      ,00
                    </div>
                  )}
                </div>
                <div className="pl-3">
                  <div
                    className={`flex flex-row !gap-[0.125rem] items-center ${
                      profit ? "bg-success-1" : " bg-alert-1"
                    } py-[2px] pl-1 pr-[6px] rounded-3xl`}
                  >
                    {profit ? (
                      <IconArrowUp className="text-success-10 !w-[0.875rem] !h-[0.875rem]" />
                    ) : (
                      <IconArrowDown className="text-alert-10 !w-[0.875rem] !h-[0.875rem]" />
                    )}
                  >
                    {percentage}
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
