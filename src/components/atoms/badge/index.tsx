export default function Badge({ title, isTileVisible = false, className = "" }) {
    return (
        <div className={`bg-checkbox flex gap-1.5 items-center h-[28px] px-3 border border-gray-9 rounded-[6px] ${className}`}>
        	{
        		isTileVisible === true && (
        			<div className="w-[8px] h-[8px] bg-dot-blue rounded-lg"></div>
        		)
        	}
            <div className="text-gray-0 text-sm font-extralight leading-5">
                { title }
            </div>
        </div>
    )
}