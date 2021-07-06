import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React, { useState } from "react";
import "./map.css"
import assignMarker from './assignmarkercolor';


const MyMap = (props) => {

    const [map, setMap] = useState(null)

    const determineCenter = props.mapShift ? moveMap(props.centerCoordinates) : null


    function moveMap(coordinates) {

        //const [long, lat] = coordinates[0, 1]
        map.flyTo([coordinates[0], coordinates[1]], 13)
    }


    const permitLocales = props.permitsObject;


    const markerIcon = assignMarker(props.job_type)

    console.log(props.permitsObject)
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

