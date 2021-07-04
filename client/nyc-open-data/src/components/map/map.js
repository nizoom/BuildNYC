import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React, { useState } from "react";
import "./map.css"
import { map } from 'leaflet';
//import CustomMarker from './markercomponenttest';
import assignMarker from './assignmarker';
import L from 'leaflet';
//import "leaflet/dist/leaflet.css"
import Orange from "../../media/orangemarker.png"


const MyMap = (props) => {

    const [map, setMap] = useState(null)


    // console.log(props.mapShift)
    // console.log("the coordinates are " + props.centerCoordinates)

    const determineCenter = props.mapShift ? moveMap(props.centerCoordinates) : null


    function moveMap(coordinates) {

        //const [long, lat] = coordinates[0, 1]
        map.flyTo([coordinates[0], coordinates[1]], 13)
    }

    //const popups = 

    //console.log("All data in component " + (props.permitLocales))

    const permitLocales = props.permitsObject.allData;


    const markerIcon = assignMarker(props.job_type)


    // delete L.Icon.Default.prototype._getIconUrl;

    // const orangeIcon = new L.Icon({

    //     // iconUrl: require('./media/orangemarker.png'),
    //     iconUrl: Orange,
    //     iconSize: [15, 30],     //W x H
    //     shadowSize: [50, 64],
    //     iconAnchor: [22, 94],
    //     shadowAnchor: [4, 62],
    //     popupAnchor: [-3, -76]

    // });





    return (
        <div className="map_container">
            <MapContainer center={[40.754932, -73.954016]} zoom={13} scrollWheelZoom={false}
                whenCreated={setMap}
                className="leaflet-container">
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />


                {permitLocales != undefined ? permitLocales.map(locale => (


                    <Marker
                        key={`${locale.binNum} + ${Math.random().toString()}`}
                        position={locale.coordinates}
                        icon={markerIcon}
                    >
                        <Popup className="popup">
                            <p>{locale.address} </p>
                            <p>Owner: {locale.ownerName} </p>
                            <p>Owning Business Name: {locale.ownerBizName} </p>
                            <p>Permit Recepient: {locale.permitInfo} </p>


                        </Popup>

                    </Marker>
                )) : null}

                {/* <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker> */}
            </MapContainer >
        </div >
    )
}

export default MyMap;

// Jawg_Dark = L.tileLayer('https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token={accessToken}', {
// 	attribution: '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// 	minZoom: 0,
// 	maxZoom: 22,
// 	subdomains: 'abcd',
// 	accessToken: '<your accessToken>'

