import AccumulationCard from "../../../components/organism/accumulation-card"
import Chart from "../../../components/atoms/chart";

const turnoverLabels = ["Jul W1", "Jul W2", "Jul W3", "Jul W4"];

const revenueLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

type DatasetType = {
    data: number[]
}

type ProfitLossType = {
    turnoverPeriod: string,
    onChangeTurnoverPeriod: (newValue: string) => void,
    revenuePeriod: string,
    onChangeRevenuePeriod: (newValue: string) => void,
    turnoverTotal: string,
    revenueTotal: string,
    turnoverMutation: string,
    revenueMutation: string,
    turnoverChartDataset: DatasetType[],
    revenueChartDataset: DatasetType[],
    turnoverCrypto: string,
    turnoverCryptoMutation: string,
    turnoverWallet: string,
    turnoverWalletMutation: string,
    revenueCrypto: string,
    revenueCryptoMutation: string,
    revenueWallet: string
    revenueWalletMutation: string
}

export default function ProfitLostOverviewComponent({
    turnoverPeriod,
    onChangeTurnoverPeriod,
    revenuePeriod,
    onChangeRevenuePeriod,
    turnoverTotal,
    turnoverMutation,
    revenueTotal,
    revenueMutation,
    turnoverChartDataset,
    revenueChartDataset,
    turnoverCrypto,
    turnoverWallet,
    revenueCrypto,
    revenueWallet,
    turnoverCryptoMutation,
    turnoverWalletMutation,
    revenueCryptoMutation,
    revenueWalletMutation
}: ProfitLossType) {
  return (
    <div className="flex md:flex-row flex-col gap-3">
        <AccumulationCard
            title="Turn Over"
            footerLabel="Total Turn Over"
            footerValue={turnoverTotal}
            footerMutation={turnoverMutation}
            footerVariant="primary"
            period={turnoverPeriod}
            walletBalance={turnoverWallet}
            cryptoBalance={turnoverCrypto}
            walletMutation={turnoverWalletMutation}
            cryptoMutation={turnoverCryptoMutation}
            onChangePeriod={onChangeTurnoverPeriod}
        >
            <Chart
                labels={turnoverLabels}
                datasets={turnoverChartDataset}
            />
        </AccumulationCard>

        <AccumulationCard
            title="Revenue"
            footerLabel="Total Revenue"
            footerValue={revenueTotal}
            footerMutation={revenueMutation}
            footerVariant="danger"
            period={revenuePeriod}
            walletBalance={revenueWallet}
            cryptoBalance={revenueCrypto}
            walletMutation={revenueWalletMutation}
            cryptoMutation={revenueCryptoMutation}
            onChangePeriod={onChangeRevenuePeriod}
        >
            <Chart
                labels={revenueLabels}
                datasets={revenueChartDataset}
                variant="stacked"
            />
        </AccumulationCard>
    </div>
  )
}
