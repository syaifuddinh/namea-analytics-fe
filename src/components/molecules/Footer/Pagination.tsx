import {
  IconArrowLeft,
  IconArrowRight,
  IconSmallChevronDown,
} from "@/components/atoms/Icons";
import { IPagination } from "./types";
import clsx from "clsx";

export const Pagination: React.FC<IPagination> = ({
  totalAgent,
  className,
}) => {
  const x = [
    { label: "1", active: true },
    { label: "2", active: false },
    { label: "3", active: false },
    { label: "4", active: false },
  ];
  return (
    <div
      className={clsx(
        "flex flex-1 flex-row items-center justify-between py-5",
        className
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="text-gray-6 text-sm font-extralight">Item per page</div>
        <div className="flex flex-row items-center bg-base-bg3 rounded-[4px] pl-[10px] pr-1 py-[2px]">
          <div className="text-gray-10 text-xs font-light pr-[2px]">10</div>
          <button>
            <IconSmallChevronDown className="!w-[1.25rem] !h-[1.5rem]" />
          </button>
        </div>
      </div>
      <div className="flex flex-row items-center rounded-lg px-4 bg-base-bg5 border border-base-bg3 text-sm">
        <button className="flex flex-row items-center pr-5">
          <IconArrowLeft />
          <div className="text-gray-6 pl-2 font-light">Previous</div>
        </button>
        <div className="flex flex-row items-center">
          {x.map((item) => (
            <button
              key={item.label}
              className={`px-[15px] py-[10px] font-light ${
                item.active
                  ? "text-gray-10 border border-base-bg3 bg-base-bg3"
                  : "text-gray-6 border-r border-r-base-bg3"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button className="flex flex-row items-center pl-5">
          <div className="text-gray-6 pr-2 font-light">Next</div>
          <IconArrowRight className="!w-[1.25rem] !h-[1.5rem]" />
        </button>
      </div>
      <div className="text-gray-6 text-sm font-extralight">
        {totalAgent} Agents in total
      </div>
    </div>
  );
};
