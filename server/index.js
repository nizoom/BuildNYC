require('dotenv').config()

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

const processRequest = require('./processrequest')

const getMapCenter = require('./getmapcenter')


app.get("/borough/:boroughName/type/:job_type/timeSpan/:year", async (req, res) => {
    //console.log(req.params)
    let { boroughName, job_type, year } = req.params;
    //console.log(borough)

    console.log(boroughName)

    const determinedBoroughName = boroughName => { //API only takes "Bronx" not "The Bronx"
        if (boroughName === "The Bronx") {
            return "Bronx"
        }
        return boroughName
    }

    const formattedBorughName = determinedBoroughName(boroughName)

    const formattedPermitData = await processRequest(job_type, year, formattedBorughName)

    //res.json({ message: "Hello from server!" });

    //console.log(formattedPermitData)
    //res.send("Hello from backend")
    res.send({ allData: formattedPermitData })

});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});