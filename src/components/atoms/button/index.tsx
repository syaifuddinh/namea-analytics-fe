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
					className={`flex flex-row justify-center rounded-md border border-dot-blue bg-checkbox items-center pr-4 pl-3 py-2 max-h-[2.25rem] text-gray-10 text-sm ${className}`}
					onClick={onClick}
				>
		            { children }
		        </button>
			) }
		</>
	)
}