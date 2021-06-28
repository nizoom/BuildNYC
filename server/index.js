require('dotenv').config()

const fetch = require("node-fetch");

const apiKey = process.env.API_KEY_ID;

//look for all demos in 2019


async function getData() {
    const response = await fetch("https://data.cityofnewyork.us/resource/ipu4-2q9a.json?" +
        "job_type=DM&$limit=1", {
        method: "GET",
        data: {
            "app_token": apiKey
        }
    })
    return response.json();
}

getData().then(data => console.log(data))


//$select=borough, job_type