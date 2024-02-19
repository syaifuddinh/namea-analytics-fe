import CardCashflowOverview from "@/components/atoms/card/cashflow-overview";
import Checkbox from "@/components/atoms/input/select/checkbox";
import IconPlusSquare from "@/assets/icons/plus-square";
import IconMinusSquare from "@/assets/icons/minus-square";
import CustomChart from "@/components/atoms/custom-chart"
import Item from "./item"

const CashflowOverviewCard = ({ className }) => {
  return (
    <CardCashflowOverview
      title="Cash Flow Overview"
      description="Record your ideas and to-do’s easily, so you never miss a thing."
      className={className}
    >
      <div className="flex flex-col md:flex-row items-start gap-4 p-[20px]">        
        <Item
            title="Total Cash Balance"
            icon={<IconPlusSquare />}
            variant="default"
        />
        <Item
            title="Total Outstanding Debt"
            icon={<IconMinusSquare />}
            variant="danger"
        />
      </div>

			<div className="bg-base-bg5 border-y-base-bg3 border-y border-solid flex gap-2 flex-col md:flex-row md:items-center justify-between px-5 py-[11px]">
				<div className="font-extralight text-sm text-gray-6 tracking-[0.04px]">2023 Yearly Cashflow Breakdown</div>
				<div className="caption-1-400 text-gray-6 flex items-center gap-5">
					<Checkbox id="cashflow" label="Cashflow" />
					<Checkbox id="outstanding" label="Outstanding" />
				</div>
			</div>
			<div className="h-full border-b border-base-bg3 rounded-bl-[16px] rounded-br-[16px] border-radius-2">
        <CustomChart
            labels={["Jan 23", "Feb 23", "Mar 23", "Apr 23", "May 23", "Jun 23", "Jul 23", "Aug 23", "Sept 23", "Oct 23", "Nov 23", "Dec 23"]}  
            maxValue={500000}
            values={[
              [
                450000,
                450000,
                450000,
                450000,
                450000,
                450000,
                450000,
                450000,
                450000,
                450000,
                450000,
                450000
              ],
              [
                300000,
                300000,
                300000,
                300000,
                300000,
                300000,
                300000,
                300000,
                300000,
                300000,
                300000,
                300000,
              ]
            ]}
            variant="bar"
            xClassname="pl-[36px] pr-[35px]"
          />
			</div>
    </CardCashflowOverview>
  );
};

export default CashflowOverviewCard;
