import "./index.style.css"

export default function Pile({ 
	variant = "success",
	size="0.5rem"
}) {
  return (
    <div
    	className={`pile ${variant}`}
    	style={{width: size, height: size}}
    >
        
    </div>
  )
}
