import ApexCharts from 'apexcharts'
import { useEffect } from "react"
import { useRef } from "react"
import { useState } from "react"
import { generateId } from "@/utils/number"

const useLineController = (
    canvasElement, 
    values, 
    maxValue, 
    labelLength, 
    gridElement,
    onGenerateTooltip
) => {
    const isDone = useRef(false)
    const canvasDimension = useRef({
        width: null,
        height: null
    })
    const lineTooltips = useRef([])

    const gridDimension = useRef({
        "width": 0,
        "height": 0
    })

    const [bulletTooltips, setBulletTooltips] = useState([])
    const [dashLines, setDashLines] = useState([])
    const [activeLineTooltipKey, setActiveLineTooltipKey] = useState(null)

    const getBulletTooltips = () => bulletTooltips

    const onGridLeave = (element) => {
        element.addEventListener("mouseleave", () => {
            setActiveLineTooltipKey(null)
        })
    }

    const onGridHover = (element, region) => {
        element.addEventListener("mousemove", e => {
            const { offsetX } = e
            console.log({ offsetX })
            const gridWidth = gridDimension.current.width
            const index = region.findIndex(item => {
                const { start, end } = item 

                return offsetX >= start && offsetX < end
            })
            if(index === -1) return;
            // alert(bulletTooltips[index].key)
            setActiveLineTooltipKey(region[index].key)
        })
    }

    const onInit = () => {
        if(!canvasElement) return;
        if(!canvasElement.current) return;
        if(isDone.current === true) return;
        canvasElement.current.style.top = "0px"
        canvasElement.current.style.left = "0px"
        canvasElement.current.style.width = "100%"
        const chartData = {
            y: values[0]
        };
        const chartOptions = {
            tooltip: {
                show: false
            },
            stroke: {
                colors: ["#07B7AC"],
                width: 2,
            },
            chart: {
                height: 200,
                width: "90%",
                type: 'line',
                offsetX: 20,
                offsetY: 27,
                toolbar: {
                    show: false
                },
                sparkline: {
                    enabled: true
                },
                type: "area"
            },
            grid: {
                show: false
            },
            fill: {
                type: "gradient",
                gradient: {
                    shade: 'dark',
                    type: "vertical",
                    shadeIntensity: 1,
                    inverseColors: false,
                    opacityFrom: 0.5,
                    opacityTo: 0.1,
                    stops: [0, 70],
                    gradientToColors: ["#07B7AC", "#07B7AC", "#07B7AC"],
                    gradientFromColors: ["#07B7AC"],
                    colorStops: undefined,
                }
            },
            series: [{
                name: 'Series 1',
                data: chartData.y
            }],
            xaxis: {
                lines: {
                    show: false
                },
                labels: {
                    show: false
                }
            },
            yaxis: {
                min: 0,
                max: 500000,
                lines: {
                    show: false
                },
                labels: {
                    show: false
                }
            }
        };

        // Instantiate ApexCharts
        const chart = new ApexCharts(canvasElement.current, chartOptions);

        // Render chart
        chart.render();
        isDone.current = true;
    }

    const onInitBulletTooltips = () => {
        if(gridElement.current === null) return;
        const gridHeight = gridElement.current.clientHeight
        const gridWidth = gridElement.current.clientWidth
        gridDimension.current = {
            "width": gridWidth,
            "height": gridHeight
        }

        const datasets = values[0]
        const newBulletTooltips = []
        const newDashLines = []
        let newLineTooltips = []
        const length = datasets.length
        const space = gridWidth - (16 * length)
        const offset = space / (length - 1)
        const newRegion = []
        
        datasets.forEach((item, index) => {
            const id = generateId()
            const key = generateId()
            let leftValue = -3
            let bottomValue = 4
            let left = 0
            let bottom = 0

            if(index === datasets.length - 1) {
                leftValue = gridWidth - 16
                left = leftValue + "px"
            } else if(index > 0 && index < datasets.length - 1) {
                leftValue = index * (16 + offset)
                left = leftValue + "px"
            } 

            const heightPercent = item / maxValue
            bottomValue = gridHeight * (heightPercent)
            bottomValue -= 4
            bottom = bottomValue + "px"

            const params = {
                id,
                key,
                left,
                bottom
            }
            newBulletTooltips.push(params)

            const lineId = generateId()
            let lineLeftValue = leftValue + 8
            if(index > 0) lineLeftValue -= 3
            const lineLeft = lineLeftValue + "px"
            let lineBottomValue = bottomValue - 50
            if(lineBottomValue < 0) lineBottomValue = 0
            else if(lineBottomValue + 116 > gridHeight) lineBottomValue = gridHeight - 116
            const lineBottom = lineBottomValue + "px"

            const lineParams = {
                id: lineId,
                key,
                left: lineLeft,
                bottom: lineBottom
            }
            newDashLines.push(lineParams)

            const startRegion = lineLeftValue - 8
            const endRegion = lineLeftValue + 8
            newRegion.push({
                key,
                "start": startRegion,
                "end": endRegion
            })

            if(onGenerateTooltip) {
                const tooltipWidth = 131
                let tooltipLeftValue = lineLeftValue + 4  
                if(tooltipLeftValue + tooltipWidth > gridWidth) tooltipLeftValue = lineLeftValue - tooltipWidth - 4
                const tooltipLeft = tooltipLeftValue + "px"
                const tooltipBottom = lineBottomValue + "px"
                const tooltipId = generateId()
                newLineTooltips = [
                    ...newLineTooltips, 
                    {
                        "id": tooltipId,
                        key,
                        "element": onGenerateTooltip(item, index),
                        "left": tooltipLeft,
                        "bottom": tooltipBottom
                    }
                ]
            }
        })
        lineTooltips.current = newLineTooltips
        setBulletTooltips(newBulletTooltips)
        setDashLines(newDashLines)

        onGridHover(gridElement.current, newRegion)
        onGridLeave(gridElement.current)
    }

    useEffect(() => {
        onInit()
        return () => false
    }, [canvasElement])


    useEffect(() => {
        onInitBulletTooltips()
        return () => false
    }, [gridElement])

    return {
        lineTooltips: lineTooltips.current,
        bulletTooltips,
        activeLineTooltipKey,
        dashLines
    }
}

export default useLineController