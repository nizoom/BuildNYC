import React from "react";
import { Pie } from "react-chartjs-2"
import "./citypiechart.css"

const BoroughPieChart = (props) => {

    function getTotal(arr) {
        let total = arr.reduce((a, b) => a + b, 0)

        total = total.toString().split('.');
        if (total[0].length >= 5) {
            total[0] = total[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
        }
        if (total[1] && total[1].length >= 5) {
            total[1] = total[1].replace(/(\d{3})/g, '$1 ');
        }

        return total.join('.');
    }


    const boroughLabels = ["Demolitions", "New Buildings", "Building Alterations"];
    return (
        <div className="cityWide_pie_chart" style={{ color: "white" }}>
            {props.dataPoints.length > 0 ?
                <div>
                    <h3 className="piechart_city_title">
                        {props.borough} Development in {props.year}
                    </h3>
                    <h4>  Construction permits for the year: {getTotal(props.dataPoints)} </h4>
                    <Pie
                        height={10}
                        width={10}
                        data={{
                            labels: ["Demolitions", "New Buildings", "Building Alterations"],
                            datasets: [{
                                data: props.dataPoints,
                                //data: processedCityData,
                                backgroundColor: [
                                    "#D93710", "#2F78CE", "#EB9B3B"
                                ]
                            }],
                            labels: boroughLabels,

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

export default BoroughPieChart;