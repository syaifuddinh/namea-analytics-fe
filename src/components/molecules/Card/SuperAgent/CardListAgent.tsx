import Image from "next/image";
import clsx from "clsx";
import { ICardListAgent } from "./types";
import { IconChevronRight, IconChevronDown } from "@/components/atoms/Icons";

export const CardListAgent: React.FC<ICardListAgent> = ({
  rank,
  image,
  codeAgent,
  nameAgent,
  bitcoin,
  ethereum,
  totalTurnOver,
  totalProfit,
  status,
}) => {
  return (
    <div className="flex flex-1 border border-gray-1 rounded-2xl bg-base-bg2 overflow-hidden mb-4">
      <div className="flex flex-1 flex-col border-t border-gray-1 mt-[6px] bg-base-bg5 rounded-t-xl">
        <div className="flex flex-1 flex-row px-5 pb-5 divide-x divide-gray-1 items-center pt-5 ">
          <div className="flex flex-row items-center">
            <Image src={image} alt="super agent icon" width={40} height={40} />
            <div className="text-gray-10 text-xs py-1 px-2 mx-3 bg-base-bg3 rounded-3xl">
              {codeAgent}
            </div>
            <div className="w-[160px] text-gray-10 text-sm mr-[0.125rem]">
              {nameAgent}
            </div>
          </div>
          <div className="flex flex-1 flex-row items-center pl-12">
            <div className="flex flex-1 flex-col">
              <div className="text-gray-6 text-sm">Profit Bitcoin</div>
              <div
                className={clsx(
                  "text-sm",
                  bitcoin.profit ? "text-gray-10" : "text-alert-10",
                  bitcoin.nominal.includes("Rp") && "flex flex-row items-center"
                )}
              >
                {bitcoin.nominal}
                {bitcoin.nominal.includes("Rp") && (
                  <div
                    className={bitcoin.profit ? "text-gray-6" : "text-alert-6"}
                  >
                    ,00
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-1 flex-col">
              <div className="text-gray-6 text-sm">Profit Ethereum</div>
              <div
                className={clsx(
                  "text-sm",
                  ethereum.profit ? "text-gray-10" : "text-alert-10",
                  ethereum.nominal.includes("Rp") &&
                    "flex flex-row items-center"
                )}
              >
                {ethereum.nominal}
                {ethereum.nominal.includes("Rp") && (
                  <div
                    className={ethereum.profit ? "text-gray-6" : "text-alert-6"}
                  >
                    ,00
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-1 flex-col">
              <div className="text-gray-6 text-sm">Total Turn Over</div>
              <div
                className={clsx(
                  "text-sm",
                  totalTurnOver.profit ? "text-gray-10" : "text-alert-10",
                  totalTurnOver.nominal.includes("Rp") &&
                    "flex flex-row items-center"
                )}
              >
                {totalTurnOver.nominal}
                {totalTurnOver.nominal.includes("Rp") && (
                  <div
                    className={
                      totalTurnOver.profit ? "text-gray-6" : "text-alert-6"
                    }
                  >
                    ,00
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-1 flex-col">
              <div className="text-gray-6 text-sm">Total Profit</div>
              <div
                className={clsx(
                  "text-sm",
                  totalProfit.profit ? "text-gray-10" : "text-alert-10",
                  totalProfit.nominal.includes("Rp") &&
                    "flex flex-row items-center"
                )}
              >
                {totalProfit.nominal}
                {totalProfit.nominal.includes("Rp") && (
                  <div
                    className={
                      totalProfit.profit ? "text-gray-6" : "text-alert-6"
                    }
                  >
                    ,00
                  </div>
                )}
              </div>
            </div>
            <button className="flex flex-1 flex-row rounded-md border border-gray-4 bg-checkbox items-center px-[10px]">
              <div
                className={clsx(
                  "h-2 w-2 rounded-full",
                  status === "Active"
                    ? "bg-dot-blue"
                    : status === "In Progress"
                    ? "bg-warning"
                    : "bg-danger-medium"
                )}
              />
              <div className="text-left w-[97px] text-gray-0 text-sm py-[6px] pl-2 mr-5">
                {status}
              </div>
              <div className="flex flex-1 justify-end">
                <IconChevronDown />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
