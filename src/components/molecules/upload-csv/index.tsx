import YearOptionInput from "@/components/molecules/input/year-option"
import UploadButton from "@/components/molecules/button/upload"
import TitleText from "@/components/atoms/text/title"
import "./index.style.css"

export default function UploadCSV({
	paddingTop = "1rem",
	className = ""
}) {
	return (
		<div
			className={"upload-csv lg:flex-row flex-col flex lg:items-center justify-between gap-4 rounded-[16px] p-5 " + className}
			style={{ paddingTop }}
		>
			<div className="upload-csv_entry">
				<TitleText fontSize="16px">
					Upload CSV
				</TitleText>
				<div className="upload-csv_description mt-1 font-extralight text-sm leading-5 text-[var(--Gray6)] tracking-[0.04px]">
					Syncs all your cashflow data by uploading your CSV file here.
				</div>
			</div>

			<div className="upload-csv_hall flex flex-col sm:flex-row items-start sm:items-center">
				<div className="upload-csv_last-update font-extralight text-sm leading-5 text-[var(--Gray6)] mr-[1.5rem] tracking-[0.04px]">
					Last uploaded: 18 January 2023, 2:30PM
				</div>

				<div className="upload-csv_divider hidden sm:block w-[1px] h-[24px] bg-[var(--Gray1)]"></div> 

				<UploadButton label="Upload CSV File" className="ml-0 mt-3 sm:mt-0 sm:ml-6" />
			</div>
		</div>
	)
}