import Card from "@/components/atoms/card";
import MoneyText from "@/components/atoms/text/money";

export default function PlatformCard({ 
	title, 
	subtitle, 
	balance, 
	className = "" 
}) {

	return (
		<Card
			className={className}
			isDividerVisible={false}
			isUsePaddingBottom={false}
		>
			<div className="bg-base-bg5 border-t border-base-bg5 rounded-t-[10px] min-h-[84px] border-t border-base-bg5 rounded-t-[10px]">
				<div className="bg-bg-rank flex items-center justify-center text-warning text-xs rounded-br-[6px] w-[50px] h-[20px]">	
					{ subtitle }
				</div>	

				<div className="flex items-start justify-between px-[1.125rem] mt-[2px]">	
					<div className="flex items-center gap-3">
						<div className="w-[40px] h-[40px] bg-gray-9 rounded-[42px]">
							
						</div>

						<div className="font-light text-sm leading-5 text-gray-10">	
							{ title }
						</div>
					</div>

					<div>	
						<div className="text-gray-6 font-extralight text-sm leading-5">
							Pengeluaran Lomba
						</div>

						<MoneyText
							fontSize="14px"
							className="mt-1"
						>	
							{ balance }
						</MoneyText>	
					</div>	
				</div>
			</div>
		</Card>
	)
}