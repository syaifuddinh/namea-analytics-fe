import CostingLayout from "@/components/templates/costing-layout"
import Breadcrumb from "@/components/atoms/breadcrumb"
import {
    IconArrowLeft,
    GlobalIcon
} from "@/components/atoms/Icons"
import YearOptionInput from "@/components/molecules/input/year-option"
import Table from "@/components/atoms/table"
import MoneyText from "@/components/atoms/text/money"
import CostingContext from "@/components/organisms/costing/costing-context"

const items = [
    [
        1, 
        <MoneyText fontSize="14px" >52.235.459</MoneyText>,
        <MoneyText fontSize="14px"  variant="danger">48.652.863</MoneyText>,
        <MoneyText fontSize="14px" >52.235.459</MoneyText>,
        <MoneyText fontSize="14px"  variant="danger">48.652.863</MoneyText>,
        <MoneyText fontSize="14px" >52.235.459</MoneyText>,
        <MoneyText fontSize="14px"  variant="danger">48.652.863</MoneyText>,
        <MoneyText fontSize="14px" >52.235.459</MoneyText>,
        <MoneyText fontSize="14px"  variant="danger">48.652.863</MoneyText>,
    ],
    [
        2, 
        <MoneyText fontSize="14px"  variant="danger">48.652.863</MoneyText>,
        <MoneyText fontSize="14px" >52.235.459</MoneyText>,
        <MoneyText fontSize="14px"  variant="danger">48.652.863</MoneyText>,
        <MoneyText fontSize="14px" >52.235.459</MoneyText>,
        <MoneyText fontSize="14px"  variant="danger">48.652.863</MoneyText>,
        <MoneyText fontSize="14px" >52.235.459</MoneyText>,
        <MoneyText fontSize="14px"  variant="danger">48.652.863</MoneyText>,
        <MoneyText fontSize="14px" >52.235.459</MoneyText>,
    ],
    [
        3, 
        <MoneyText fontSize="14px" >52.235.459</MoneyText>,
        <MoneyText fontSize="14px" >52.235.459</MoneyText>,
        <MoneyText fontSize="14px" >52.235.459</MoneyText>,
        <MoneyText fontSize="14px"  variant="danger">48.652.863</MoneyText>,
        <MoneyText fontSize="14px" >52.235.459</MoneyText>,
        <MoneyText fontSize="14px" >52.235.459</MoneyText>,
        <MoneyText fontSize="14px" >52.235.459</MoneyText>,
        <MoneyText fontSize="14px"  variant="danger">48.652.863</MoneyText>,
    ],
    [
        4, 
        <MoneyText fontSize="14px"  variant="danger">48.652.863</MoneyText>,
        <MoneyText fontSize="14px" >52.235.459</MoneyText>,
        <MoneyText fontSize="14px"  variant="danger">48.652.863</MoneyText>,
        <MoneyText fontSize="14px" >52.235.459</MoneyText>,
        <MoneyText fontSize="14px"  variant="danger">48.652.863</MoneyText>,
        <MoneyText fontSize="14px" >52.235.459</MoneyText>,
        <MoneyText fontSize="14px"  variant="danger">48.652.863</MoneyText>,
        <MoneyText fontSize="14px" >52.235.459</MoneyText>,
    ],
    [
        5, 
        <MoneyText fontSize="14px" >52.235.459</MoneyText>,
        <MoneyText fontSize="14px" >52.235.459</MoneyText>,
        <MoneyText fontSize="14px" >52.235.459</MoneyText>,
        <MoneyText fontSize="14px"  variant="danger">48.652.863</MoneyText>,
        <MoneyText fontSize="14px" >52.235.459</MoneyText>,
        <MoneyText fontSize="14px" >52.235.459</MoneyText>,
        <MoneyText fontSize="14px" >52.235.459</MoneyText>,
        <MoneyText fontSize="14px"  variant="danger">48.652.863</MoneyText>,
    ],
    [
        6, 
        <MoneyText fontSize="14px"  variant="danger">48.652.863</MoneyText>,
        <MoneyText fontSize="14px" >52.235.459</MoneyText>,
        <MoneyText fontSize="14px"  variant="danger">48.652.863</MoneyText>,
        <MoneyText fontSize="14px" >52.235.459</MoneyText>,
        <MoneyText fontSize="14px"  variant="danger">48.652.863</MoneyText>,
        <MoneyText fontSize="14px" >52.235.459</MoneyText>,
        <MoneyText fontSize="14px"  variant="danger">48.652.863</MoneyText>,
        <MoneyText fontSize="14px" >52.235.459</MoneyText>,
    ],
    [
        7, 
        <MoneyText fontSize="14px" >52.235.459</MoneyText>,
        <MoneyText fontSize="14px"  variant="danger">48.652.863</MoneyText>,
        <MoneyText fontSize="14px" >52.235.459</MoneyText>,
        <MoneyText fontSize="14px"  variant="danger">48.652.863</MoneyText>,
        <MoneyText fontSize="14px" >52.235.459</MoneyText>,
        <MoneyText fontSize="14px"  variant="danger">48.652.863</MoneyText>,
        <MoneyText fontSize="14px" >52.235.459</MoneyText>,
        <MoneyText fontSize="14px"  variant="danger">48.652.863</MoneyText>,
    ],
    [
        8, 
        <MoneyText fontSize="14px"  variant="danger">48.652.863</MoneyText>,
        <MoneyText fontSize="14px" >52.235.459</MoneyText>,
        <MoneyText fontSize="14px"  variant="danger">48.652.863</MoneyText>,
        <MoneyText fontSize="14px" >52.235.459</MoneyText>,
        <MoneyText fontSize="14px"  variant="danger">48.652.863</MoneyText>,
        <MoneyText fontSize="14px" >52.235.459</MoneyText>,
        <MoneyText fontSize="14px"  variant="danger">48.652.863</MoneyText>,
        <MoneyText fontSize="14px" >52.235.459</MoneyText>,
    ],
]

const footers = [
    "Total",
    <MoneyText fontSize="14px" >98.235.459</MoneyText>,
    <MoneyText fontSize="14px" >98.235.459</MoneyText>,
    <MoneyText fontSize="14px" >98.235.459</MoneyText>,
    <MoneyText fontSize="14px" >98.235.459</MoneyText>,
    <MoneyText fontSize="14px" >98.235.459</MoneyText>,
    <MoneyText fontSize="14px" >98.235.459</MoneyText>,
    <MoneyText fontSize="14px" >98.235.459</MoneyText>,
    <MoneyText fontSize="14px" >98.235.459</MoneyText>
]

export default function PromotionalCostingPage() {
  return (
    <CostingLayout activeMenu="promotional-costing" >
        <Breadcrumb
            options={[{ title: "Pengeluaran Lomba" }, { title: "Details" }]}
        />

        <div className="mt-6 flex flex-col md:flex-row gap-3 md:items-center justify-between">
            <div>
                <div className="flex items-center gap-2.5">
                    <a href="/costing/promotional">
                        <IconArrowLeft />                    
                    </a>
                    <div className="promotional_detail-title font-light text-gray-10 text-lg">
                        Website 1
                    </div>
                </div>
                <div className="mt-[2px] ml-[2.125rem] flex items-center gap-1.5">
                    <GlobalIcon />
                    
                    <div className="promotional_detail-description font-extralight text-sm text-gray-6">
                        https://www.website1.com/
                    </div>
                </div>
            </div>

            <YearOptionInput />
        </div>

        <Table
            className="mt-8"
            columns={[
                {
                    "title": "Day"
                },
                {
                    "title": "January"
                },
                {
                    "title": "February"
                },
                {
                    "title": "March"
                },
                {
                    "title": "April"
                },
                {
                    "title": "May"
                },
                {
                    "title": "June"
                },
                {
                    "title": "July"
                },
                {
                    "title": "August"
                },
            ]}
            contents={items}
            footers={footers}
            columnWidths={["90px"]}
            contextElement={<CostingContext />}
        />
    </CostingLayout>
  );
}
