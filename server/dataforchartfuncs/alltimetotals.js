const { response } = require('express');

async function getAllTimeTotals() {
    require('dotenv').config()

    const fetch = require("node-fetch");

    const apiKey = process.env.API_KEY_ID;

    //let year = 1990; // starting year 

    const today = new Date();
    const currentYear = today.getFullYear();
    //console.log(currentYear);

    //for every job type get 30 totals one for each year
    buildArray("NB")

    async function buildArray(jobType) {
        let yearWithTotal = []
        for (let year = 1990; year < currentYear; year++) {

            const total = await getTotal(jobType, year)
            yearWithTotal.push({ year: total[0] })
        }

        console.log(yearWithTotal);
    }

    async function getTotal(jobType, year) {
        console.log(year)
        const response = await fetch("https://data.cityofnewyork.us/resource/ipu4-2q9a.json?" +
            `job_type=${jobType}&` +

            //`$where=issuance_date between '${year}-01-01T12:00:00' and '${year + 1}-01-01T12:00:00'&` +

            `$where=issuance_date between '1990-01-01T12:00:00' and '1991-01-01T12:00:00'&` +

            `$select=count(job_type)`
            , { //TIME 
                method: "GET",
                data: {
                    "app_token": apiKey
                }
            }).then(response => response.json())

            .catch(err => console.log(err))


        return response;


        //add the year property in manually 
        //${year}-01-01T12:00:00
    }
}

getAllTimeTotals();

module.exports = getAllTimeTotals;