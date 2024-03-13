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
  ];
  return (
    <div
      className={clsx(
        "flex flex-1 flex-row items-center justify-between py-5",
        className
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="text-gray-6 text-sm">Item per page</div>
        <div className="flex flex-row items-center bg-base-bg3 rounded-[4px] pl-2 py-1">
          <div className="text-gray-10 text-sm pr-[2px]">10</div>
          <button>
            <IconSmallChevronDown />
          </button>
        </div>
      </div>
      <div className="flex flex-row items-center rounded-lg px-4 bg-base-bg5 border border-base-bg3 text-sm">
        <button className="flex flex-row items-center pr-5">
          <IconArrowLeft />
          <div className="text-gray-6 pl-2">Previous</div>
        </button>
        <div className="flex flex-row items-center">
          {x.map((item) => (
            <button
              key={item.label}
              className={`px-[15px] py-[10px] ${
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
          <div className="text-gray-6 pr-2">Next</div>
          <IconArrowRight />
        </button>
      </div>
      <div className="text-gray-6 text-sm">{totalAgent} Agents in total</div>
    </div>
  );
};
