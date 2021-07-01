function formatPermitData(rawData, borough) {
    //format each object into an address, owner info, and coordinates section 
    const formattedData = rawData.map(building => {

        const address = `${building.house__} ${building.street_name}, ${borough}, ${building.zip_code}`

        const ownerBizName = `${building.owner_s_first_name} ${building.owner_s_last_name}`

        const ownerName = `Owner's Business Name: ${building.owner_s_business_name}`

        const permitInfo = `Permittee's Business Name : ${building.permittee_s_business_name}`

        const coordinates = [parseFloat(building.gis_latitude), parseFloat(building.gis_longitude)]

        return { //each element of the new array will be made up of these objects
            address: address,
            ownerBizName: ownerBizName,
            ownerName: ownerName,
            permitInfo: permitInfo,
            coordinates: coordinates
        }
    })

    console.log(formattedData);
}

module.exports = formatPermitData;
