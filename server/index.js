require('dotenv').config()

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

const processRequest = require('./processrequest')


app.get("/borough/:boroughName/type/:job_type/timeSpan/:year", async (req, res) => {
    //console.log(req.params)
    let { boroughName, job_type, year } = req.params;


    console.log(boroughName)

    const determineBoroughName = boroughName => { //API only takes "Bronx" not "The Bronx"
        if (boroughName === "The Bronx") {
            return "Bronx"
        }
        return boroughName
    }

    const formattedBorughName = determineBoroughName(boroughName)

    const formattedPermitData = await processRequest(job_type, year, formattedBorughName)

    //console.log(formattedPermitData)
    //res.send("Hello from backend")
    res.send({ allData: formattedPermitData })

});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});