const filterCoordinates = require("./filtercoordinates")

function formatPermitData(rawData, borough) {
    //format each object into an address, owner info, and coordinates section 
    //console.log("this is raw")
    //console.log(rawData)
    const rawDataWithValidatedCoordinates = filterCoordinates(rawData)

    const formattedData = rawDataWithValidatedCoordinates.map(building => { //this will have to be cleaned "raw data" 
        //post coordinate NaN removal

        const address = `${building.house__} ${building.street_name}, ${borough}, ${building.zip_code}`

        const ownerName = `${building.owner_s_first_name} ${building.owner_s_last_name}`

        const ownerBizName = `${building.owner_s_business_name}`

        const permitInfo = `${building.permittee_s_business_name}`

        const coordinates = [parseFloat(building.gis_latitude), parseFloat(building.gis_longitude)]

        //console.log(coordinates)

        const binNum = `${building.bin__}`

        //console.log(binNum)

        return { //each element of the new array will be made up of these objects
            address: address,
            ownerBizName: ownerBizName,
            ownerName: ownerName,
            permitInfo: permitInfo,
            coordinates: coordinates,
            binNum: binNum
        }
    })

    //console.log(formattedData);

    return formattedData;
}

module.exports = formatPermitData;
