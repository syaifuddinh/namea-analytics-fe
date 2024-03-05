import { IconDropdown } from "@/components/atoms/Icons";
import { IconURL } from "@/components/atoms/Icons/Url";
import { InputSearch } from "@/components/atoms/search";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { ILabelSection, IPageHeaderAgent } from "./types";
import Link from "next/link";

export const PageHeaderSection: React.FC<IPageHeaderAgent> = ({
  websiteName,
  websiteStatus,
  websiteUrl,
  onClickSection,
  onChangeSearch,
  section,
}) => {
  const labelPage = [
    { id: 0, label: "Overview" },
    { id: 1, label: "Member List" },
    { id: 2, label: "Event" },
    { id: 3, label: "Data Analyst" },
  ];

  return (
    <>
      <div className="flex flex-row flex-1 items-center mt-[44px]">
        <button className="flex flex-row rounded-md border border-gray-1 bg-checkbox items-center pl-[10px] pr-1 py-[4px] mr-[10px]">
          <Image
            src="/images/avatar_dummy.png"
            alt="super agent icon"
            width={20}
            height={20}
          />
          <div className="text-left text-gray-0 text-sm py-[2px] pl-2 mr-[38px] font-light">
            {websiteName}
          </div>
          <div className="flex flex-1 justify-end">
            <IconDropdown className={"!w-[1.25rem !h-[1.25rem]"} />
          </div>
        </button>
        <InputSearch
          name={"WebOrBrands"}
          placeholder="Search website or brands"
          onChange={onChangeSearch}
          className="!py-[6px] !pl-2 !pr-[6px]"
          iconClassName="!w-[1.5rem] !h-[1.25rem]"
          className1="!ml-1"
        />
      </div>

      <div className="flex flex-1 flex-col border border-gray-1 rounded-2xl bg-base-bg2 overflow-hidden my-5">
        <div className="flex flex-1 flex-col border-t border-gray-1 mt-1 bg-base-bg5 rounded-t-xl">
          <div className="flex flex-1 p-[18px] items-center bg-gray-7 ">
            <div className="flex flex-row items-center bg-base-bg5 p-1 gap-1 rounded-[10px] border border-gray-9 text-sm text-gray-10 font-extralight">
              {labelPage.map((item: ILabelSection) => (
                <button
                  key={`label-page-${item.id}`}
                  type="button"
                  onClick={() => onClickSection(item.id)}
                  className={clsx(
                    "py-[4px] px-3 font-thin",
                    section === item.id &&
                      "border border-gray-1 rounded-md bg-base-bg3 !font-extralight"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="h-[10px] border-x border-x-gray-1 mx-5" />
        <div className="flex flex-row border-y border-y-gray-1 bg-base-bg5 mb-1 rounded-b-xl justify-between p-5 items-center">
          <div className="flex flex-row items-center">
            <div className="flex items-center mr-4">
              <Image
                src="/images/avatar_dummy.png"
                alt="super agent icon"
                width={40}
                height={40}
              />
            </div>
            <div className="text-gray-10 text-base mr-3 font-light">
              {websiteName}
            </div>
            <div className="flex rounded-full flex-row bg-success-1 items-center pr-[10px] pl-2 py-[4px] h-[28px]">
              <div className="bg-dot-blue h-2 w-2 rounded-full border-[3px] border-dot-blue-border mr-2" />
              <div className="text-left text-success-10 text-xs font-light">
                {websiteStatus}
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center pr-[11px] pl-1 rounded-full border border-base-bg3 gap-2 bg-base-bg3 h-[26px]">
            <IconURL className="!w-5 !h-5" />
            <Link
              href={websiteUrl}
              className="text-sm text-gray-6 font-extralight"
              target="_blank"
              rel="noopener noreferrer"
            >
              {websiteUrl}
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-1 border-b border-b-base-bg3" />
    </>
  );
};
