async function getJobTotals(formattedYears, formattedBorough) {

    console.log("getting jobs")

    //console.log(formattedYears, formattedJobType, formattedBorough)

    // declaring variables for city wide job totals by type in a given year 


    require('dotenv').config()

    const fetch = require("node-fetch");

    const apiKey = process.env.API_KEY_ID;




    //FUNCTION CALLS 

    // declaring variables for city wide job totals by type in a given year 


    const [totalDMs, totalNBs, totalA1s] = await Promise.all([
        apiCall("DM", false, formattedYears),
        apiCall("NB", false, formattedYears),
        apiCall("A1", false, formattedYears)
    ]);

    console.log("YO")
    console.log(totalDMs[0].count_job_type) // drills down engough to get count
    //RES.JSON INSTEAD??
    const NYCWideTotals = [{ totalDMs: totalDMs[0].count_job_type },
    { totalNBs: totalNBs[0].count_job_type },
    { totalA1s: totalA1s[0].count_job_type }]

    // declaring variables for borough specific job totals by type in a given year 


    const [boroughSpecificDMs, boroughSpecificNBs, boroughSpecificA1s] = await Promise.all([
        apiCall("DM", formattedBorough, formattedYears),
        apiCall("NB", formattedBorough, formattedYears),
        apiCall("A1", formattedBorough, formattedYears)
    ]);

    const givenBoroughTotals = [{ boroughSpecificDMs: boroughSpecificDMs },
    { boroughSpecificNBs: boroughSpecificNBs }, { boroughSpecificA1s: boroughSpecificA1s }]

    // const boroughSpecificDMs = await apiCall("DM", formattedBorough, formattedYears)

    // const boroughSpecificNBs = await apiCall("NB", formattedBorough, formattedYears)

    // const boroughSpecificA1s = await apiCall("A1", formattedBorough, formattedYears)




    async function apiCall(job_type, borough, formattedYears) {

        //determine if call is borough specific or city wide based on arguements above

        const boroughOrCityWide = borough ? `borough=${borough}&` : ""

        //console.log(boroughOrCityWide)

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
            // .then(data => console.log("Here is the data " + data))
            .catch(error => {
                console.error('The error is:', error);
            });
        console.log(response);
        return response
    }

    console.log(NYCWideTotals)
    console.log(givenBoroughTotals)

}

//getJobTotals(['1991-01-01T12:00:00', '1992-1990-01-01T12:00:00'], "DM", "BRONX")

getJobTotals(['1991-01-01T12:00:00', '1992-1990-01-01T12:00:00'], "BRONX")

module.exports = getJobTotals;