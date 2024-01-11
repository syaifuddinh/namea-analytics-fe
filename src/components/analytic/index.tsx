"use client"

import MonthlyProfitComponent from "./components/templates/monthly-profit"
import CashflowOverviewComponent from "./components/templates/cash-flow-overview"
import ProfitLostOverviewComponent from "./components/templates/profit-loss-overview"

import DefaultText from "./components/atoms/default-text"
import PriceTag from "./components/atoms/price-tag"
import BaseCard from "./components/organism/base-card"
import ContentCard from "./components/organism/content-card"
import AccumulationCard from "./components/organism/accumulation-card"
import GrandtotalCard from "./components/organism/grandtotal-card"
import MemberOverviewCard from "./components/organism/member-overview-card"
import CostingSummaryCard from "./components/organism/costing-summary-card"
import CostingDetailCard from "./components/organism/costing-detail-card";
import useAnalyticController from "./index.controller"
import "./index.variables.css";
import "./index.style.css";

export default function AnalyticComponent() {
    const {
        yearValue, monthValue, periodValue,
        turnoverPeriod, setTurnoverPeriod,
        revenuePeriod, setRevenuePeriod,
        setYearValue, setMonthValue, setPeriodValue,
        monthProfit,
        totalMember,
        totalMemberMutation,
        activeMember,
        activeMemberMutation,
        newMember,
        newMemberMutation,
        totalDeposit,
        totalDepositMutation,
        newDeposit,
        newDepositMutation,
        totalWithdrawal,
        totalWithdrawalMutation,
        operationCost,
        promotionCost,
        otherCost,
        turnoverTotal,
        turnoverMutation,
        turnoverChartDataset,
        revenueTotal,
        revenueMutation,
        revenueChartDataset,
        cashBalance,
        outstandingDebt,
        monthlyProfitDataset,
        turnoverCrypto,
        turnoverWallet,
        revenueCrypto,
        revenueWallet,
        turnoverCryptoMutation,
        turnoverWalletMutation,
        revenueCryptoMutation,
        revenueWalletMutation,
        cashflowChartDataset
    } = useAnalyticController()

  return (
    <div className="analytic-container text-white p-5">
    	<BaseCard
            profit={monthProfit}
            year={yearValue}
            onChangeYear={newValue => setYearValue(newValue)}
            month={monthValue}
            onChangeMonth={newValue => setMonthValue(newValue)}
            period={periodValue}
            onChangePeriod={newValue => setPeriodValue(newValue)}
        >
            <MonthlyProfitComponent
                profit={monthProfit}
                chartDataset={monthlyProfitDataset}
            />            

    		<ContentCard
    			title="Member Overview"
    			className="grid grid-rows-6 md:grid-rows-2 sm:grid-rows-3  grid-flow-col gap-3"
    		>
    			<MemberOverviewCard
    				label="Total Member"
    				value={totalMember}
    				mutationValue={totalMemberMutation}
    				variant="danger"
    			/>
    			<MemberOverviewCard
    				label="New Member"
    				value={newMember}
    				variant="primary"
    				mutationValue={newMemberMutation}
    			/>
    			<MemberOverviewCard
    				label="Active Member"
    				value={activeMember}
    				variant="danger"
    				mutationValue={activeMemberMutation}
    			/>
    			<MemberOverviewCard
    				label="New Deposit"
    				value={newDeposit}
    				mutationValue={newDepositMutation}
    				variant="danger"
    			/>
    			<MemberOverviewCard
    				label="Total Deposit"
    				value={totalDeposit}
    				variant="primary"
    				mutationValue={totalDepositMutation}
    			/>
    			<MemberOverviewCard
    				label="Total Withdrawal"
    				value={totalWithdrawal}
    				variant="danger"
    				mutationValue={totalWithdrawalMutation}
    			/>
    		</ContentCard>

    		<ContentCard title="Costing Overview">
    			<div className="grid grid-rows-3 md:grid-rows-1 grid-flow-col gap-3">
    				<CostingSummaryCard
    					label="Operation Cost"
    					value={operationCost.percentage}
    					variant="primary"
    				/>
    				<CostingSummaryCard
    					label="Promotion Cost"
    					value={promotionCost.percentage}
    					variant="danger"
    				/>
    				<CostingSummaryCard
    					label="Other Cost"
    					value={otherCost.percentage}
    					variant="success"
    				/>
    			</div>

    			<div className="grid grid-rows-3 md:grid-rows-1 grid-flow-col gap-3">
    				<CostingDetailCard
    					label="Operation Cost"
    					percentageValue={operationCost.percentage}
    					priceValue={operationCost.value}
    					variant="primary"
    				/>
    				<CostingDetailCard
    					label="Promotion Cost"
    					percentageValue={promotionCost.percentage}
    					priceValue={promotionCost.value}
    					variant="warning"
    				/>
    				<CostingDetailCard
    					label="Operation Cost"
    					percentageValue={otherCost.percentage}
    					priceValue={otherCost.value}
    					variant="success"
    				/>
    			</div>
    			
    		</ContentCard>

            <ProfitLostOverviewComponent
                turnoverTotal={turnoverTotal}
                turnoverMutation={turnoverMutation}
                turnoverPeriod={turnoverPeriod}
                turnoverWallet={turnoverWallet}
                turnoverCrypto={turnoverCrypto}
                turnoverWalletMutation={turnoverWalletMutation}
                turnoverCryptoMutation={turnoverCryptoMutation}
                turnoverChartDataset={turnoverChartDataset}
                onChangeTurnoverPeriod={newValue => setTurnoverPeriod(newValue)}

                revenueTotal={revenueTotal}
                revenueMutation={revenueMutation}
                revenuePeriod={revenuePeriod}
                revenueWallet={revenueWallet}
                revenueCrypto={revenueCrypto}
                revenueWalletMutation={revenueWalletMutation}
                revenueCryptoMutation={revenueCryptoMutation}
                revenueChartDataset={revenueChartDataset}
                onChangeRevenuePeriod={newValue => setRevenuePeriod(newValue)}
                
            />    		



            <CashflowOverviewComponent
                cashBalance={cashBalance}
                outstandingDebt={outstandingDebt}
                chartDataset={cashflowChartDataset}
            />
    	</BaseCard>
    </div>
  )
}
