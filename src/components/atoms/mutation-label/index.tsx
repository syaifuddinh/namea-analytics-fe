import "./index.style.css";
import Icon from "@/components/atoms/icon";

type MutationLabelType = {
    value: string,
    variant: "primary"|"danger" | "warning",
    className?: string
}

export default function MutationLabel({ 
	value,
    variant,
	className = ""
}: MutationLabelType) {
  return (
    <div className={`mutation-label inline-flex items-center gap-[3px] font-medium text-xs ${variant} ${className} pl-1 pr-1.5 py-0.5`}>
    	<div className="mutation-label_prefix">
            { variant === "primary" && (
                <Icon
                    src={"primary/arrow-up.svg"}
                    alt="arrow-up icon"
                    loading="lazy"
                />
            )}

            { variant === "danger" && (
                <Icon
                    src={"danger/arrow-down.svg"}
                    alt="arrow-down icon"
                    loading="lazy"
                />
            )}
    	</div>
    	<div className="mutation-label_value font-light -tracking-[0.12px] leading-4">
    		{ value }
    	</div>
    </div>
  )
}
