import Image from "next/image";
import clsx from "clsx";
import { ICardDashboard } from "./types";
import { IconArrowDown, IconArrowUp } from "@/components/atoms/Icons";

export const CardDashboard: React.FC<ICardDashboard> = ({
  icon,
  label,
  nominal,
  revenue,
}) => {
  return (
    <div className="flex flex-1 border border-gray-1 rounded-2xl bg-base-bg2 overflow-hidden">
      <div className="flex flex-1 border-t border-gray-1 mt-[6px] bg-base-bg5 rounded-t-xl">
        <div className="flex flex-1 border-t border-x border-gray-1 mt-5 mx-5 bg-base-bg4 rounded-t-xl">
          <div className="flex items-center">
            <div className="flex flex-col gap-2 m-5">
              <Image
                src={icon}
                alt=""
                width={40}
                height={40}
                className="mb-2"
              />
              <div className="text-sm text-gray-6">{label}</div>
              <div className="flex flex-row divide-x divide-gray-1 items-center">
                <div className="text-gray-10 text-sm pr-2">{nominal}</div>
                <div className="pl-2">
                  <div className="flex flex-row gap-1 items-center bg-success-1 p-1 rounded-3xl">
                    {revenue?.revenue_profit ? (
                      <IconArrowUp className="text-success-10 w-[14px] h-[14px]" />
                    ) : (
                      <IconArrowDown className="text-alert-10 w-[14px] h-[14px]" />
                    )}
                    <div
                      className={clsx(
                        "text-sm",
                        revenue?.revenue_profit
                          ? "text-success-10"
                          : "text-alert-10"
                      )}
                    >
                      {revenue?.revenue_percentage}
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
