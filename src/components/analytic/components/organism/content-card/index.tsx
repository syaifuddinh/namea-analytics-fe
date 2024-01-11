import TitleText from "../../../components/atoms/title-text";
import DefaultText from "../../../components/atoms/default-text";
import YearOptionInput from "../../../components/molecules/year-option-input"
import MonthInput from "../../../components/molecules/month-input"
import PastTimeInput from "../../../components/molecules/past-time-input"
import "./index.style.css";

export default function ContentCard({ 
    title, 
    className = "",
    paddingX = 4,
    HeaderElement, 
    children 
}) {
  return (
    <div className="content-card p-1">
        <div className="content-card_2nd-layer">
            { title && (
            	<div className="content-card_header py-5 px-4 flex justify-between items-center w-100">
            		<div className="base-card_header__title">
        		    	<TitleText>
        			        { title }
        		    	</TitleText>
            		</div>

                    { HeaderElement && <HeaderElement /> }
            	</div>
            ) }

        	<div className={`content-card_body py-5 px-${paddingX} ${className}`}>	
    	        { children }
        	</div>
        </div>
    </div>
  )
}
