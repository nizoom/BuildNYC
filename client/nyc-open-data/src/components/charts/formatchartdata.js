export default function formatChartData(pieData, lineData) {

    if (pieData.length > 0) {
        //console.log(props.dataPoints[0])

        const rawCityData = pieData[0];
        const rawBoroughData = pieData[1];

        const [yearlyNewBuildingCounts, yearlyDemolitionCounts, yearlyAlterationCounts] = lineData;

        //console.log(yearlyNewBuildingCounts)

        //REFACTOR 

        const processedYearlyNewBuildingCounts = processDataForChart(yearlyNewBuildingCounts)
        const processedYearlyDemolitionCounts = processDataForChart(yearlyDemolitionCounts)
        const processedYearlyAlterationCounts = processDataForChart(yearlyAlterationCounts)

        const processedLineGraphData = [processedYearlyNewBuildingCounts, processedYearlyDemolitionCounts,
            processedYearlyAlterationCounts] //REFACTOR 

        const processedCityData = processDataForChart(rawCityData);
        const processedBoroughData = processDataForChart(rawBoroughData);
        // do the same for bar chart data when ready 
        return [processedCityData, processedBoroughData, processedLineGraphData]
    }





    function processDataForChart(data) {
        const arrOfData = data.map(data => {

            const parsedNum = parseInt(Object.values(data), 10)

            if (data.hasOwnProperty("year")) { //line graph data 
                return { count: parsedNum, year: data.year }
            } else { //pie chart data
                return parsedNum
            }
        })
        //console.log(arrOfData)
        return arrOfData
    }
}