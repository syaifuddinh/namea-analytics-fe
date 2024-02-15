"use client";
import { IconCalender, IconSearch } from "@/components/atoms/Icons";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

export default function PageSuperAgent() {
  //   const lang = await getDictionary();

  const [search, setSearch] = useState<string>("");

  return (
    <div className="dashboard_header pb-[20px] flex flex-col md:flex-row gap-3 md:items-center mt-[44px]">
      <div className="dashboard_header_title flex items-center w-1/2 bg-red-700">
        <div className="dashboard_header_thumbnail mr-[16px] ">
          <Image
            src="/images/dashboard/thumbnail.svg"
            alt="dashboard thumbnail"
            width={40}
            height={40}
          />
        </div>
        <div className="dashboard_header_content">
          <div className="text-[1.063rem] font-light leading-[26px] tracking-[0.7px] text-[var(--white-theme-color)]">
            Super Agent
          </div>
          <div className="text-gray6 text-sm leading-5 font-extralight mt-[2px] tracking-[0.06px]">
            Show a comprehensive overview of data from different sources.
          </div>
        </div>
      </div>
      <div className="flex flex-row w-1/2">
        <div className="flex flex-row w-3/4 items-center">
          <IconSearch />
          <input
            type="text"
            name={"Search"}
            className={
              "ml-3 bg-transparent border-0 text-gray6 lg:text-lg w-full outline-none font-body "
            }
            placeholder={"Search super agent by name or code..."}
            onChange={(evt: any) => setSearch(evt)}
          />
        </div>
        <div className="flex flex-row w-[35%] items-center bg-yellow-300">
          <IconCalender />
          <div>2 December - 20 December</div>
        </div>
      </div>
    </div>
  );
}
