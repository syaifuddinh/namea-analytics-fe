import { useEffect } from "react"
import { useRef } from "react"
import { useState } from "react"
import { generateId } from "@/utils/number"

const itemGap = 16
const subitemGap = 6

const useBarController = (
    gridElement, 
    values, 
    maxValue, 
    onGenerateLegend,
    onGenerateTooltip
) => {
    const [itemValues, setItemValues] = useState([])
    const barTooltips = useRef([])
    const barLegends= useRef([])
    const [activeTooltipId, setActiveTooltipId] = useState(null)

    const onInitiateBarItem = () => {
        if(gridElement.current === null) return;
        if(values.length === 0) return;
        if(values[0].length === 0) return;
        if(typeof values[0] !== "object") return;
        const gridHeight = gridElement.current.clientHeight
        const gridWidth = gridElement.current.clientWidth
        const itemAmount = values[0].length
        const proportionalWidth = gridWidth / itemAmount
        let newItemValues = []
        newItemValues = values[0].map((item, index) => {
            let newValues = {}
            let widthTotal = 0
            let highest = 0  
            const id = generateId()
            const newList = values.map((item2, index2) => {
                const newData = {}
                const newValue = values[index2][index]
                newData.value = newValue
                const proportional = maxValue / newValue
                newData.height = gridHeight / proportional 
                newData.width = (gridWidth / itemAmount) / (values.length + 1)
                widthTotal += newData.width

                highest = highest < newData.height ? newData.height : highest; 

                return newData
            })
            widthTotal += 6
            const itemMargin = (gridWidth - (widthTotal * values[0].length)) / (values[0].length - 1)
            if(index < values[0].length - 1) 
                newValues.left = index * (widthTotal + itemMargin)
            else if(index >= values[0].length - 1)
                newValues.left = gridWidth - widthTotal

            newValues.items = newList
            newValues.id = id

            if(onGenerateLegend) {
                barLegends.current = [
                ...barLegends.current, 
                onGenerateLegend(newList)]
            }
            
            if(onGenerateTooltip) {
                const tooltipWidth = 225

                let bottom = highest * 0.47
                bottom = bottom + "px"

                let left = newValues.left + widthTotal + 4
                if(left + tooltipWidth > gridWidth) {
                    left = newValues.left - tooltipWidth - 4
                }
                left = left + "px"
                barTooltips.current = [
                    ...barTooltips.current, 
                    {"element": onGenerateTooltip(newList), bottom, left, id}
                ]
            }

            return newValues
        })

        newItemValues = newItemValues.filter(item => item != null)

        setItemValues(newItemValues)
    }

    useEffect(() => {
        onInitiateBarItem()
        window.addEventListener("resize", onInitiateBarItem)


        return () => {
            window.removeEventListener("resize", onInitiateBarItem)
        }
    }, [gridElement])


    return { 
        itemValues, 
        activeTooltipId,
        setActiveTooltipId,
        barLegends: barLegends.current,
        barTooltips: barTooltips.current
    };
}

export default useBarController