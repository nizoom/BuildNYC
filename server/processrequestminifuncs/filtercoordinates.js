function filterCoordinates(rawData) {
    //filter coordinates with nAn / undefined / null and return the index 
    // testData = [
    //     { gis_latitude: 1, gis_longitude: 2 }, { gis_latitude: NaN, gis_longitude: 2 }
    // ]

    const permitsWithValidatedCoordinates = rawData.filter(obj => {
        if (isNaN(obj.gis_latitude) === false) {
            return obj;
        }
    })


    //console.log(permitsWithValidatedCoordinates)

    return permitsWithValidatedCoordinates;
}
//ilterCoordinates();

module.exports = filterCoordinates;


  // let indexesOfNaN = []

    // testData.forEach(obj => {
    //     console.log("Firing")
    //     if (isNaN(obj.gis_latitude) === false) {
    //         console.log("Found one ")
    //         console.log(obj)
    //         console.log(testData.indexOf(obj));

    //         indexesOfNaN.push(testData.indexOf(obj))
    //     }
    // })

       //rawData.splice() //ITERATE
    // remove those indexes by iterating through the list of indexes and remove that building element
    //in the raw data array