export default function ProgressLabel({
	value,
	max
}: {
	value: string,
	max: string
}) {
	return (
		<div className="text-sm flex items-center min-w-[236px] bg-base-bg3 border border-base-bg3 h-[32px] rounded-2xl">
			<div className="h-[24px] font-extralight w-[78px] flex items-center justify-center bg-bg-rank text-warning m-1 rounded-2xl">
				Progress
			</div>
		 	<div className="font-light leading-5 ml-3 text-gray-10">
		 		{ value }
		 	</div>		
		 	<div className="font-light leading-5 text-gray-6">
		 		/{ max }
		 	</div>
		</div>
	)
}