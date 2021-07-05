const getPermitData = require("./getPermitData");

const formatYear = require('./processrequestminifuncs/formatyear')

const formatJobType = require('./processrequestminifuncs/formatjob')

const formatPermitData = require('./processrequestminifuncs/formatpermitdata')

const getJobTotals = require('./dataforchartfuncs/jobtotals')


async function processRequest(job_type, year, borough) {

    //get year requested from front end 

    //process year to UTC code 

    const formattedYears = formatYear(year)

    const formattedJobType = formatJobType(job_type)

    //borough has to be all caps for it to be API readable

    const formattedBorough = borough.toUpperCase();

    const rawPermitData = await getPermitData(formattedYears, formattedJobType, formattedBorough)

    const formattedPermitData = await formatPermitData(rawPermitData, borough)


    //AGGRAGATING GRAPH DATA

    //const jobTypeTotals = await getJobTotals(formattedYears, formattedJobType, formattedBorough)



    //console.log(formattedPermitData)

    //return formattedPermitData


}

module.exports = processRequest;