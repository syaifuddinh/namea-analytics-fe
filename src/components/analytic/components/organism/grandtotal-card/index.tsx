import PriceTag from "../../../components/atoms/price-tag"
import DefaultText from "../../../components/atoms/default-text"
import "./index.style.css";

export default function GrandtotalCard({ 
    label, 
    value, 
    variant 
}) {
  return (
    <div className="grandtotal-card p-1">
        <div className="grandtotal-card_label">
            <DefaultText>
                { label }
            </DefaultText>
        </div>            

        <PriceTag
            value={value}
            variant={variant}
            className="mt-1"
        />
    </div>
  )
}
