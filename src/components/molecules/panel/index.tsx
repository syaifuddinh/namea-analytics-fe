import Image from "next/image";
import "./index.style.css";
import { PanelProps } from "./types";
import clsx from "clsx";

export default function Panel({
  label,
  value,
  variant,
  className,
}: PanelProps) {
  return (
    <div className={clsx(className ? "" : "panel relative min-h-[87px]")}>
      <div className={`panel_label ${variant} relative z-10 h-[2.501rem]`}>
        <div className="stripped pl-[14px] pr-4 py-[0.625rem] font-light text-sm">
          {label}
        </div>
      </div>
      {value ? (
        <div
          className={`panel_body w-full text-[13px] tracking-[0.4px] absolute top-[31px] right-[0px] flex justify-end gap-1 items-end pb-[0.25rem] h-[53.5px] max-w-[200px] px-[14px] ${variant} font-light`}
        >
          <div className="panel_value font-light">{value}%</div>
          <div className="panel_value-suffix font-extralight">
            of total allocation
          </div>
          <div className="absolute h-full right-[-5px] top-[6px]">
            {variant === "success" && (
              <Image
                src="/icons/background/operation-cost.svg"
                alt="dashboard thumbnail"
                width={40}
                height={40}
                className="h-full w-full"
              />
            )}
            {variant === "primary" && (
              <Image
                src="/icons/background/promotion-cost.svg"
                alt="dashboard thumbnail"
                width={40}
                height={40}
                className="h-full w-full"
              />
            )}
            {variant === "danger" && (
              <Image
                src="/icons/background/other-cost.svg"
                alt="dashboard thumbnail"
                width={40}
                height={40}
                className="h-full w-full"
              />
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}
