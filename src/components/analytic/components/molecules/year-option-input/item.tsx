export default function YearOptionInputItem({ 
	children, 
	isActive = false,
	onClick
}) {
  return (
    <div
    	className={`year-option-input_item flex justify-center ${isActive === true ? "active" : ""}`}
    	onClick={onClick}
    >
    	{ children }
    </div>	
  )
}
