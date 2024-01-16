"use client"

import SecondaryCard from "@/components/atoms/card/secondary";
import MoneyText from "@/components/atoms/text/money";
import MutationLabel from "@/components/atoms/mutation-label";
import TinyText from "@/components/atoms/text/tiny";
import Pile from "@/components/atoms/pile";

const CurrencyCard = ({ 
	currencyName,
	mutationVariant
}) => {
	return (
		<SecondaryCard
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
				<SecondaryCard className="p-3 bg-base-5">
					<div className="flex gap-3 items-center justify-center">
						<Pile variant={"primary"}/>
						<div className="text-white-theme-color">
							{ currencyName }
						</div>
					</div>
				</SecondaryCard>
			</div>
		</SecondaryCard>
	)
}

export default CurrencyCard;