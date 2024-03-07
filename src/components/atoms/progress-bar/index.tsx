export default function ProgressBar({ className, width = 0 }) {
    return (
        <div className={`h-[6px] w-full overflow-hidden bg-success-1 rounded-xl ${className}`}>
            <div className="h-full bg-success-10 rounded-xl" style={{ width: `${width}%` }}>
                
            </div>            
        </div>
    )
}