async function getPermitData(formattedYears, formattedJobType, formattedBorough) {

    require('dotenv').config()

    const fetch = require("node-fetch");

    const apiKey = process.env.API_KEY_ID;

    const response = await fetch("https://data.cityofnewyork.us/resource/ipu4-2q9a.json?" +
        `job_type=${formattedJobType}&` + //JOB TYPE 
        `borough=${formattedBorough}&` + //LOCATION
        `$where=issuance_date between '${formattedYears[0]}' and '${formattedYears[1]}'&` +
        //SELECTED FIELDS 

        `$select=
        house__,
        street_name,
        zip_code,
        owner_s_first_name,
        owner_s_last_name,
        owner_s_business_name,
        permittee_s_business_name,
        gis_latitude,
        gis_longitude
        `

        , { //TIME 
            method: "GET",
            data: {
                "app_token": apiKey
            }
        }).then(response => response.json())
        // .then(data => console.log("Here is the data " + data))
        .catch(error => {
            console.error('Error:', error);
        });

    //console.log(response)
    return response
}

//getPermitData().then(data => console.log(data))

module.exports = getPermitData

//"job_type=DM&$limit=1"


//what is needed: 
// 1. zip code  √
// 2. street name  √
// 3. house # √
// 4.  owner first name √
// 5. owner last name  √
// 6. Permittee's Business Name
// 7. owner's business name 
// 9. latitude
// 10. longitude