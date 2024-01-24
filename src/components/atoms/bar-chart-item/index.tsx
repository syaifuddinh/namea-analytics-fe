import "./index.style.css"

const BarChartItem = ({ 
	src, 
	alt,
	height,
	width,
	bottom = "0%",
	variant = "primary"
}) => {
	return (
		<div
			className={`bar-chart-item ${variant} rounded-[8px]`}
			style={{ height, width, "minWidth": width  }}
		>
		</div>
	)
}

export default BarChartItem;