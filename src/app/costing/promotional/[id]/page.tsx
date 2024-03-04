import CostingLayout from "@/components/templates/costing-layout"
import Breadcrumb from "@/components/atoms/breadcrumb"
import {
    IconArrowLeft,
    GlobalIcon
} from "@/components/atoms/Icons"
import YearOptionInput from "@/components/molecules/input/year-option"

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
                <div className="mt-1 flex items-center gap-1.5">
                    <GlobalIcon />
                    
                    <div className="promotional_detail-description font-extralight text-sm text-gray-6">
                        https://www.website1.com/
                    </div>
                </div>
            </div>

            <YearOptionInput />
        </div>
    </CostingLayout>
  );
}
