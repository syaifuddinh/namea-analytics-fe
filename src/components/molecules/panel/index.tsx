import "./index.style.css";
import SubtitleText from "@/components/atoms/text/subtitle"
import TitleText from "@/components/atoms/text/title"

export default function Panel({ 
    label, 
    value, 
    variant
}) {
  return (
    <div className="panel relative min-h-[87px]">
        <div className={`panel_label ${variant} relative z-10`}>
            <div className="stripped px-4 py-2 font-base text-sm">
                { label }
            </div>
        </div>
        <div className={`panel_body w-full absolute top-[31px] flex justify-end gap-1 pt-[28px] pb-[6px] px-[14px] ${variant} font-light`}>
            <div className="panel_value text-sm">
                { value }%
            </div>
            <div className="panel_value-suffix text-sm font-light">
                of total allocation
            </div>
        </div>        
    </div>
  )
}
