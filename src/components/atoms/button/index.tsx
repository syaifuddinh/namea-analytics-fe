import "./index.style.css"

export default function Button({
	children,
	className = "",
	variant = "default",
	onClick = () => {}
}) {
	return (
		<>
			{ variant === "default" && (
				<button
					className={`button default flex flex-row justify-center rounded-md border bg-checkbox items-center pr-[0.625rem] pl-[0.625rem] py-2 max-h-[2.25rem] text-gray-10 text-sm font-light ${className}`}
					onClick={onClick}
				>
		            { children }
		        </button>
			) }
		</>
	)
}