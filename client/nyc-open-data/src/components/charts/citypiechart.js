import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2"
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart } from 'chart.js';

import "./citypiechart.css"

const CityPieChart = (props) => {

    //Chart.plugins.register(ChartDataLabels);

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

    const NYCWideLabels = ["Demolitions", "New Buildings", "Building Alterations"];
    return (
        <div className="cityWide_pie_hart" style={{ color: "white" }}>
            {props.dataPoints.length > 0 ?
                <div>
                    <h3 className="piechart_city_title">
                        City Wide Development in {props.year}
                    </h3>
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
                            }],
                            labels: NYCWideLabels,

                        }}
                        options={{
                            maintainAspectRation: false,
                            responsive: true,
                            plugins: {

                                datalabels: {
                                    display: true,
                                    color: 'white'
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

                    />  </div>
                : null}
        </div>
    )
}


export default CityPieChart
// Maybe we could use just the total for each year rather than asking for every permit and
// then counting the total of a big ass slow to gather array

