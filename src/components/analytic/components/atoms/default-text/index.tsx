import "./index.style.css";

export default function DefaultText({ 
	children, 
	color = "",
	weight = "normal"
}) {
  return (
    <div className={`default-text text-sm font-${weight} ${color}`}>
        { children }
    </div>
  )
}
