import ApexCharts from 'apexcharts'
import { useEffect } from "react"
import { useRef } from "react"

const useLineController = (canvasElement, values, maxValue, labelLength) => {
    const isDone = useRef(false)
    const canvasDimension = useRef({
        width: null,
        height: null
    })

    const setLine = (ctx, values) => {
        if(typeof values !== "object") return;
        ctx.lineWidth = 2
        ctx.strokeStyle = "#07B7AC";
        const canvasWidth = canvasDimension.current.width
        const canvasHeight = canvasDimension.current.height
        const offset = canvasWidth / labelLength 
        values.forEach(items => {
            ctx.beginPath()
            items.forEach((item, index) => {
                let nextX = offset * index;
                let nextY = canvasHeight - (canvasHeight * (item / maxValue));
                console.log({ canvasHeight, item, maxValue, nextX, nextY })
                if(index < 1) {
                    ctx.moveTo(nextX, nextY)
                } else if(index >= 1) {
                    let endX = nextX;
                    let endY = nextY;

                    let controlX = nextX  * 0.3
                    let controlY = nextY * 2
                    let controlX2 = nextX  * 0.1
                    let controlY2 = nextY * 0.8

                    ctx.bezierCurveTo(controlX, controlY, controlX2, controlY2, endX, endY);
                }
            })
            ctx.stroke()
            ctx.closePath()
        })
    }

    // const onInit = () => {
    //     if(!canvasElement) return;
    //     if(!canvasElement.current) return;
    //     if(isDone.current === true) return;
    //     const ctx = canvasElement.current.getContext("2d")
    //     const nextEl = canvasElement.current.nextElementSibling
    //     const canvasWidth = nextEl.clientWidth
    //     const canvasHeight = nextEl.clientHeight
    //     canvasDimension.current = {
    //         width: canvasWidth,
    //         height: canvasHeight
    //     }
    //     canvasElement.current.setAttribute("width", canvasWidth)
    //     canvasElement.current.setAttribute("height", canvasHeight)

    //     setLine(ctx, values)

    //     isDone.current = true;
    // }

    const onInit = () => {
        if(!canvasElement) return;
        if(!canvasElement.current) return;
        if(isDone.current === true) return;
        canvasElement.current.style.top = "0px"
        canvasElement.current.style.left = "0px"
        canvasElement.current.style.width = "calc(100% - 5rem)"
        const chartData = {
            x: [1, 2, 3, 4, 5],
            y: [10, 20, 15, 25, 30, 20, 25, 15]
        };
        const chartOptions = {
            chart: {
                type: 'line',
                toolbar: {
                    show: false
                }
            },
            series: [{
                name: 'Series 1',
                data: chartData.y
            }],
            xaxis: {
                labels: {
                    show: false
                }
            },
            yaxis: {
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

    useEffect(() => {
        onInit()
        return () => false
    }, [canvasElement])
}

export default useLineController