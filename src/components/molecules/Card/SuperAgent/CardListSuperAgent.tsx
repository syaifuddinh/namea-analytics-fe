import Image from "next/image";
import clsx from "clsx";
import { ICardListSuperAgent } from "./types";
import {
  IconChevronRight,
  IconDropdown,
  IconSize,
} from "@/components/atoms/Icons";
import { getLinkDetailSuperAgent } from "@/utils/linkFactory";
import Link from "next/link";

export const CardListSuperAgent: React.FC<ICardListSuperAgent> = ({
  id,
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
      <div className="flex flex-1 flex-col border-t border-gray-1 mt-[4px] bg-base-bg5 rounded-t-xl">
        {rank <= 5 ? (
          <div className="max-w-max text-xs text-rank py-[2px] pl-[10px] pr-[2px] bg-bg-rank rounded-tl-xl rounded-br-md font-light">
            Top {rank}
          </div>
        ) : (
          <></>
        )}
        <div
          className={clsx(
            "flex flex-1 flex-row px-5 pb-5  divide-x divide-gray-1 items-center",
            rank > 5 ? "pt-[18px]" : ""
          )}
        >
          <div className="flex flex-row items-center">
            <Image src={image} alt="super agent icon" width={40} height={40} />
            <div className="text-gray-10 text-xs py-1 px-2 mx-3 bg-base-bg3 rounded-3xl font-light">
              {codeAgent}
            </div>
            <div className="w-[160px] text-gray-10 text-sm mr-[0.125rem] font-light">
              {nameAgent}
            </div>
          </div>
          <div className="flex flex-1 flex-row items-center pl-12 gap-16">
            <div className="flex flex-col">
              <div className="text-gray-6 text-sm font-extralight mb-1">
                Total Agent
              </div>
              <div className="text-gray-10 text-sm font-light">
                {totalAgent}
              </div>
            </div>
            <div className="flex flex-col mr-[0.5rem]">
              <div className="text-gray-6 text-sm font-extralight mb-1">
                Total Profit
              </div>
              <div className="flex flex-row items-center text-gray-10 text-sm font-light">
                Rp{totalProfit}
                <div className="text-gray-6">,00</div>
              </div>
            </div>
            <button className="flex flex-row rounded-md border border-checkbox bg-checkbox items-center px-[10px] py-[2px]">
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
              <div className="text-left w-[97px] text-gray-0 text-sm pl-2 mr-[2px] font-extralight">
                {status}
              </div>
              <div className="flex flex-1 justify-end">
                <IconDropdown className={"!w-[1.25rem !h-[1.25rem]"} />
              </div>
            </button>

            <div className="flex flex-1 justify-end items-center">
              <Link href={getLinkDetailSuperAgent(id)}>
                <IconChevronRight className={"w-[1.25rem h-[1.25rem]"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
