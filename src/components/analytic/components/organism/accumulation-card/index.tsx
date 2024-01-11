import "./index.style.css";
import DefaultText from "../../../components/atoms/default-text"
import TitleText from "../../../components/atoms/title-text"
import ContentCard from "../../../components/organism/content-card"
import BalanceCard from "./balance-card"
import FrequencyInput from "./frequency-input"
import PriceTag from "../../../components/atoms/price-tag"
import MutationLabel from "../../../components/atoms/mutation-label"
import Pile from "../../../components/atoms/pile"
import { ReactNode } from "react"

type AccumulationCardType = {
    title: string,
    footerLabel: string,
    footerValue: string,
    footerVariant: "primary"|"danger",
    footerMutation: "string",
    children: ReactNode,
    period: "weekly"|"monthly"|"yearly",
    onChangePeriod: (newValue: string) => void,
    walletBalance: string,
    cryptoBalance: string,
    walletMutation: string,
    cryptoMutation: string
}

export default function AccumulationCard({ 
    title,
    footerLabel,
    footerValue,
    footerVariant,
    footerMutation,
    children,
    period,
    onChangePeriod,
    walletBalance,
    cryptoBalance,
    walletMutation,
    cryptoMutation
}: AccumulationCardType ) {
  return (
    <ContentCard
        title={title}
        HeaderElement={() => <FrequencyInput value={period} onChange={newValue => onChangePeriod(newValue)} />}
    >
        <div className="accumulation-card_body">
            { children }
        </div>
        <div className="accumulation-card_summary grid grid-flow-col grid-rows-2 sm:grid-rows-1 gap-3 pt-3">
            <BalanceCard
                title="E-Wallet"
                value={walletBalance}
                mutation={walletMutation}
                variant="primary"
            />

            <BalanceCard
                title="Crypto"
                value={cryptoBalance}
                mutation={cryptoMutation}
                variant="danger"
            />
        </div>

        <div className="accumulation-card_footer mt-3 flex sm:flex-row flex-col justify-between gap-1">
            <div className="accumulation-card_footer__left-col flex gap-2">
                <div className="accumulation-card_footer__badge">
                </div>        
                <div className="accumulation-card_footer__label flex items-center gap-2">
                   <Pile variant="primary" />
                   <Pile variant="danger" />
                   <DefaultText>
                       { footerLabel }
                   </DefaultText>
                </div>        
            </div>

            <div className="accumulation-card_footer__right-col flex gap-2">
                <PriceTag value={footerValue} />

                <MutationLabel value={footerMutation} variant={footerVariant} />
            </div>
        </div>
    </ContentCard>
  )
}
