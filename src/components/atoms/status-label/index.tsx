export default function StatusLabel({ 
    title, 
    className = "" 
}: {
    title: string,
    className?: string
}) {
    return (
        <div className={`h-[24px] min-w-[74px] gap-1 rounded-[24px] flex items-center justify-center text-xs leading-5 font-light text-success-10 bg-success-1 ${className} `}>
            <div className="w-[8px] h-[8px] bg-dot-blue rounded-[24px]"></div>

            <span className="pl-[2px]">
            	{ title }
            </span>
        </div>
    )
}