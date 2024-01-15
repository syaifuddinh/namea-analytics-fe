"use client"

import AnalyticComponent from '@/components/analytic'
import TitleText from '@/components/atoms/text/title'
import SubtitleText from '@/components/atoms/text/subtitle'
import Image from "next/image";
import "./page.style.css";
import PastTimeInput from "@/components/molecules/input/past-time"
import MonthlyInsightCard from "@/components/organisms/dashboard/monthly-insight-card"
import CostingOverviewCard from "@/components/organisms/dashboard/costing-overview-card"
import ProfitSummaryCard from "@/components/organisms/dashboard/profit-summary-card"
import WalletCard from "@/components/organisms/dashboard/wallet-card"
import MemberOverviewCard from "@/components/organisms/dashboard/member-overview-card"
import CashflowOverviewCard from "@/components/organisms/dashboard/cashflow-overview-card"

export default function Home() {
  return (
  	<>
  		<div className="dashboard_header pb-5 flex flex-col md:flex-row gap-3 md:items-center justify-between">	
  			<div className="dashboard_header_title flex items-center">	
  				<div className="dashboard_header_thumbnail mr-3">
  					  <Image
                  src="/images/dashboard/thumbnail.svg"
                  alt="dashboard thumbnail"
                  width={40}
                  height={40}
              />
  				</div>
  				<div className="dashboard_header_content">	
			  		<TitleText>
			  			Overview
			  		</TitleText>		
			  		<SubtitleText>
			  			Show a comprehensive overview of data from different sources.
			  		</SubtitleText>		
  				</div>
  			</div>

        <PastTimeInput />
  		</div>

      <div className="dashboard_content mt-5">
          <div className="grid grid-rows-2 md:grid-rows-1 grid-flow-col gap-3">
              <MonthlyInsightCard
                  title={"December Total Profit"}
                  mutationVariant="primary"
              />
              <MonthlyInsightCard
                  title={"December Total Cost"}
                  mutationVariant="danger"
              />
          </div>

          <div className="grid grid-rows-2 md:grid-rows-1 grid-flow-col gap-3 mt-3">
              <CostingOverviewCard
              />
              <ProfitSummaryCard />              
          </div>

          <div className="grid grid-rows-2 md:grid-rows-1 grid-flow-col gap-3 mt-3">
              <WalletCard
                  title="Turn Over"
              />
              <WalletCard
                  title="Revenue"
              />
          </div>

          <div className="mt-3">
              <MemberOverviewCard />
          </div>

          <div className="mt-3">
              <CashflowOverviewCard />
          </div>

      </div>
  	</>
  )
}
