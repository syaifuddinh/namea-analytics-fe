import IconPlusSquare from "@/assets/icons/plus-square";
import IconMinusSquare from "@/assets/icons/minus-square";


const BalanceLabel = ({ 
  title, 
  className, 
  variant,
  balance,
  positivity = "plus" 
}) => {
  return (    
      <div className={`flex flex-col gap-2 sm:flex-row sm:items-center justify-between bg-base-bg4 flex pl-[5px] pr-4 py-[7px] border border-base-bg3 rounded-lg border-solid ${className}`}>

        <div className="flex items-center gap-[10px]">
          <div>
            { positivity === "plus" && <IconPlusSquare /> }
            { positivity === "minus" && <IconMinusSquare /> }
          </div>
          <div className="font-extralight text-gray-6 text-sm tracking-[0.02px]">{ title }</div>
        </div>

        <div className={`${variant === "default" ? "text-gray-10" : ""} ${variant === "danger" ? "text-alert-10" : ""} font-light tracking-[0.2px]`}>
            <span>
                Rp{ balance },
            </span>
            <span className={`${variant === "default" ? "text-gray-6" : ""} ${variant === "danger" ? "text-alert-6" : ""} `}>00</span>
         </div>
      </div>
  );
};

export default BalanceLabel;
