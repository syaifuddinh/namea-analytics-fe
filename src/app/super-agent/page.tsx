import Image from "next/image";

export default async function PageSuperAgent() {
  //   const lang = await getDictionary();

  return (
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
          <div className="text-[1.063rem] font-light leading-[26px] tracking-[0.7px] text-[var(--white-theme-color)]">
            Super Agent
          </div>
          <div className="text-gray6 text-sm leading-5 font-extralight mt-[2px] tracking-[0.06px]">
            Show a comprehensive overview of data from different sources.
          </div>
        </div>
      </div>
    </div>
  );
}
