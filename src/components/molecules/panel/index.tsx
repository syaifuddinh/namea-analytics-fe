import "./index.style.css";
import SubtitleText from "@/components/atoms/text/subtitle"
import TitleText from "@/components/atoms/text/title"

export default function Panel({ 
    label, 
    value, 
    variant
}) {
  return (
    <div className="panel p-3">
        <div className={`panel_label px-4 py-2 ${variant} font-medium text-sm`}>
            { label }
        </div>
        <div className="panel_body flex justify-end gap-1 pt-3 pb-2 px-3">
            <div className="panel_value text-sm">
                { value }%
            </div>
            <div className="panel_value-suffix text-sm">
                of total allocation
            </div>
        </div>        
    </div>
  )
}
