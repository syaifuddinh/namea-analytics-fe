import "./wrapper.style.css"

export default function Wrapper({ children, className }) {
	return (
		<div className={`comparison-wrapper p-[1.25rem] p-[0.875rem] border border-[var(--base-bg4)] flex flex-col lg:flex-row items-center justify-between rounded-[12px] *:w-full gap-3 ${className}`}>
			{ children }
		</div>
	)
}