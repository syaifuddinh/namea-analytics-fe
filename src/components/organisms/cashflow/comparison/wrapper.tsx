import "./wrapper.style.css"

export default function Wrapper({ children, className }) {
	return (
		<div className={`comparison-wrapper p-4 border border-[var(--base-bg4)] flex flex-col lg:flex-row items-center justify-between rounded-[12px] *:w-full gap-3 ${className}`}>
			{ children }
		</div>
	)
}