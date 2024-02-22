import Image from "next/image";
import clsx from "clsx";
import { ICardListSuperAgent } from "./types";
import { IconChevronRight, IconDropdown } from "@/components/atoms/Icons";

export const CardListSuperAgent: React.FC<ICardListSuperAgent> = ({
  rank,
  image,
  codeAgent,
  nameAgent,
  totalAgent,
  totalProfit,
  status,
}) => {
  return (
    <div className="flex flex-1 border border-gray-1 rounded-2xl bg-base-bg2 overflow-hidden mb-5">
      <div className="flex flex-1 flex-col border-t border-gray-1 mt-[6px] bg-base-bg5 rounded-t-xl">
        {rank <= 5 ? (
          <div className="max-w-max text-xs text-rank py-[2px] px-[10px] bg-bg-rank rounded-tl-xl rounded-br-md">
            Top {rank}
          </div>
        ) : (
          <></>
        )}
        <div
          className={clsx(
            "flex flex-1 flex-row px-5 pb-5  divide-x divide-gray-1 items-center",
            rank > 5 ? "pt-5" : "pt-[2px]"
          )}
        >
          <div className="flex flex-row items-center">
            <Image src={image} alt="super agent icon" width={40} height={40} />
            <div className="text-gray-10 text-xs py-1 px-2 mx-3 bg-base-bg3 rounded-3xl">
              {codeAgent}
            </div>
            <div className="w-[160px] text-gray-10 text-sm mr-6">
              {nameAgent}
            </div>
          </div>
          <div className="flex flex-1 flex-row items-center pl-12 gap-16">
            <div className="flex flex-col">
              <div className="text-gray-6 text-sm">Total Agent</div>
              <div className="text-gray-10 text-sm">{totalAgent}</div>
            </div>
            <div className="flex flex-col">
              <div className="text-gray-6 text-sm">Total Profit</div>
              <div className="text-gray-10 text-sm">Rp{totalProfit}</div>
            </div>
            <button className="flex flex-row rounded-md border border-gray-4 bg-checkbox items-center px-[10px]">
              <div
                className={clsx(
                  "bg-dot-blue h-2 w-2 rounded-full",
                  status === "Active"
                    ? "bg-dot-blue"
                    : status === "In Process"
                    ? "bg-warning"
                    : "bg-danger-medium"
                )}
              />
              <div className="text-left w-[97px] text-gray-0 text-sm py-[6px] pl-2 mr-5">
                {status}
              </div>
              <div className="flex flex-1 justify-end">
                <IconDropdown />
              </div>
            </button>

            <div className="flex flex-1 justify-end items-center">
              <button className="max-w-max">
                <IconChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
