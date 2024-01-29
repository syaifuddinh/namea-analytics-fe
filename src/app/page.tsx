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
import ReactChart from "@/components/atoms/react-chart"

export default function Home() {
  return (
  	<>
  		<div className="dashboard_header pb-[20px] flex flex-col md:flex-row gap-3 md:items-center justify-between mt-[44px]">	
  			<div className="dashboard_header_title flex items-center">	
  				<div className="dashboard_header_thumbnail mr-[16px]">
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
  		  		<div className="text-gray6 text-sm leading-5 font-light mt-[2px]">
			  			Show a comprehensive overview of data from different sources.
			  		</div>		
  				</div>
  			</div>

        <PastTimeInput />
  		</div>

      <div className="dashboard_content mt-[32px]">
          <div className="flex gap-[20px]">

              <MonthlyInsightCard
                  title={"December Total Profit"}
                  mutationVariant="primary"
                  isShowProfitMargin={true}
                  profitMargin={24}
                  balance="500.950.450"
                  mutationPercentage="23.8% (+24)"
              />
              <MonthlyInsightCard
                  title={"December Total Cost"}
                  mutationVariant="danger"
                  balance="492.509.249"
                  mutationPercentage="-16.5% (-8)"
              />
          </div>

          <div className="flex gap-[20px] mt-[60px]">
              <div className="w-[73.29%]">
                  <CostingOverviewCard
                  />
              </div>
              <div className="w-[26.71%]">
                  <ProfitSummaryCard />              
              </div>
          </div>

          <div className="grid grid-rows-2 md:grid-rows-1 grid-flow-col gap-[20px] mt-[60px]">
              <WalletCard
                  title="Turn Over"
                  variant="turnover"
              />
              <WalletCard
                  title="Revenue"
                  variant="revenue"
              />
          </div>

          <div className="mt-[60px]">
              <MemberOverviewCard />
          </div>

          <div className="mt-[60px]">
              <CashflowOverviewCard />
          </div>

      </div>
  	</>
  )
}
