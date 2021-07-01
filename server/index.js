require('dotenv').config()

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

const processRequest = require('./processrequest')

const getMapCenter = require('./getmapcenter')


app.get("/borough/:boroughName/type/:job_type/timeSpan/:year", (req, res) => {
    console.log(req.params)
    let { boroughName, job_type, year } = req.params;
    //console.log(borough)

    const mapCenteringCoordinates = getMapCenter(boroughName)

    boroughName = "The Bronx" ? "Bronx" : boroughName; //API only takes "Bronx" not "The Bronx"

    const formattedPermitData = processRequest(job_type, year, boroughName)

    //res.json({ message: "Hello from server!" });

    res.send(mapCenteringCoordinates)

});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});