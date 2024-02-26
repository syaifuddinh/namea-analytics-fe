import clsx from "clsx";
import { ICardOverview } from "./types";

export const CardOverview: React.FC<ICardOverview> = ({
  placeholder,
  subPlaceholder,
  renderHeader,
  renderContent,
  className,
}) => {
  return (
    <div className="flex flex-1 flex-col border border-gray-1 rounded-2xl bg-base-bg2 overflow-hidden mt-5 mb-5">
      <div className="flex flex-1 flex-col border-t border-gray-1 mt-[6px] bg-base-bg5 rounded-t-xl">
        <div
          className={clsx("flex flex-1 p-5 items-center bg-gray-7 ", className)}
        >
          <div className="flex flex-col gap-[2px]">
            <div className="text-base text-gray-10 font-medium">
              {placeholder}
            </div>
            {subPlaceholder ? (
              <div className="text-gray-6 text-sm pr-2">{subPlaceholder}</div>
            ) : null}
          </div>
          {renderHeader}
        </div>
      </div>
      <div className="h-[10px] border-x border-x-gray-1 mx-5" />
      {renderContent}
    </div>
  );
};
