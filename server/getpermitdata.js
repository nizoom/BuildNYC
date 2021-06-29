async function getPermitData(year, job_type) {

    require('dotenv').config()

    const fetch = require("node-fetch");

    const apiKey = process.env.API_KEY_ID;

    const response = await fetch("https://data.cityofnewyork.us/resource/ipu4-2q9a.json?" +
        "job_type=DM&" + //JOB TYPE 
        "borough=MANHATTAN&" + //LOCATION
        "$where=issuance_date between '1989-01-01T12:00:00' and '1990-01-01T12:00:00'", { //TIME 
        method: "GET",
        data: {
            "app_token": apiKey
        }
    })
    return response.json();
}

getPermitData().then(data => console.log(data))

module.export = getPermitData

//"job_type=DM&$limit=1"

//$select=borough, job_type