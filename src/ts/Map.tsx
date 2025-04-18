import { FC } from "react";


//import L from "../../node_modules/leaflet/dist/leaflet.js";
import { Marker, Popup, TileLayer, useMap } from 'react-leaflet';

// ✅ Types are available here
import { MapContainer } from 'react-leaflet'

import "../css/Map.css";

interface Props {
    isVisible: boolean
    toggleSidebarView: Function
}

function createMap() {
    //var map = L.map('map').setView([51.505, -0.09], 13);
    console.log("click");
}

export const Map: FC<Props> = ({
    isVisible,
    toggleSidebarView
}) => {
    return (
        <div id="map">
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <div className={isVisible ? "toggleSidebarButton" : "toggleSidebarButton visible"} onClick={() => toggleSidebarView()}>&#62;</div>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
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