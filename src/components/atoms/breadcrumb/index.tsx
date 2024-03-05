import {
  IconChevronRight,
  IconSize
} from "@/components/atoms/Icons";

export default function Breadcrumb({ options }) {
	return (
		<div className="inline-flex flex-row items-center justify-center self-center border border-gray-1 bg-base-bg3 rounded-md px-[8px] py-[0.125rem]">
			{ options.map((item, index) => (
				<div key={index} className="flex">
		            <div className={`${index < options.length - 1 ? "text-gray-6" : "text-gray-0"} lg:text-xs font-extralight`}>
		              { item.title }
		            </div>
		            { index < options.length - 1 && (
			            <IconChevronRight size={IconSize.sm} className="mx-[2px]" />
		            ) }
				</div>
			)) }
         </div>
	)
}