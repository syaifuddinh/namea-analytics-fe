export default function Badge({ title, className = "" }) {
    return (
        <div className={`bg-checkbox flex items-center h-[28px] px-3 border border-gray-9 rounded-[6px] ${className}`}>
            <div className="text-gray-0 text-sm font-extralight leading-5">
                { title }
            </div>
        </div>
    )
}