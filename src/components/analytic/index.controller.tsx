"use client"
import { useState } from "react";

export default function useAnalyticController() {
    const [ yearValue, setYearValue ] = useState(2022)
    const [ monthValue, setMonthValue ] = useState(2)
    const [ periodValue, setPeriodValue ] = useState(null)
    const [ turnoverPeriod, setTurnoverPeriod ] = useState("monthly")
    const [ revenuePeriod, setRevenuePeriod ] = useState("yearly")
    const [ monthProfit, ] = useState("30.000.000,00")
    const [ totalMember, ] = useState("4.000")
    const [ totalMemberMutation, ] = useState("3.25% (-5)")
    const [ activeMember, ] = useState("2.000")
    const [ activeMemberMutation, ] = useState("2.25% (-3)")
    const [ newMember, ] = useState("800")
    const [ newMemberMutation, ] = useState("8.25% (-7)")

    const [ totalDeposit, ] = useState("25M")
    const [ totalDepositMutation, ] = useState("3.25% (-5)")

    const [ newDeposit, ] = useState("1.200.000")
    const [ newDepositMutation, ] = useState("5% (-25)")

    const [ totalWithdrawal, ] = useState("10.3M")
    const [ totalWithdrawalMutation, ] = useState("13.15% (-35)")

    const [operationCost, ] = useState({ value: "500.000.000,00", percentage: 30 })
    const [promotionCost, ] = useState({ value: "95.000.000,00", percentage: 15 })
    const [otherCost, ] = useState({ value: "195.000.000,00", percentage: 40 })

    const [turnoverTotal, ] = useState("85.000.000,00")
    const [revenueTotal, ] = useState("15.000.000,00")
    const [turnoverMutation, ] = useState("10% (+8)")
    const [revenueMutation, ] = useState("3% (-2)")

    const [cashBalance, ] = useState("1.200.000.000,00")
    const [outstandingDebt, ] = useState("300.000.000,00")

    const [monthlyProfitDataset, ] = useState([
        {
            data: [1000, 3000, 4000, 5000, 3000, 5000, 3000, 4300]
        },
        {
            data: [1400, 3200, 2000, 5000, 3000, 5000, 3000, 4000]
        }
    ])

    const [turnoverChartDataset, ] = useState([
        {
            data: [2000, 3000, 3000, 1500]
        },
        {
            data: [1200, 4000, 4000, 3500]
        }
    ])

    const [revenueChartDataset, ] = useState([
        {
            data: [2000, 3000, 2000, 2000, 2500, 3500, 2200, 4500, 2000, 3000, 2000, 1000]
        },
        {
            data: [1400, 3400, 500, 2300, 2500, 3500, 2200, 4500, 2000, 3000, 1600, 1400]
        }
    ])

    const [turnoverCrypto, ] = useState("20.000.000,000")
    const [turnoverWallet, ] = useState("25.000.000,000")
    const [turnoverCryptoMutation, ] = useState("6% (+2)")
    const [turnoverWalletMutation, ] = useState("6.5% (+3)")

    const [revenueCrypto, ] = useState("40.000.000,000")
    const [revenueWallet, ] = useState("45.000.000,000")
    const [revenueCryptoMutation, ] = useState("7% (+2)")
    const [revenueWalletMutation, ] = useState("7.5% (+3)")
    const [cashflowChartDataset, ] = useState([
        {
            data: [2000, 3000, 4000, 2100, 1200]      
        },
        {
            data: [1200, 2000, 5000, 3000, 2000]      
        }
    ])

    return {
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
    }
}