"use client"

import Card from "@/components/atoms/card"
import { useState } from "react"

const Table = ({ 
   columns = [],
   contents = [],
   footers = [],
   className = ""
}) => {
  const [activeColumn, setActiveColumn] = useState(-1)
  const [activeRow, setActiveRow] = useState(-1)

  const onColumnEnter = (colIndex, rowIndex) => {
    setActiveColumn(colIndex)
    setActiveRow(rowIndex)
  }

  return (    
      <Card
        isDividerVisible={false}
        isUsePaddingBottom={false}
        className={className}
      >
          <table
              className="w-full"
              onMouseLeave={() => { setActiveColumn(-1); setActiveRow(-1) }}
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
                        className="hover:bg-base-bg3"
                    >
                        { content.map((col, index2) => (
                            <td
                              key={index2}
                              className={`relative h-[52px] pl-4 font-extralight text-sm text-gray-10 hover:border hover:border-success-3 ${activeColumn === index2 ? "bg-base-bg3" : ""}`}
                              onMouseEnter={() => onColumnEnter(index2, index)}
                            >
                                { col }

                                { activeColumn > -1 && (index2 !== activeColumn && index !== activeRow) && (
                                    <div className="absolute bg-shadow1 w-full h-full top-0 left-0"></div>
                                ) }
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
