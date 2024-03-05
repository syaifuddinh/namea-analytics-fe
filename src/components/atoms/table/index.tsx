import Card from "@/components/atoms/card"

const Table = ({ 
   columns = [],
   contents = [],
   footers = [],
   className = ""
}) => {
  return (    
      <Card
        isDividerVisible={false}
        isUsePaddingBottom={false}
        className={className}
      >
          <table
              className="w-full"
          >
            <thead>
                <tr className="bg-base-bg3">
                    { columns.map(column => (
                        <th
                            key={column.title}
                            className="font-extralight text-gray-6 pl-4 h-[52px]"
                        >
                            { column.title }
                        </th>
                    )) }
                </tr>
            </thead>  

            <tbody>
                { contents.map((content, index) => (
                    <tr
                        key={index}
                    >
                        { content.map((col, index2) => (
                            <td key={index2} className="h-[52px] pl-4 font-extralight text-sm text-gray-10">
                                { col }
                            </td>
                        )) }
                    </tr>
                )) }
            </tbody>
            <tfoot>
              
              { footers && (
                  <tr className="bg-base-bg3">
                      { footers.map((item, index) => (
                          <td key={index} className="h-[52px] pl-4 font-extralight text-gray-10">
                              { item }
                          </td>
                      )) }
                  </tr>
              ) }
            </tfoot>  
          </table>
      </Card>
  );
};

export default Table;
