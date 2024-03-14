import { ReactElement } from "react";

export default function MemberLabel({
	title,
	content,
	className = ""
}: {
	title: string,
	content: string|ReactElement,
	className?: string
}) {
	return (
		<div className={className}>
			<div className="font-extralight text-sm leading-5 text-gray-6">
				{ title }
			</div>

			<div className="font-light leading-5 text-sm text-gray-10 mt-1">
				{ content }
			</div>
		</div>
	)
}