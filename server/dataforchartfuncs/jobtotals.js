//THIS AGGREGATES DATA FOR PIE CHARTS 
async function getJobTotals(formattedYears, formattedBorough) {



    require('dotenv').config()

    const fetch = require("node-fetch");

    const apiKey = process.env.API_KEY_ID;


    //FUNCTION CALLS 


    const [totalDMs, totalNBs, totalA1s] = await Promise.all([
        apiCall("DM", false, formattedYears),
        apiCall("NB", false, formattedYears),
        apiCall("A1", false, formattedYears)
    ]);

    // console.log(totalDMs.count_job_type) // drills down engough to get count from property

    const NYCWideTotals = [{ totalDMs: totalDMs.count_job_type },
    { totalNBs: totalNBs.count_job_type },
    { totalA1s: totalA1s.count_job_type }]

    // declaring variables for borough specific job totals by type in a given year 


    const [boroughSpecificDMs, boroughSpecificNBs, boroughSpecificA1s] = await Promise.all([
        apiCall("DM", formattedBorough, formattedYears),
        apiCall("NB", formattedBorough, formattedYears),
        apiCall("A1", formattedBorough, formattedYears)
    ]);

    const givenBoroughTotals = [{ boroughSpecificDMs: boroughSpecificDMs.count_job_type },
    { boroughSpecificNBs: boroughSpecificNBs.count_job_type },
    { boroughSpecificA1s: boroughSpecificA1s.count_job_type }]



    async function apiCall(job_type, borough, formattedYears) {

        //determine if call is borough specific or city wide based on arguements above

        const boroughOrCityWide = borough ? `borough=${borough}&` : ""


        const response = await fetch("https://data.cityofnewyork.us/resource/ipu4-2q9a.json?" +
            `job_type=${job_type}&` + //JOB TYPE 
            //`borough=${borough}&` + //LOCATION
            boroughOrCityWide +

            `$where=issuance_date between '${formattedYears[0]}' and '${formattedYears[1]}'&` +
            //`$select=count(job__)&$group=job_type` //&$group=${formattedJobType}`
            `$select=count(job_type)`
            , { //TIME 
                method: "GET",
                data: {
                    "app_token": apiKey
                }
            }).then(response => response.json())

            .catch(error => {
                console.error('The error is:', error);
            });
        // console.log(response);
        return response[0]
    }

    return [NYCWideTotals, givenBoroughTotals]
}


module.exports = getJobTotals;