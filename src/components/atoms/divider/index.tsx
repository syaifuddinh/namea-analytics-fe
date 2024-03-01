const dashes = []
for(let i = 0;i < 200;i++) {
	dashes.push(i)
}

const Divider = ({
	style = "solid", 
	className = "",
	height = "24px",
	direction = "horizontal"
}) => {
	return (
		<>
			{ style === "solid" && (
				<>
					{ direction === "horizontal" && (
						<div
							className={`w-full h-[1px] bg-[var(--base-bg3)] ${className}`}
						>
							
						</div>
					) }

					{ direction === "vertical" && (
						<div
							className={`w-[1px] bg-gray-1 ${className}`}
							style={{ height }}
						>
							
						</div>
					) }
				</>
			) }

			{ style === "dashed" && (
				<div
					className={`w-full flex gap-[4px] h-[1px] overflow-hidden ${className}`}
				>
					{ dashes.map(item => (
						<div key={item} className="h-[1px] min-w-[6px] w-[6px] bg-gray-1"></div>
					)) }	
				</div>
			) }
		</>
	)
}

export default Divider;