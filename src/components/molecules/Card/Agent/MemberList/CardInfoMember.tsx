import clsx from "clsx";
import { ICardInfoMember, ICardMemberList, LabelDayProps } from "./types";
import Image from "next/image";
import {
  IconChevronDown,
  IconChevronUp,
  IconThreeDotVertical,
} from "@/components/atoms/Icons";

export const CardInfoMember: React.FC<ICardInfoMember> = ({
  id,
  currentId,
  image,
  nameAgent,
  depositDate,
  statusAgent,
  showDetail,
  onPressShow,
}) => {
  const labelDay = [
    { label: "S", active: false },
    { label: "M", active: true },
    { label: "T", active: true },
    { label: "W", active: true },
    { label: "T", active: true },
    { label: "F", active: false },
    { label: "S", active: false },
  ];
  return (
    <div className="flex flex-1 flex-row px-5 pb-5 items-center pt-[18px]">
      <div className="flex flex-row items-center">
        <Image src={image} alt="super agent icon" width={40} height={40} />
        <div className="w-[167px] text-gray-10 text-sm mr-[0.125rem] ml-4 font-light">
          {nameAgent}
        </div>
      </div>
      <div className="border-l border-l-gray-1 h-5" />
      <div className="flex flex-1 flex-row items-center pl-12">
        <div className="flex flex-col mr-16">
          <div className="text-gray-6 text-sm font-extralight mb-1">
            Recent Deposit
          </div>
          <div className="flex flex-row items-center text-gray-10 text-sm font-light">
            {depositDate}
          </div>
        </div>
        <div className="flex flex-row items-center gap-[10px] mr-16">
          {labelDay.map((item: LabelDayProps) => (
            <div
              key={`day-active-${item.label}`}
              className={`${
                item.active
                  ? "bg-success-1 border border-success-2 text-gray-10"
                  : "bg-base-bg3 border border-base-bg3 text-gray-6"
              } flex text-sm rounded-full h-6 w-6 justify-center items-center`}
            >
              {item.label}
            </div>
          ))}
        </div>
        <div className="flex rounded-md flex-row bg-checkbox border border-gray-9 items-center pr-[0.625rem] pl-[0.313rem] py-[4px] min-h-[28px] max-w-[79px]">
          <div className="flex bg-dot-blue-border h-4 w-4 rounded-full items-center justify-center mr-[0.313rem]">
            <div className="bg-dot-blue h-2 w-2 rounded-full" />
          </div>
          <div className="text-left text-gray-0 text-sm font-extralight">
            {statusAgent}
          </div>
        </div>
      </div>
      <button
        onClick={onPressShow}
        className="flex flex-row items-center gap-[17px]"
      >
        <IconThreeDotVertical className="!w-5 !h-5" />
        <div className="bg-base-bg3 border border-gray-1 rounded-md p-1">
          {currentId === id && showDetail ? (
            <IconChevronUp className="!w-[1.375rem] !h-[1.375rem]" />
          ) : (
            <IconChevronDown className="!w-[1.375rem] !h-[1.375rem]" />
          )}
        </div>
      </button>
    </div>
  );
};
