

// import BlueMarker from "../../media/bluemarker.png"
// import RedMarker from "../../media/redmarker.png"
// //import { Marker } from 'react-leaflet'

import L from 'leaflet';
import Orange from "../../media/orangemarker.png"
import Blue from "../../media/bluemarker.png"
import Red from "../../media/redmarker.png"

export default function assignMarker(job_type) {

    function addColorToMarker(color) {
        const orangeIcon = new L.Icon({

            // iconUrl: require('./media/orangemarker.png'),
            iconUrl: color,
            iconSize: [17, 30],     //W x H
            shadowSize: [50, 64],
            iconAnchor: [22, 94],
            shadowAnchor: [4, 62],
            popupAnchor: [-3, -76]

        });

        return orangeIcon;

    }




    switch (job_type) {
        case "New Building":
            return addColorToMarker(Blue)
        case "Demolition":
            return addColorToMarker(Red)
        case "Building Alteration":
            return addColorToMarker(Orange)
    }

}
