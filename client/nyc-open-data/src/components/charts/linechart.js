import React from "react";
import { Line } from "react-chartjs-2"
import "./linechart.css"

const LineChart = (props) => {

    console.log(props.dataPoints)

    const [NBcounts, DMcounts, A1counts] = props.dataPoints;

    console.log(NBcounts)

    const yearLabels = props.dataPoints[0].map(el => {
        return el.year
    })

    console.log(yearLabels)



    return (
        <div className="lineGraph_wrapper">

            <Line
                height={10}
                width={10}
                data={{
                    //labels: ["Demolitions", "New Buildings", "Building Alterations"],
                    labels: yearLabels,
                    datasets: [{
                        //data: props.dataPoints,
                        data: [1, 2, 4, 5, 6],
                        backgroundColor: [
                            "#D93710", "#2F78CE", "#EB9B3B"
                        ]
                    }],
                    labels: ["Demolitions", "New Buildings", "Building Alterations"],
                }}
                options={{
                    maintainAspectRation: false,
                    responsive: true,
                    plugins: {
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
                }}
            />
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
