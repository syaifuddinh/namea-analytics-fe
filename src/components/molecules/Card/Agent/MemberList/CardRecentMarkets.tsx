import Image from "next/image";
import { ICardRecentMarkets, ICryptoProps } from "./types";

export const CardRecentMarkets: React.FC<ICardRecentMarkets> = ({ data }) => {
  return (
    <div className="mt-[1.125rem]">
      <div className="ml-[1.125rem] text-sm text-gray-6 font-light">
        Recent Markets
      </div>
      <div className="grid grid-cols-2 items-center mt-3 mb-[1.125rem] mx-[1.125rem] gap-4">
        {data.map((item: ICryptoProps) => (
          <div
            key={`data-crypto-${item.id}`}
            className="flex flex-row items-center p-[1.125rem] bg-base-bg4 border border-base-bg3 rounded-xl"
          >
            <Image src={item.logo} alt="logo" width={40} height={40} />
            <div className="flex flex-col ml-4 w-[206px] mr-[118px]">
              <div className="text-sm text-gray-10 font-extralight">
                {item.cryptoCode}
              </div>
              <div className="text-sm text-gray-6 font-extralight">
                {item.cryptoName}
              </div>
            </div>
            <div className="flex flex-row items-center text-sm text-gray-6 font-extralight">
              TotalBuy:
              <div className="flex flex-row items-center text-sm text-gray-10 font-extralight">
                {item.totalBuy}
                <div className="text-sm text-gray-6 font-extralight">,00</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
