"use client"

import SecondaryCard from "@/components/atoms/card/secondary";
import MoneyText from "@/components/atoms/text/money";
import MutationLabel from "@/components/atoms/mutation-label";
import TinyText from "@/components/atoms/text/tiny";
import Pile from "@/components/atoms/pile";
import Icon from "@/components/atoms/icon";

const CurrencyCard = ({ 
	currencyName,
	balance,
	mutationValue,
	mutationVariant
}) => {
	return (
		<SecondaryCard
			className="bg-base-bg5 max-h-[11.5rem] min-h-[11.5rem] flex flex-col justify-between"
		>	
			<div className="p-[1.25rem]">	
				<div className="text-sm text-gray6 mb-1 font-light -tracking-[0.14px] leading-5">	
					Total
				</div>
				<MoneyText>
					{ balance }
				</MoneyText>

				<div className="mt-3 flex gap-2 items-center">	
					<MutationLabel value={mutationValue} variant={mutationVariant} />
					<TinyText>
						compared to last week
					</TinyText>		
				</div>
			</div>

			<div className="px-1 pb-1">
				<div className="px-[12px] flex justify-between bg-base-bg5 rounded-t-[4px] rounded-b-[6px] border border-[var(--base-bg3)] max-h-[3.75rem]">
					<div className="mt-[12px] mb-[29px]">
						<Icon
							src="dot-pattern.svg"
							alt="dot pattern"
						/>
					</div>
					<div className="flex gap-2.5 items-center justify-center">
						<Pile
							variant={"primary"}
							size="0.6255rem"
						/>
						<div className="text-white-theme-color font-light text-sm tracking-[0.15px]">
							{ currencyName }
						</div>
					</div>

					<div className="mt-[29px] mb-[12px]">
						<Icon
							src="dot-pattern-2.svg"
							alt="dot pattern 2"
						/>
					</div>
				</div>
			</div>
		</SecondaryCard>
	)
}

export default CurrencyCard;