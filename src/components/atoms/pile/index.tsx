import "./index.style.css"

export default function Pile({ 
	variant = "success",
	size="0.5rem",
	outlineWidth=3,
  className="",
  style = {}
}) {
  return (
    <div
    	className={`pile ${variant} ${variant === "secondary-success" ? "bg-success-10 outline-success-2" : ""}`}
    	style={{width: size, height: size, outlineWidth: outlineWidth + "px", ...style}}
    >
        
    </div>
  )
}
