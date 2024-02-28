import clsx from "clsx";
import { ICalenderProps } from "./types";
import { IconCalender, IconDropdown, IconSearch } from "../Icons";

export const Calendar: React.FC<ICalenderProps> = ({
  name,
  placeholder,
  className,
  onChange,
}) => {
  return (
    <button
      className={clsx(
        "flex flex-row items-center border border-gray-1 bg-base-bg3 rounded-md pl-2 pr-[6px] py-[2px]",
        className
      )}
    >
      <IconCalender className="pr-1" />
      <div className="text-gray-6 lg:text-sm font-extralight pr-6">
        2 December - 20 December
      </div>
      <div className="flex flex-1 justify-end">
        <IconDropdown />
      </div>
    </button>
  );
};
