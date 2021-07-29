//THIS AGGREGATES DATA FOR LINE GRAPH 
async function getAllTimeTotals() {

    require('dotenv').config()

    //throttling was required otherwise there was too many api calls at once
    const throttle = require('promise-ratelimit')(25); /* rateInMilliseconds */


    const fetch = require("node-fetch");

    const apiKey = process.env.API_KEY_ID;

    const today = new Date();
    const currentYear = today.getFullYear();
    //console.log(currentYear);

    //for every job type get 30 totals one for each year
    const [newBuildingCount, demolitionCount, buildingAlterationCount] = await Promise.all([
        buildArray("NB"),
        buildArray("DM"),
        buildArray("A1")
    ])


    async function buildArray(jobType) {

        let years = []

        // problem with awaiting each call to finish takes too long
        for (let year = 1990; year < currentYear; year++) {
            years.push(year);
        }



        //map is not ever an async function so you have to wrap it in Promise.all 
        const countObj = await Promise.all(years.map(async year => {
            const result = throttle().then(async function () {
                const yearWithTotal = await getTotal(jobType, year)


                return yearWithTotal[0]
            })

            return result // returns a total job count for each year in an object


        }))


        console.log(countObj.length)

        const countObjWithYears = []

        // add year to the count obj
        countObj.forEach(function (el, index) {

            if (el != undefined) { // MAY HAVE TO DEAL WITH COUNTS THAT ARE UNDEFINED? 
                el.year = years[index]
                countObjWithYears.push(el)
            } else {
                console.log(el)
                console.log("undefined detected")
            }
        })

        //console.log(countObjWithYears.length)
        return countObjWithYears

        //console.log(countObjWithYears);

        async function getTotal(jobType, year) {
            //console.log(year)
            const response =

                await fetch("https://data.cityofnewyork.us/resource/ipu4-2q9a.json?" +
                    `job_type=${jobType}&` +

                    `$where=issuance_date between '${year}-01-01T12:00:00' and '${year + 1}-01-01T12:00:00'&` +

                    //`$where=issuance_date between '1990-01-01T12:00:00' and '}-01-01T12:00:00'&` +

                    `$select=count(job_type)`
                    , { //TIME 
                        method: "GET",
                        data: {
                            "app_token": apiKey
                        }
                    }).then(response => response.json())
                    //.then(data => console.log(data))
                    .catch(err => console.log(err))


            return response;



        }
    }
    //console.log([newBuildingCount, demolitionCount, buildingAlterationCount])
    return [newBuildingCount, demolitionCount, buildingAlterationCount]
}

getAllTimeTotals();

module.exports = getAllTimeTotals;
