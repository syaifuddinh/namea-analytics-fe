import "./index.style.css";
import DefaultText from "../../../components/atoms/default-text"
import TitleText from "../../../components/atoms/title-text"

export default function CostingSummaryCard({ 
    label, 
    value, 
    variant
}) {
  return (
    <div className="costing-summary-card p-3">
        <div className={`costing-summary-card_label px-4 py-2 ${variant}`}>
            <DefaultText
                weight="medium"
                color="white"
            >
                { label }
            </DefaultText>
        </div>
        <div className="costing-summary-card_body flex justify-end gap-1 pt-3 pb-2 px-3">
            <div className="costing-summary-card_value">
                <DefaultText
                    weight="medium"
                    color="warning"
                >
                    { value }%
                </DefaultText>
            </div>
            <div className="costing-summary-card_value-suffix">
                <DefaultText>
                    of total allocation
                </DefaultText>
            </div>
        </div>        
    </div>
  )
}
