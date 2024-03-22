import Pile from "@/components/atoms/pile"
import IconPlusSquare from "@/assets/icons/plus-square";
import ProgressBar from "@/components/atoms/progress-bar"

export default function CategoryCard({ title, subtitle, progress = 0}) {
	return (
		<div className="h-[88px] bg-base-bg4 border border-gray-1 rounded-xl">
			<div className="bg-bg-rank flex items-center justify-center text-warning text-xs font-light w-[50px] h-[20px] rounded-br-md">
				{ subtitle }
			</div>
			<div className="mx-5 h-[48px] bg-base-bg4 border border-base-bg3">
				<div className="flex py-2 pl-2 pr-5">
					<IconPlusSquare className="w-[32px] h-[32px]" />

					<div className="grow ml-[10px]">
						<div className="flex items-center justify-between">
							<div className="font-extralight text-sm leading-5 text-gray-10">{ title }</div>
							<div className="flex items-center gap-[6px]">
								<Pile variant="primary" />
								<div className="text-success-10 font-light leading-5">{ progress }%</div>
							</div>
						</div>

						<ProgressBar className="mt-1.5" width={progress} />
					</div>
				</div>
			</div>
		</div>
	)
}