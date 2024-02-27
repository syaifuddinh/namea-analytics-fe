import clsx from "clsx";
import { ICardStatus } from "./types";

export const CardStatus: React.FC<ICardStatus> = ({
  placeholder,
  className,
}) => {
  return (
    <div className="flex flex-row rounded-[6px] bg-base-bg3 items-center pr-[10px] pl-2 py-[4px] border border-gray-1">
      <div
        className={clsx(
          "h-2 w-2 rounded-full border-[3px] border-dot-blue-border mr-2",
          className
        )}
      />
      <div className="text-left text-gray-10 text-xs">{placeholder}</div>
    </div>
  );
};
