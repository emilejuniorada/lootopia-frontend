"use client";
import React from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import L, { LatLngExpression } from 'leaflet';
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import DrawControl from "@/components/dashboard/hunts/maps/DrawControl";
import PointMarker from "@/components/dashboard/hunts/maps/PointMarker";
import StaticRectangle from "@/components/dashboard/hunts/maps/StaticRectangle";
import { Cache, Map } from '@/stores/quest';

type QuestMapProps = {
    defaultPosition?: L.LatLngExpression;
    zoom?: number;
    setMap?: (map: Map) => void;
    setPosition?: (position: L.LatLng) => void;
    markerPosition?: L.LatLng;
    drawable?: boolean;
    markable?: boolean;
    map?: Map
    nonInteractive?: boolean;
    digMode?: boolean,
    discoveredCaches?: Cache[],
    onDigClick?: (pos: L.LatLng) => void
};

/* const ToleranceCircle = ({
    center,
    radius
}: {
    center: LatLngExpression,
    radius: number
}) => {
    const map = useMap();

    React.useEffect(() => {
        const circle = L.circle(center, {
            radius,
            color: 'green',
            fillColor: '#3f3',
            fillOpacity: 0.3
        }).addTo(map);

        // Cleanup au démontage
        return () => {
            map.removeLayer(circle);
        };
    }, [map, center, radius]);

    return null;
} */

const QuestMap = ({
    defaultPosition = [48.864716, 2.349014],
    zoom = 4,
    setMap,
    setPosition,
    map,
    markerPosition,
    drawable = false,
    markable = false,
    nonInteractive = false,
    digMode = false,
    discoveredCaches = [],
    onDigClick
}: QuestMapProps) => {
    const MapClickHandler = () => {
        useMapEvents({
            click(e) {
                if (digMode && onDigClick) {
                    onDigClick(e.latlng);
                }
            },
        });
        return null;
    };
    const icon = L.icon({
        iconUrl: "/logo.png", // if using Next.js static imports
        iconSize: [30, 40],
        iconAnchor: [15, 40],
        popupAnchor: [0, -40],
        shadowUrl: undefined,
        shadowSize: undefined,
        shadowAnchor: undefined
    });
    return (
        <MapContainer center={map ? [map.centerLat, map.centerLng] as LatLngExpression : defaultPosition} zoom={map ? map.zoom! : zoom}
            scrollWheelZoom={!nonInteractive}
            dragging={!nonInteractive}
            touchZoom={!nonInteractive}
            doubleClickZoom={!nonInteractive}
            boxZoom={!nonInteractive}
            keyboard={!nonInteractive}
            zoomControl={!nonInteractive}
            attributionControl={!nonInteractive}
            className="w-full h-full rounded-lg z-0">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {drawable && <DrawControl setMap={setMap} />}
            {markable && <PointMarker position={markerPosition} setPosition={setPosition} />}
            {map && <StaticRectangle bounds={[[map.maxboundsSwLat!, map.maxboundsSwLng!], [map.maxboundsNeLat!, map.maxboundsNeLng!]]} options={{ color: 'blue', weight: 2 }} />}
            <MapClickHandler />
            {/* <ToleranceCircle center={[48.757568006529, 2.5172424316406]} radius={100} /> */}
            {discoveredCaches.map((marker, index) => {
                if (marker.latitude != null && marker.longitude != null) {
                    return (
                        <Marker key={index} position={[marker.latitude, marker.longitude] as LatLngExpression} icon={icon}>
                            <Popup>
                                <div>
                                    <strong>Hint:</strong> {marker.hint}<br />
                                    <strong>Type:</strong> {marker.keyType}<br />
                                    {marker.passphrase && <><strong>Passphrase:</strong> {marker.passphrase}<br /></>}
                                    {marker.reward != null && <><strong>Reward:</strong> {marker.reward}</>}
                                </div>
                            </Popup>
                        </Marker>
                    );
                }
                return null;
            })}
        </MapContainer>
    );
};

export default QuestMap;
