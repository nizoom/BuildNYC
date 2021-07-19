import React from "react";
import { Line } from "react-chartjs-2"
import "./linechart.css"

const LineChart = (props) => {

    console.log(props.dataPoints)

    const [NBobj, DMobj, A1obj] = props.dataPoints;



    const yearLabels = props.dataPoints[0].map(el => {
        return el.year
    })

    //console.log(yearLabels)

    const NBcount = NBobj.map(el => {
        return el.count
    })

    const DMcount = DMobj.map(el => {
        return el.count
    })

    const A1count = A1obj.map(el => {
        return el.count
    })

    console.log(DMcount);

    console.log(NBcount);
    return (
        <div className="outter_linegraph_wrapper">

            <div className="lineGraph_wrapper">

                <Line
                    height={5}
                    width={5}
                    data={{
                        //labels: ["Demolitions", "New Buildings", "Building Alterations"],
                        labels: yearLabels,
                        //labels: [1990, 1991, 1992, 1993],
                        datasets: [
                            {
                                label: "New Buildings",

                                data: NBcount,
                                //data: [1, 2, 4, 5, 6],
                                backgroundColor: [
                                    "blue" // "#2F78CE", "#EB9B3B"
                                ],
                                borderColor: 'rgb(75, 192, 192)',
                                tension: 0.2
                            },
                            {
                                label: "Demolitions",
                                data: DMcount,
                                //data: [1, 2, 4, 5, 6],
                                backgroundColor: [
                                    "red" // "#2F78CE", "#EB9B3B"
                                ],
                                borderColor: "#BC6176",
                                tension: 0.2
                            },
                            {
                                label: "Building Alterations",
                                data: A1count,
                                backgroundColor: [
                                    "orange"
                                ],
                                tension: 0.2
                            }

                        ],
                        //labels: ["Demolitions", "New Buildings", "Building Alterations"],
                    }}
                    options={{
                        maintainAspectRation: false,
                        responsive: true,
                        plugins: {
                            legend: {
                                labels: {
                                    data: ["Demolitions", "New Buildings", "Building Alterations"],
                                    color: "black",
                                    font: {
                                        size: "20px"
                                    }
                                }
                            }
                        }
                    }}
                />
            </div>
        </div>

    )
}

export default LineChart;


  // const datasets = [
    //     {
    //         //     labels: ['January', 'February', 'March',
    //         //    'April', 'May'],
    //         labels: yearLabels,
    //         label: "Constructions Permits City Wide",
    //         fill: "false",
    //         lineTension: 0.5,
    //         backgroundColor: 'rgba(75,192,192,1)',
    //         borderColor: 'rgba(0,0,0,1)',
    //         borderWidth: 2,
    //         data: [65, 59, 80, 81, 56]
    //     }
    // ]







 // const data = {
    //     labels: [1, 2, 4, 5, 6],//yearLabels,
    //     dataSets: [
    //         {//NEW BUILDINGS
    //             label: "New Buildings",
    //             data: [1, 2, 4, 5, 6]// NBcounts.map(el => el.count)
    //         },
    //         {//DEMOS
    //             label: "Demolitions"

    //         },
    //         {//ALTERATIONS
    //             label: "Alterations"
    //         }
    //     ]
    // }
