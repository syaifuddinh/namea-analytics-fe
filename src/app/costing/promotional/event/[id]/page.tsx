"use client";

import CostingLayout from "@/components/templates/costing-layout"
import Breadcrumb from "@/components/atoms/breadcrumb"
import {
    IconArrowLeft
} from "@/components/atoms/Icons"
import StatusLabel from "@/components/atoms/status-label"
import EventCard from "@/components/atoms/card/event"
import EventOverview from "@/components/organisms/costing/event-overview"
import EventDeposit from "@/components/organisms/costing/event-deposit"
import EventEnrolledMember from "@/components/organisms/costing/event-enrolled-member"

export default function PromotionalCostingPage() {
    return (
        <CostingLayout
            activeMenu="promotional-costing"
            contentMarginTop="42px"
        >
            <Breadcrumb
                options={[{ title: "Event" }, { title: "Details" }]}
            />

            <div className="mt-[30px] flex flex-col md:flex-row gap-3 md:items-center justify-between">
                <div>
                    <div className="flex items-center">
                        <a href="/costing/promotional/event">
                            <IconArrowLeft />                    
                        </a>
                        <div className="event_detail-title ml-2.5 font-light text-gray-10 text-lg">
                            Monthly Cashback 15%
                        </div>

                        <StatusLabel title="Active" className="ml-[26px]" />
                    </div>
                </div>

            </div>

            <EventCard
                thumbnail={"/images/costing/event-thumbnail.png"}
                title={"Monthly Cashback 35%"}
                description={"Bonus Cashback"}
                period={"20 Oct 2023 to 27 Oct 2023"}
                revenue={"24.600.590"}
                className="mt-[33px]"
                isContentVisibleInitially={true}
                isControlVisible={false}
            />

            <EventOverview className="mt-[60px]" />
            <EventDeposit className="mt-[60px]" />
            <EventEnrolledMember className="mt-[66px]" />
        </CostingLayout>
    );
}
