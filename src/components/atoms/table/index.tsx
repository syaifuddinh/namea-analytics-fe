"use client"

import { ReactElement } from 'react';
import Card from "@/components/atoms/card"
import { useState } from "react"

type ColumnType = {
    title: string
}

const Table = ({ 
    columns = [],
    contents = [],
    footers = [],
    className = "",
    contextElement
}: {
    columns: ColumnType[],
    contents: any[][],
    footers: any[],
    className?: string,
    contextElement?: ReactElement
}) => {
  const [activeColumn, setActiveColumn] = useState(-1)
  const [activeRow, setActiveRow] = useState(-1)
  const [tooltipDimension, setTooltipDimension] = useState({
      top: "0px",
      left: "0px"
  })
  const [isContextVisible, setIsContextVisible] = useState(false);

  const onColumnEnter = (colIndex, rowIndex) => {
    setActiveColumn(colIndex)
    setActiveRow(rowIndex)
  }

  const onColumnContext = e => {
    e.preventDefault()
    let el = e.target
    if(el.target !== "TD") el = el.closest("td")
    const dimension = el.getBoundingClientRect()
    console.log(dimension)
    const { top, left, width, height } = dimension
    const contextHeight = 97
    const newTop = top + window.scrollY - 97 - 8
    const newTopValue = newTop + "px"
    const newLeft = left + width + 8
    const newLeftValue = newLeft + "px"
    setTooltipDimension({
        "top": newTopValue,
        "left": newLeftValue
    })
    setIsContextVisible(true)
  }

  const onClickContext = () => {
      setTimeout(() => {
          setIsContextVisible(false)
      }, 60)
  }

  return (    
      <>
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
                                className="font-extralight text-gray-6 pl-4 h-[52px] text-sm"
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
                                    onMouseEnter={e => onColumnEnter(index2, index, e)}
                                    onContextMenu={e => onColumnContext(e)}
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
                              <td key={index} className="h-[52px] pl-4 font-extralight text-gray-10 text-sm">
                                  { item }
                              </td>
                          )) }
                      </tr>
                  ) }
                </tfoot>  
              </table>
          </Card>

          { contextElement && isContextVisible === true && (
              <div
                className="absolute" 
                style={{ "top": tooltipDimension.top, "left": tooltipDimension.left }}
                onClick={onClickContext}
              >
                  { contextElement }
              </div>
          ) }
      </>
  );
};

export default Table;
