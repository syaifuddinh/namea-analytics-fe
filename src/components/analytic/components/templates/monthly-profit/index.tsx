import ContentCard from "../../../components/organism/content-card"
import DefaultText from "../../../components/atoms/default-text"
import PriceTag from "../../../components/atoms/price-tag"
import Chart from "../../../components/atoms/chart";
import Pile from "../../../components/atoms/pile";

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];

type DatasetType = {
    data: number[]
}

type MonthlyProfitType = {
    profit: string,
    chartDataset: DatasetType[]
}

export default function MonthlyProfitComponent({
    profit,
    chartDataset
}: MonthlyProfitType) {
  return (
    <ContentCard
        className="grid grid-flow-col grid-rows-1 gap-3"
    >
        <div className="monthly-profit_header">
            <div className="monthly-profit_header__label flex gap-2 items-center">
                <Pile
                    variant="success"
                />
                <DefaultText>
                    December Profit
                </DefaultText>
            </div>

            <PriceTag value={profit} className="mt-1" />
        </div>

        <div className="monthly-profit_chart flex-grow-1">
            <Chart
                labels={labels}
                datasets={chartDataset}
            />
        </div>
    </ContentCard>
  )
}
