import "./index.style.css"

export default function Pile({ 
	variant = "success",
	size="0.5rem",
	outlineWidth=3
}) {
  return (
    <div
    	className={`pile ${variant}`}
    	style={{width: size, height: size, outlineWidth: outlineWidth + "px"}}
    >
        
    </div>
  )
}
