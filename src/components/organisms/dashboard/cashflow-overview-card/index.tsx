import CardCashflowOverview from "@/components/atoms/card/cashflow-overview";
import Checkbox from "@/components/atoms/input/select/checkbox";
import IconPlusSquare from "@/assets/icons/plus-square";
import IconMinusSquare from "@/assets/icons/minus-square";
import { BarChart } from "@/components/molecules/chart";

const CashflowOverviewCard = () => {
  return (
    <CardCashflowOverview
      title="Cash Flow Overview"
      description="Record your ideas and to-do’s easily, so you never miss a thing."
    >
      <div className="flex items-start gap-4 p-[20px]">
        <div className="w-2/4 bg-base-bg4 border border-gray-1 rounded-xl border-solid pl-5 pr-[22px] py-5">
          <div className="flex items-center justify-between bg-base-bg4 flex items-center pl-[7px] pr-[18px] py-[7px] border border-base-bg3 rounded-lg border-solid">
            <div className="flex items-center gap-[10px]">
              <div><IconPlusSquare /></div>
              <div className="caption-1-400 text-gray-6">Total Cash Balance</div>
            </div>
            <div className="body-2-500 text-gray-10">Rp694.354.766,<span className="text-gray-6">00</span></div>
          </div>
        </div>
        <div className="w-2/4 bg-base-bg4 border border-gray-1 rounded-xl border-solid pl-5 pr-[22px] py-5">
          <div className="flex items-center justify-between bg-base-bg4 flex items-center pl-[7px] pr-[18px] py-[7px] border border-base-bg3 rounded-lg border-solid">
            <div className="flex items-center gap-[10px]">
              <div><IconMinusSquare /></div>
              <div className="caption-1-400 text-gray-6">Total Outstanding Debt</div>
            </div>
            <div className="body-2-500 text-alert-10">Rp694.354.766,<span className="text-alert-6">00</span></div>
          </div>
        </div>
      </div>

			<div className="bg-base-bg5 border-y-base-bg3 border-y border-solid flex items-center justify-between items-start px-5 py-3">
				<div className="caption-1-400 text-gray-6">2023 Yearly Cashflow Breakdown</div>
				<div className="caption-1-400 text-gray-6 flex items-center gap-5">
					<Checkbox id="cashflow" label="Cashflow" />
					<Checkbox id="outstanding" label="Outstanding" />
				</div>
			</div>
			<div className="h-full border-b border-base-bg3 rounded-bl-[16px] rounded-br-[16px] border-radius-2">
				<BarChart />
			</div>
    </CardCashflowOverview>
  );
};

export default CashflowOverviewCard;
