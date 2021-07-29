import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React, { useState } from "react";
import "./map.css"
import assignMarker from './assignmarkercolor';


const MyMap = (props) => {

    const [map, setMap] = useState(null) //leaflet boilerplate

    const determineCenter = props.mapShift ? moveMap(props.centerCoordinates) : null


    function moveMap(coordinates) {

        map.flyTo([coordinates[0], coordinates[1]], 13) //sets center and zoom level 
    }

    //map pins
    const permitLocales = props.permitsObject;

    //assigns marker color based on job type
    const markerIcon = assignMarker(props.job_type)

    return (
        <div className="map_container" >
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
