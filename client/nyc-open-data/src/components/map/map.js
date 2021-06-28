import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React from "react";
import "./map.css"

const ManhattanMap = () => {
    return (
        <div>
            <MapContainer center={[40.754932, -73.984016]} zoom={13} scrollWheelZoom={false}
                className="leaflet-container">
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default ManhattanMap;