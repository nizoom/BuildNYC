require('dotenv').config()

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

//console.log(process.env.PORT)

// /users/:userId/books/:bookId
///api/borough/Brooklyn/type/Demolition/year/1995 404 (Not Found)

//"/api/borough/:boroughName/type/:job_type/span/:year"

//api / borough / Queens

app.get("/borough/:boroughName/type/:job_type/timeSpan/:year", (req, res) => {
    console.log(req.params)
    res.json({ message: "Hello from server!" });

});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});