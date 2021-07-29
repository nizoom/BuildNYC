export default function formatChartData(pieData, lineData) {



    const rawCityData = pieData[0];
    const rawBoroughData = pieData[1];

    //destructure data by job type
    const [yearlyNewBuildingCounts, yearlyDemolitionCounts, yearlyAlterationCounts] = lineData;



    //organizes each line on line graph into an array of objects: example: 
    // [{count: 1492, year: 2001}} as in 1492 demolitions in the year 2001

    const processedYearlyNewBuildingCounts = processDataForChart(yearlyNewBuildingCounts)
    const processedYearlyDemolitionCounts = processDataForChart(yearlyDemolitionCounts)
    const processedYearlyAlterationCounts = processDataForChart(yearlyAlterationCounts)

    //storing all 3 types into one constant 
    const processedLineGraphData = [processedYearlyNewBuildingCounts, processedYearlyDemolitionCounts,
        processedYearlyAlterationCounts]


    // this should only be 3 numbers. 1 total for each job type. This function converts those str nums
    // to ints 
    const processedCityData = processDataForChart(rawCityData);
    const processedBoroughData = processDataForChart(rawBoroughData);

    return [processedCityData, processedBoroughData, processedLineGraphData]






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