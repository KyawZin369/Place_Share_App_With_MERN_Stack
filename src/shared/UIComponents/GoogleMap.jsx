import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const GoogleMap = (props) => {
    const { center, zoom } = props;

    if (!center || typeof center.lat !== 'number' || typeof center.lng !== 'number') {
        console.error('Invalid center coordinates', center);
        return <div>Invalid coordinates</div>;
    }

    return (
        <div className={props.className}>
            <MapContainer center={center} zoom={zoom} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={center}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
            {props.children}
        </div>
    );
}
export default GoogleMap;
