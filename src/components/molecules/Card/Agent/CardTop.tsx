import { IconArrowDown, IconArrowUp } from "@/components/atoms/Icons";
import clsx from "clsx";
import { ICardTop } from "./types";
import Image from "next/image";

export const CardTop: React.FC<ICardTop> = ({
  icon,
  logo,
  placeholder,
  value,
  barValue,
  className,
}) => {
  return (
    <div
      className={clsx(
        "flex flex-1 border border-gray-1 rounded-2xl bg-base-bg4 overflow-hidden p-5",
        className
      )}
    >
      <div className="flex flex-col flex-1 border border-base-bg3 bg-base-bg4 rounded-xl pl-2 py-2 pr-5">
        <div className="flex flex-row items-center gap-[10px]">
          {logo ? (
            <Image src={logo} alt="logo" width={32} height={32} />
          ) : (
            <div className="flex border border-gray-1 bg-base-bg3 w-8 h-8 items-center justify-center rounded-[4px]">
              {icon}
            </div>
          )}
          <div className="flex flex-1 flex-col">
            <div className="flex flex-1 flex-row items-center justify-between mb-[6px]">
              <div className="text-sm text-gray-10">{placeholder}</div>
              <div className="text-sm text-success-10">{value}</div>
            </div>
            <div className="w-full bg-success-1 rounded-full h-1.5">
              <div
                className={`bg-success-10 h-1.5 rounded-full`}
                style={{ width: barValue + "%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
