import { CloseIcon } from "@/components/atoms/Icons"

export default function Chip({ 
	title,
	onClose
}: {
	title: string,
	onClose: () => void
}) {
    return (
        <div className="flex justify-between items-center rounded-md pl-2 pr-2 h-[28px] bg-base-bg3 border border-gray-1 [&:nth-child(1)]:gap-[7px] [&:nth-child(1)]:pr-[7px] gap-[6px]">
            <div className="text-gray-10 text-sm font-extralight">
                { title }
            </div>
            <div
            	className="cursor-pointer"
            	onClick={onClose}
            >
            	<CloseIcon />
            </div>
        </div>
    )
}