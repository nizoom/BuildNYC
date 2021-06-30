async function getPermitData(formattedYears, formattedJobType, formattedBorough) {

    require('dotenv').config()

    const fetch = require("node-fetch");

    const apiKey = process.env.API_KEY_ID;

    const response = await fetch("https://data.cityofnewyork.us/resource/ipu4-2q9a.json?" +
        `job_type=${formattedJobType}&` + //JOB TYPE 
        `borough=${formattedBorough}&` + //LOCATION
        `$where=issuance_date between '${formattedYears[0]}' and '${formattedYears[1]}'`, { //TIME 
        method: "GET",
        data: {
            "app_token": apiKey
        }
    }).then(data => console.log(data.json()))

    //console.log(response.json());
    //return response.json();
}

//getPermitData().then(data => console.log(data))

module.exports = getPermitData

//"job_type=DM&$limit=1"

//$select=borough, job_type