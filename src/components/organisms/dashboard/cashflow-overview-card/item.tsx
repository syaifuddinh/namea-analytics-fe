const Item = ({ title, className, icon, variant }) => {
  return (
    <div className="w-full grow bg-base-bg4 border border-gray-1 rounded-xl border-solid pl-5 pr-[22px] py-[1.125rem]">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center justify-between bg-base-bg4 flex pl-[5px] pr-4 py-[7px] border border-base-bg3 rounded-lg border-solid">

        <div className="flex items-center gap-[10px]">
          <div>{ icon }</div>
          <div className="font-extralight text-gray-6 text-sm tracking-[0.2px]">{ title }</div>
        </div>

        <div className={`${variant === "default" ? "text-gray-10" : ""} ${variant === "danger" ? "text-alert-10" : ""} font-light -tracking-[0.16px]`}>
            <span>
                Rp694.354.766,
            </span>
            <span className={`${variant === "default" ? "text-gray-6" : ""} ${variant === "danger" ? "text-alert-6" : ""} `}>00</span>
         </div>
      </div>
    </div>
  );
};

export default Item;
