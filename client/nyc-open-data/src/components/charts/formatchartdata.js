export default function formatChartData(data) {

    if (data.length > 0) {
        //console.log(props.dataPoints[0])

        const rawCityData = data[0];
        const rawBoroughData = data[1];


        const processedCityData = processDataForChart(rawCityData);
        const processedBoroughData = processDataForChart(rawBoroughData);
        // do the same for bar chart data when ready 
        return [processedCityData, processedBoroughData]
    }


    function processDataForChart(data) {
        const arrOfData = data.map(data => {
            //console.log("Here is the value")
            const parsedNum = parseInt(Object.values(data), 10)
            //console.log(parsedNum)
            return parsedNum
        })
        return arrOfData
    }
}