import { IconArrowDown, IconArrowUp } from "@/components/atoms/Icons";
import clsx from "clsx";
import Image from "next/image";
import { ICardDashboard } from "./types";

export const CardDashboardSA: React.FC<ICardDashboard> = ({
  icon,
  placeholder,
  value,
  profit,
  percentage,
  className,
  imgStyle = "mb-[0.375rem]",
  topLineGap = "4px",
  contentMarginTop = "1.125rem",
  contentMarginX = "1.125rem",
  valueStyle,
}) => {
  return (
    <div className="flex flex-1 border border-gray-1 rounded-2xl bg-base-bg2 overflow-hidden">
      <div
          className="flex flex-1 border-t border-gray-1 bg-base-bg5 rounded-t-xl"
          style={{ "marginTop": topLineGap }}
       >
        <div
            className="flex flex-1 border-t border-x border-gray-1 bg-base-bg4 rounded-t-xl"
            style={{ "marginTop": contentMarginTop, "marginLeft": contentMarginX, "marginRight": contentMarginX }}
        >
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
              <div className="flex flex-row divide-x divide-gray-1 items-center">
                <div
                  className={clsx(
                    `text-gray-10 text-[1rem] pr-3 font-light tracking-[0.2px]`,
                    value.includes("Rp") && "flex flex-row items-center"
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
          </div>
        </div>
      </div>
    </div>
  );
};
