import { ReactElement } from "react"

export default function EventLabel({ 
	title, 
	value 
}: {
	title: string,
	value: ReactElement|string
}) {
	return (
		<div>
			<div className="text-sm font-extralight leading-5 text-gray-6">
				{ title }
			</div>

			<div className="text-sm font-light leading-5 text-gray-10 mt-1">
				{ value }
			</div>
		</div>
	)
}