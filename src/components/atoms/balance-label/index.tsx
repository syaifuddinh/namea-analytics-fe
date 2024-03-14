import BalanceBadge from "@/components/atoms/balance-badge"

const BalanceLabel = ({ 
    title, 
    className, 
    variant,
    balance,
    paddingLeft = "5px",
    positivity = "plus" 
}: {
    title: string,
    className?: string,
    variant: "default"|"danger",
    balance: string,
    paddingLeft?: string,
    positivity?: "plus"|"minus"
}) => {
  return (    
      <BalanceBadge
          title={<div className="font-extralight text-gray-6 text-sm tracking-[0.02px]">{ title }</div>}
          subtitle={(
              <div className={`${variant === "default" ? "text-gray-10" : ""} ${variant === "danger" ? "text-alert-10" : ""} font-light tracking-[0.2px]`}>
                  <span>
                      Rp{ balance },
                  </span>
                  <span className={`${variant === "default" ? "text-gray-6" : ""} ${variant === "danger" ? "text-alert-6" : ""} `}>00</span>
              </div>
          )}
          positivity={positivity}
          paddingLeft={paddingLeft}
          className={className}
      />
  );
};

export default BalanceLabel;
