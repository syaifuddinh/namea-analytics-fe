import "./index.style.css"

const BarChartItem = ({ 
	src, 
	alt,
	height,
	width,
	bottom = "0%",
	radius = "8px",
	variant = "primary"
}) => {
	return (
		<div
			className={`bar-chart-item ${variant}`}
			style={{ height, width, "minWidth": width, "borderRadius": radius  }}
		>
		</div>
	)
}

export default BarChartItem;