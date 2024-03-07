import clsx from "clsx";
import { ICardMemberList } from "./types";

export const CardMemberList: React.FC<ICardMemberList> = ({
  placeholder,
  subPlaceholder,
  customHeader,
  renderHeader,
  renderContent,
  className,
  containerStyle,
  divider = true,
  containerBgColor = "border-gray-1",
}) => {
  return (
    <div
      className={clsx(
        "flex flex-1 flex-col border border-gray-1 rounded-2xl bg-base-bg2 overflow-hidden mt-5 mb-5",
        containerStyle
      )}
    >
      <div
        className={`flex flex-1 flex-col border-y border-gray-1 mt-1 bg-base-bg5 rounded-t-xl ${containerBgColor}`}
      >
        {customHeader ? (
          customHeader
        ) : (
          <div
            className={clsx(
              "flex flex-1 p-5 items-center bg-gray-7 ",
              className
            )}
          >
            <div className="flex flex-col gap-[4px]">
              <div className="text-base text-gray-10 font-light">
                {placeholder}
              </div>
              {subPlaceholder ? (
                <div className="text-gray-6 text-sm pr-2 font-extralight">
                  {subPlaceholder}
                </div>
              ) : null}
            </div>
            {renderHeader}
          </div>
        )}
      </div>
      {divider ? (
        <div className="h-[10px] border-x border-x-gray-1 mx-5" />
      ) : null}
      {renderContent}
    </div>
  );
};
