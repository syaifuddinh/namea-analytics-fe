import { WhiteUploadingIcon } from "@/components/atoms/Icons"
import "./index.style.css"

export default function UploadButton({ label, className = "" }) {
	return (
		<div className={`upload-button gap-3 flex items-center justify-center rounded-[8px] min-w-[160px] min-h-[40px] ${className}`}>
			<WhiteUploadingIcon />
			<div className="text-white font-light text-sm">
				{ label }
			</div>
		</div>
	)
}