"use client"

import { ReactNode } from "react";
import TitleText from "../../../components/atoms/title-text";
import DefaultText from "../../../components/atoms/default-text";
import YearOptionInput from "../../../components/molecules/year-option-input"
import MonthInput from "../../../components/molecules/month-input"
import PastTimeInput from "../../../components/molecules/past-time-input"
import "./index.style.css";

type BaseCardType = {
    children: ReactNode,
    year: number,
    onChangeYear: (newValue: number) => void,
    month: number,
    onChangeMonth: (newValue: number) => void,
    period: number,
    onChangePeriod: (newValue: number) => void,
}

export default function BaseCard({ 
    children,
    year,
    onChangeYear,
    month,
    onChangeMonth,
    period,
    onChangePeriod
}: BaseCardType) {
  return (
    <div className="base-card">
    	<div className="base-card_header py-5 px-4 flex md:flex-row flex-col gap-3 justify-between w-100">
    		<div className="base-card_header__title">
		    	<TitleText>
			        Overview
		    	</TitleText>

		    	<DefaultText>
			        Insightful Performance Overview: Analyzing Critical Data Points and Trends
		    	</DefaultText>
    		</div>
    		<div className="base-card_header__filter flex sm:flex-row flex-col gap-3">

    			<YearOptionInput
                    value={year}  
                    onChange={newValue => onChangeYear(newValue)}  
                />

                <div className="flex gap-3">
        			<MonthInput
                        value={month}
                        onChange={newValue => onChangeMonth(newValue)}  
                    />
        			<PastTimeInput
                        value={period}
                        onChange={newValue => onChangePeriod(newValue)}
                    />
                </div>
    		</div>
    	</div>

    	<div className="base-card_body py-5 px-4 flex flex-col gap-3">	
	        { children }
    	</div>
    </div>
  )
}
