const getPermitData = require("./getPermitData");

const formatYear = require('./processrequestminifuncs/formatyear')

const formatJobType = require('./processrequestminifuncs/formatjob')


async function processRequest(job_type, year, borough) {

    //get year requested from front end 

    //process year to UTC code 

    const formattedYears = formatYear(year)

    const formattedJobType = formatJobType(job_type)

    //borough has to be all caps for it to be API readable

    console.log(borough)

    const formattedBorough = borough.toUpperCase();

    const dataPoints = await getPermitData(formattedYears, formattedJobType, formattedBorough)


}

module.exports = processRequest;