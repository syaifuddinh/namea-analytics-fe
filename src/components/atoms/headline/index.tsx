import TitleText from "@/components/atoms/text/title"

export default function Headline({ title, description, children, icon, className = "" }) {
	return (
		<div
			className={"flex lg:flex-row flex-col lg:items-center justify-between gap-5 " + className}
		>
			<div className="flex gap-4 items-center">
				{ icon }

				<div className="cashflow-header_sign">
					<TitleText>
						{ title }
					</TitleText>
					<div className="cashflow-header_description font-extralight text-sm leading-5 text-[var(--Gray6)]">
						{ description }
					</div>
				</div>
			</div>

			{ children }
		</div>
	)
}