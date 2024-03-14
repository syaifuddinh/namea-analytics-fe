import IconPlusSquare from "@/assets/icons/plus-square";
import IconMinusSquare from "@/assets/icons/minus-square";
import { ReactElement } from "react"

const BalanceBadge = ({ 
    title, 
    subtitle, 
    className, 
    balance,
    paddingLeft = "5px",
    positivity = "plus" 
}: {
    title: ReactElement,
    subtitle: ReactElement,
    className?: string,
    paddingLeft?: string,
    positivity?: "plus"|"minus"
}) => {
  return (    
      <div
        className={`flex flex-col gap-2 sm:flex-row sm:items-center justify-between bg-base-bg4 flex pr-4 py-[7px] border border-base-bg3 rounded-lg border-solid ${className}`}
        style={{paddingLeft}}
       >

        <div className="flex items-center gap-[10px]">
          <div>
            { positivity === "plus" && <IconPlusSquare /> }
            { positivity === "minus" && <IconMinusSquare /> }
          </div>
          { title }
        </div>

        { subtitle }
      </div>
  );
};

export default BalanceBadge;
