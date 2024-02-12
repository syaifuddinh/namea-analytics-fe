import { useEffect } from "react"
import { useRef } from "react"
import { useState } from "react"

const itemGap = 16
const subitemGap = 6

const useStackedBarController = (gridElement, values, maxValue, labelLength) => {
    const [itemValues, setItemValues] = useState([])

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
            const newList = values.map((item2, index2) => {
                const newData = {}
                const newValue = values[index2][index]
                newData.value = newValue
                const proportional = maxValue / newValue
                newData.height = gridHeight / proportional 
                newData.width = (gridWidth / (itemAmount * 5))
                widthTotal = newData.width


                return newData
            })
            widthTotal += 6
            const itemMargin = (gridWidth - (widthTotal * values[0].length)) / (values[0].length - 1)
            if(index < values[0].length - 1) 
                newValues.left = index * (widthTotal + itemMargin)
            else if(index >= values[0].length - 1)
                newValues.left = gridWidth - widthTotal
            
            newValues.items = newList

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


    return { stackedValues: itemValues };
}

export default useStackedBarController