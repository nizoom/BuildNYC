require('dotenv').config()

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

const processRequest = require('./processrequest')

const getMapCenter = require('./getmapcenter')


app.get("/borough/:boroughName/type/:job_type/timeSpan/:year", (req, res) => {
    console.log(req.params)
    const { boroughName, job_type, year } = req.params;
    //console.log(borough)

    const mapCenteringCoordinates = getMapCenter(boroughName)


    const dataPoints = processRequest(job_type, year, boroughName)

    res.json({ message: "Hello from server!" });

});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});