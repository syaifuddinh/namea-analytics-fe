const CustomChart = ({ labels, values }) => {
    return (
        <div className="custom-chart">
            <div className="">
                <div className="custom-chart_y flex flex-col gap-[24px] py-[20px] px-[12px] border-r border-base-bg3 max-w-[55px]">
                    { values.map(item => (
                          <div
                            key={item}
                            className="text-xs text-gray6 text-right"
                          >
                            { item }
                        </div>  
                    )) }                  
                </div>
            </div>

            <div className="custom-chart_x border-t-1 border-base-bg3 flex justify-between py-[6px] pl-[65px] pr-[20px]">
                { labels.map(item => (
                      <div
                        key={item}
                        className="text-sm text-gray6"
                      >
                        { item }
                    </div>
                )) }
            </div>
        </div>
    )
}

export default CustomChart;