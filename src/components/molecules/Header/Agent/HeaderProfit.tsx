import Image from "next/image";
import { IHeaderProfit } from "./types";
import clsx from "clsx";
import { IconArrowDown, IconArrowUp } from "@/components/atoms/Icons";

export const HeaderProfit: React.FC<IHeaderProfit> = ({
  title,
  category,
  value,
}) => {
  return (
    <div className="flex flex-1 flex-row items-center p-5">
      <div className="w-8 h-8 bg-gray-1 rounded-full mr-3" />
      <div className="text-base text-gray-10 font-light flex flex-1">
        {title}
      </div>
      <div
        className={clsx(
          "py-1 px-2 text-xs  font-medium bg-success-1 rounded-3xl mr-[10px]",
          category === "Healthy" ? "text-success-10" : "text-alert-10"
        )}
      >
        {category}
      </div>
      <div className="flex flex-row items-center bg-base-bg3 border border-base-bg3 pr-[10px] py-1 pl-[6px] rounded-full gap-[2px] justify-end">
        {category === "Healthy" ? (
          <IconArrowUp className="text-success-10 !w-[13px] !h-[13px]" />
        ) : (
          <IconArrowDown className="text-success-10 !w-[13px] !h-[13px]" />
        )}
        <div className="text-xs text-gray-6 font-medium">{`${value} Profit Margin`}</div>
      </div>
    </div>
  );
};
