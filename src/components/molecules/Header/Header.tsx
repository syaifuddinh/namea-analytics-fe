import Image from "next/image";
import { IHeader } from "./types";
import clsx from "clsx";

export const Header: React.FC<IHeader> = ({
  icon,
  placeholder,
  subPlaceholder,
  children,
  className,
}) => {
  return (
    <div className="dashboard_header flex flex-col md:flex-row gap-3 md:items-center mt-8 justify-between">
      <div
        className={clsx("dashboard_header_title flex items-center", className)}
      >
        {icon ? (
          <div className="dashboard_header_thumbnail mr-[16px] ">
            <Image src={icon} alt="super agent icon" width={40} height={40} />
          </div>
        ) : null}
        <div className="dashboard_header_content">
          <div className="text-[1.063rem] font-light leading-[26px] tracking-[0.7px] text-white-theme">
            {placeholder}
          </div>
          <div className="text-gray-6 text-sm leading-5 font-extralight mt-[2px] tracking-[0.06px]">
            {subPlaceholder}
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};
