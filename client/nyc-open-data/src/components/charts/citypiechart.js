import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2"
import ChartDataLabels from 'chartjs-plugin-datalabels';
import "./citypiechart.css"

const CityPieChart = (props) => {

    // Chart.plugins.register(ChartDataLabels);

    const [nycData, setNYCData] = useState([])

    const [boroughData, setBoroughData] = useState([])

    function processDataForChart(data) {
        const arrOfData = data.map(data => {
            //console.log("Here is the value")
            const parsedNum = parseInt(Object.values(data), 10)
            //console.log(parsedNum)
            return parsedNum
        })
        return arrOfData
    }

    useEffect(() => {
        if (props.dataPoints.length > 0) {
            //console.log(props.dataPoints[0])
            const processedCityData = processDataForChart(props.dataPoints[0])
            console.log(processedCityData)
            setNYCData(processedCityData)
            setBoroughData(props.dataPoints[1])
        }

    }, [props.dataPoints])
    return (
        <div className="cityWide_pie_hart" style={{ color: "white" }}>
            {props.dataPoints.length > 0 ?
            <

                <Pie
                    height={10}
                    width={10}
                    data={{
                        labels: ["Demolitions", "New Buildings", "Building Alterations"],
                        datasets: [{
                            data: nycData,
                            //data: processedCityData,
                            backgroundColor: [
                                "#D93710", "#2F78CE", "#EB9B3B"
                            ]
                        }]
                    }}
                    options={{
                        maintainAspectRation: false,
                        plugins: {
                            datalabels: {
                                formatter: function (value, context) {
                                    return context.chart.data.labels[context.dataIndex];
                                },
                                align: "top",
                                anchor: "center",
                                offset: 25,
                                padding: -2,
                                clip: true,
                                font: {
                                    size: "16",
                                    weight: "bold"
                                }
                            },
                            legend: {
                                labels: {
                                    data: ["Demolitions", "New Buildings", "Building Alterations"],
                                    color: "white",
                                    font: {
                                        size: "20px"
                                    }
                                }
                            }
                        }
                    }
                    }
                /> : null}
        </div>
    )
}


export default CityPieChart
// Maybe we could use just the total for each year rather than asking for every permit and
// then counting the total of a big ass slow to gather array

