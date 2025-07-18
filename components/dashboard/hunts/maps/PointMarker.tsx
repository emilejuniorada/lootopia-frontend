import { useState } from 'react';
import { Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';

type pointMarkerProps = {
    position?: L.LatLng;
    setPosition?: (position: L.LatLng) => void;
};

const PointMarker = ({ position, setPosition }: pointMarkerProps) => {

    useMapEvents({
        click(e) {
            setPosition?.(e.latlng);
            console.log("Point placed at:", e.latlng.lat, e.latlng.lng);
        },
    });

    return position ? (
        <Marker
            position={position}
            icon={L.icon({
                iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
                iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
                iconAnchor: [12, 41],
                popupAnchor: [0, -41],
            })}
        />
    ) : null;
};

export default PointMarker;