import ContentCard from "../../../components/organism/content-card"
import GrandtotalCard from "../../../components/organism/grandtotal-card"
import DefaultText from "../../../components/atoms/default-text"
import Chart from "../../../components/atoms/chart";
import CheckboxInput from "../../../components/atoms/checkbox-input";

const labels = ["Jan 23", "Feb 23", "Mar 23", "Apr 23", "May 23"]
type DatasetType = {
    data: number[]
}

type CashflowOverviewType = {
    cashBalance: string,
    outstandingDebt: string,
    chartDataset: DatasetType[]
}

export default function CashflowOverviewComponent({
    cashBalance,
    outstandingDebt,
    chartDataset
}: CashflowOverviewType) {
  return (
    <ContentCard title="Cash Flow Overview" paddingX={0}>
        <div className="grid grid-flow-col grid-rows-1 px-4">
            <GrandtotalCard
                label="Total Cash Balance"
                value={cashBalance}
                variant="primary"
            />        
            <GrandtotalCard
                label="Total Outstanding Debt"
                value={outstandingDebt}
                variant="danger"
            />        
        </div>

        <div className="cash-flow-overview_subtitle-bar flex justify-between py-3 mt-2 px-4">
            <DefaultText
                color="white"
                weight="500"
            >
                2023 Yearly Cash Flow Breakdown
            </DefaultText>

            <div className="cash-flow-overview_filter flex gap-5">
                <CheckboxInput
                    label="Cashflow"
                />
                <CheckboxInput
                    label="Outstanding"
                />
            </div>
        </div>

        <div className="cash-flow-overview_chart p-3">
            <Chart
                labels={labels}
                datasets={chartDataset}
            />
        </div>
    </ContentCard>
  )
}
