import { ICardContainer } from "./types";

export const CardContainer: React.FC<ICardContainer> = ({ children }) => {
  return (
    <div className="flex flex-1 border border-gray-1 rounded-2xl bg-base-bg2 overflow-hidden mb-5 mt-[1.375rem]">
      <div className="flex flex-1 flex-col border-t border-base-bg3 mt-[4px] bg-base-bg5 rounded-t-xl">
        {children}
      </div>
    </div>
  );
};
