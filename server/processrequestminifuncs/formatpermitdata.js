function formatPermitData(rawData, borough) {
    //format each object into an address, owner info, and coordinates section 
    const formattedData = rawData.map(building => {

        const address = `${building.house__} ${building.street_name}, ${borough} ${building.zip_code}`

        const ownerinfo = `${building.owner_s_first_name} ${building.owner_s_last_name} 
            Owner's Business Name: ${building.owner_s_business_name}
            Permittee's Business Name : ${building.permittee_s_business_name}`

        const coordinates = [building.gis_latitude, building.gis_longitude]

        return { address: address, ownerinfo: ownerinfo, coordinates: coordinates }
    })

    console.log(formattedData);
}

module.exports = formatPermitData;

//     house__: '1457',
//     street_name: 'ROSEDALE AVE',
//     zip_code: '10460',
//     owner_s_first_name: 'GAC',
//     owner_s_last_name: 'HAXHARI',
//     owner_s_business_name: 'NONE',
//     permittee_s_business_name: 'ARBERIA & ASSOCIATES INC',
//     gis_latitude: '40.836861',
//     gis_longitude: '-73.870005'