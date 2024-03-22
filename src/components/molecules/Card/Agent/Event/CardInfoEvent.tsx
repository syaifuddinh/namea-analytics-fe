import {
  IconChevronDown,
  IconChevronUp,
  IconThreeDotVertical,
} from "@/components/atoms/Icons";
import Image from "next/image";
import { ICardInfoEvent } from "./types";

export const CardInfoEvent: React.FC<ICardInfoEvent> = ({
  id,
  currentId,
  image,
  placeholder,
  desc,
  promoPeriod,
  revenueGenerated,
  statusEvent,
  showDetail,
  onPressShow,
}) => {
  return (
    <div className="flex flex-1 flex-row px-5 pb-5 items-center pt-5">
      <div className="flex flex-row items-center">
        <Image src={image} alt="image event icon" width={106} height={64} />
        <div className="flex flex-col w-[185px] ml-4 mr-[80px]">
          <div className="text-gray-10 text-sm font-light mb-1">
            {placeholder}
          </div>
          <div className="flex flex-row items-center text-gray-6 text-sm font-extralight">
            {desc}
          </div>
        </div>
      </div>
      <div className="border-l border-l-gray-1 h-[38px]" />
      <div className="flex flex-1 flex-row items-center pl-16">
        <div className="flex flex-col mr-16">
          <div className="text-gray-6 text-sm font-extralight mb-1">
            Promotion Period
          </div>
          <div className="flex flex-row items-center text-gray-10 text-sm font-light">
            {promoPeriod}
          </div>
        </div>
        <div className="flex flex-col mr-[64px]">
          <div className="text-gray-6 text-sm font-extralight mb-1">
            Revenue Generated
          </div>
          <div className="flex flex-row items-center text-gray-10 text-sm font-light">
            {revenueGenerated}
            <div className="text-sm text-gray-6 font-extralight">,00</div>
          </div>
        </div>
        <div className="flex rounded-md flex-row bg-checkbox border border-gray-9 items-center pr-[12px] pl-2 py-[4px] min-h-[28px]">
          <div className="bg-dot-blue h-2 w-2 rounded-full mr-2" />
          <div className="text-left text-gray-0 text-sm font-extralight">
            {statusEvent}
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center gap-[16px]">
        <IconThreeDotVertical className="!w-5 !h-5" />
        <button
          onClick={onPressShow}
          className="bg-base-bg3 border border-gray-1 rounded-md p-1"
        >
          {currentId === id && showDetail ? (
            <IconChevronUp className="!w-[1.375rem] !h-[1.375rem]" />
          ) : (
            <IconChevronDown className="!w-[1.375rem] !h-[1.375rem]" />
          )}
        </button>
      </div>
    </div>
  );
};
