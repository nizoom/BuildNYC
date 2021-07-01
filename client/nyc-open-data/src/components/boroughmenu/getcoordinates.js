export function GetBoroughCoordinates(borough) {
    //console.log(borough);
    switch (borough) {

        case "Manhattan":
            return [40.754932, -73.954016]
        case "Brooklyn":
            return [40.65, -74]
        case "Staten Island":
            return [40.5795, -74.1502]
        case "Queens":
            return [40.7282, -73.7949]
        case "The Bronx":
            return [40.8448, -73.8648]

    }
}

