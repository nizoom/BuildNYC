import L from 'leaflet';
import Orange from "../../media/orangemarker.png"
import Blue from "../../media/bluemarker.png"
import Red from "../../media/redmarker.png"

export default function assignMarker(job_type) {

    function addColorToMarker(color) {
        const orangeIcon = new L.Icon({

            iconUrl: color,
            iconSize: [17, 30],     //Width x Height
            shadowSize: [50, 64],
            iconAnchor: [0, 0],
            shadowAnchor: [4, 62],
            popupAnchor: [9.5, 0]

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
