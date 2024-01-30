import "./index.style.css";
import Image from "next/image";
import SubtitleText from "@/components/atoms/text/subtitle"
import TitleText from "@/components/atoms/text/title"

export default function Panel({ 
    label, 
    value, 
    variant
}) {
  return (
    <div className="panel relative min-h-[87px]">
        <div className={`panel_label ${variant} relative z-10 h-[2.501rem]`}>
            <div className="stripped pl-[14px] pr-4 py-[0.625rem] font-light text-sm">
                { label }
            </div>
        </div>
        <div className={`panel_body w-full text-[13px] tracking-[0.3px] absolute top-[31px] flex justify-end gap-1 pt-[28px] pb-[6px] px-[14px] ${variant} font-light`}>
            <div className="panel_value font-extralight">
                { value }%
            </div>
            <div className="panel_value-suffix font-extralight">
                of total allocation
            </div>
            <div className="absolute h-full right-[-5px] top-[6px]">
                {variant === 'success' && <Image
                    src="/icons/background/operation-cost.svg"
                    alt="dashboard thumbnail"
                    width={40}
                    height={40}
                    className="h-full w-full"
                />}
                {variant === 'primary' && <Image
                    src="/icons/background/promotion-cost.svg"
                    alt="dashboard thumbnail"
                    width={40}
                    height={40}
                    className="h-full w-full"
                />}
                {variant === 'danger' && <Image
                    src="/icons/background/other-cost.svg"
                    alt="dashboard thumbnail"
                    width={40}
                    height={40}
                    className="h-full w-full"
                />}
            </div>
        </div>        
    </div>
  )
}
