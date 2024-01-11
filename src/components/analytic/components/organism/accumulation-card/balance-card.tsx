import DefaultText from "../../../components/atoms/default-text"
import PriceTag from "../../../components/atoms/price-tag"
import MutationLabel from "../../../components/atoms/mutation-label"
import "./balance-card.style.css";

export default function BalanceCard({ 
	title,
	value,
	mutation,
	variant
}) {
  return (
    <div className="balance-card">
    	<div className="balance-card_title p-3">
    		<DefaultText
    			color="white"
    			weight="medium"
    		>
	    		{ title }
    		</DefaultText>
    	</div>

    	<div className="balance-card_body p-3">
	    	<PriceTag value={value} />

	    	<div className="balance-card_mutation mt-1">
                <MutationLabel value={mutation} variant="primary" />
	    	</div>
    	</div>

    </div>
  )
}
