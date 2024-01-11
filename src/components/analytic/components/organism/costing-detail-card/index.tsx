import "./index.style.css";
import DefaultText from "../../../components/atoms/default-text"
import PriceTag from "../../../components/atoms/price-tag"

export default function CostingDetailCard({ 
    label, 
    priceValue, 
    percentageValue, 
    variant
}) {
  return (
    <div className="costing-detail-card">
        <div className="costing-detail-card_header p-3">
            <div className="costing-detail-card_label flex gap-3">
                <div className={`costing-detail-card_badge mt-1 ${variant}`}></div>

                <div>
                    <DefaultText
                        weight="medium"
                        color="white"
                    >
                        { label }
                    </DefaultText>

                    <div className="costing-detail-card_sublabel flex gap-1 mt-1 ">
                        <div className="costing-detail-card_value">
                            <DefaultText
                                weight="500"
                                color="warning"
                            >
                                { percentageValue }%
                            </DefaultText>
                        </div>
                        <div className="costing-detail-card_value-suffix">
                            <DefaultText>
                                of total allocation
                            </DefaultText>
                        </div>
                    </div>
                </div>
            </div>
                    
        </div>

        <div className="costing-detail-card_body p-3">
            <div className="costing-detail-card_price-label">
                <DefaultText>
                    Total Cost
                </DefaultText>
            </div>

            <PriceTag
                className="mt-1"
                value={priceValue}
            />
        </div>
    </div>
  )
}
