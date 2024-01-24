"use client"

import SecondaryCard from "@/components/atoms/card/secondary";
import MoneyText from "@/components/atoms/text/money";
import MutationLabel from "@/components/atoms/mutation-label";
import TinyText from "@/components/atoms/text/tiny";
import Pile from "@/components/atoms/pile";
import Icon from "@/components/atoms/icon";

const CurrencyCard = ({ 
	currencyName,
	mutationVariant
}) => {
	return (
		<SecondaryCard
			className="bg-base-bg5"
		>	
			<div className="p-4">	
				<div className="text-sm text-gray6 mb-2">	
					Total
				</div>
				<MoneyText>
					500.000.000
				</MoneyText>

				<div className="mt-2 flex gap-2 items-center">	
					<MutationLabel value="23.8% (+24)" variant={mutationVariant} />
					<TinyText>
						compared to last week
					</TinyText>		
				</div>
			</div>

			<div className="p-1 mt-2">
				<div className="px-[12px] flex justify-between bg-base-bg5 rounded-t-[4px] rounded-b-[6px] border border-[var(--base-bg3)]">
					<div className="mt-[12px] mb-[29px]">
						<Icon
							src="dot-pattern.svg"
							alt="dot pattern"
						/>
					</div>
					<div className="flex gap-3 items-center justify-center">
						<Pile variant={"primary"}/>
						<div className="text-white-theme-color font-base">
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