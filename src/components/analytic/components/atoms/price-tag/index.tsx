import "./index.style.css";

type PriceTagType = {
    value: string,
    className?: string,
    variant?: "danger"
}

export default function PriceTag({ 
	value,
    variant = "",
	className = ""
}) {
  return (
    <div className={`price-tag flex gap-1 ${className}`}>
    	<div className="price-tag_prefix">
    		Rp
    	</div>
    	<div className={`price-tag_value ${variant}`}>
    		{ value }
    	</div>
    </div>
  )
}
