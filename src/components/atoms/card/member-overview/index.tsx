import React from "react";
import Image from "next/image";
import ArrowUpIcon from "../../../../../public/icons/primary/arrow-up.svg";
import ArrowDownIcon from "../../../../../public/icons/danger/arrow-down.svg";

type CardMemberOverviewTypes = {
  title: string;
  value: string;
  comparison: string;
  compareLastYear: number;
};

const CardMemberOverview: React.FC<CardMemberOverviewTypes> = ({
  title,
  value,
  comparison,
  compareLastYear,
}: CardMemberOverviewTypes) => (
  <div className="@apply border shadow-[0px_-28px_84px_-24px_rgba(223,244,246,0.06)_inset] pt-1.5 rounded-xl border-solid border-[rgba(205,251,255,0.10)] bg-base-bg2">
    <div className="@apply p-5 rounded-[10px_10px_0px_0px] border-t-[rgba(205,251,255,0.06)] border-t border-solid bg-base-bg5">
      <div className="@apply text-[rgba(205,251,255,0.60)] text-sm font-normal leading-5 tracking-[-0.14px]">
        {title}
      </div>
      <div className="@apply text-[#CDFBFF] text-base not-italic font-medium leading-6 tracking-[-0.16px] mb-4">
        {value}
      </div>
      <div className="flex items-center gap-2">
        <div
          className={`@apply text-xs font-normal leading-4 tracking-[-0.12px] pl-1 pr-1.5 py-0.5 rounded-3xl ${
            compareLastYear > 0
              ? "text-[#2BCDB9] bg-success-1"
              : "text-[#FF8C67] bg-alert-1"
          }`}
        >
          {compareLastYear > 0 ? (
            <Image src={ArrowUpIcon} alt="arrow-up icon" loading="lazy" className="inline mr-1" />
          ) : (
            <Image src={ArrowDownIcon} alt="arrow-down icon" loading="lazy" className="inline mr-1" />
          )}
          {comparison}
          {` (${compareLastYear > 0 ? "+" : "-"}${Math.abs(
            compareLastYear
          )})`}{" "}
        </div>
        <div className="@apply text-[rgba(205,251,255,0.60)] text-xs font-normal leading-4 tracking-[-0.12px]">
          compared to last year
        </div>
      </div>
    </div>
  </div>
);

export default CardMemberOverview;
