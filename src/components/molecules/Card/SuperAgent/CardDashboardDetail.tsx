import Image from "next/image";
import { ICardDashboardAgent } from "./types";
import clsx from "clsx";

export const CardDashboardDetail: React.FC<ICardDashboardAgent> = ({
  icon,
  value,
  placeholder,
}) => {
  return (
    <div className="flex flex-1 border border-gray-1 rounded-2xl bg-base-bg2 overflow-hidden">
      <div className="flex flex-1 border-t border-gray-1 mt-[4px] bg-base-bg5 rounded-t-xl">
        <div className="flex flex-1 border-t border-x border-gray-1 mt-[18px] mx-[18px] bg-base-bg4 rounded-t-xl">
          <div className="flex items-center">
            <div className="flex flex-row gap-4 m-5 items-center">
              <Image
                src={icon}
                alt=""
                width={40}
                height={40}
                className="!w-10 !h-10"
              />
              <div className="flex flex-col">
                <div
                  className={clsx(
                    "text-base text-gray-10 pb-[2px] font-light",
                    value.includes("Rp") && "flex flex-row items-center"
                  )}
                >
                  {value}
                  {value.includes("Rp") && (
                    <div className="text-gray-6">,00</div>
                  )}
                </div>
                <div className="text-gray-6 text-sm font-extralight">
                  {placeholder}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
