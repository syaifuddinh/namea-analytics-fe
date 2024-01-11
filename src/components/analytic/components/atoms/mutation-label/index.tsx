import "./index.style.css";
import ArrowUpIcon from "../../../icons/primary/arrow-up.svg";
import ArrowDownIcon from "../../../icons/danger/arrow-down.svg";
import Image from "next/image";

type MutationLabelType = {
    value: string,
    variant: "primary"|"danger",
    className?: string
}

export default function MutationLabel({ 
	value,
    variant,
	className = ""
}: MutationLabelType) {
  return (
    <div className={`mutation-label inline-flex items-center gap-1 font-medium text-xs ${variant} ${className} px-2 py-1`}>
    	<div className="mutation-label_prefix">
            { variant === "primary" && (
                <Image
                    src={ArrowUpIcon}
                    alt="arrow-up icon"
                    loading="lazy"
                />
            )}

            { variant === "danger" && (
                <Image
                    src={ArrowDownIcon}
                    alt="arrow-down icon"
                    loading="lazy"
                />
            )}
    	</div>
    	<div className="mutation-label_value">
    		{ value }
    	</div>
    </div>
  )
}
