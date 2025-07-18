import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-draw';
import { Map } from '@/stores/quest';

const DrawControl = ({ setMap }: { setMap?: (map: Map) => void }) => {
    const map = useMap();

    useEffect(() => {
        const drawnItems = new L.FeatureGroup();
        map.addLayer(drawnItems);

        const drawControl = new L.Control.Draw({
            draw: {
                polygon: false,
                polyline: false,
                circle: false,
                marker: false,
                circlemarker: false,
                rectangle: {},
            },
            edit: {
                featureGroup: drawnItems,
            },
        });

        map.addControl(drawControl);

        map.on(L.Draw.Event.CREATED, function (event: any) {
            const layer = event.layer;
            drawnItems.addLayer(layer);

            if (layer instanceof L.Rectangle) {
                const bounds = layer.getBounds();
                const center = bounds.getCenter();
                const zoom = map.getZoom();

                if (setMap) {
                    setMap({
                        centerLat: center.lat,
                        centerLng: center.lng,
                        maxboundsSwLat: bounds.getSouthWest().lat,
                        maxboundsSwLng: bounds.getSouthWest().lng,
                        maxboundsNeLat: bounds.getNorthEast().lat,
                        maxboundsNeLng: bounds.getNorthEast().lng,
                        zoom: zoom,
                    });
                }
            }
        });

        return () => {
            map.removeControl(drawControl);
            map.removeLayer(drawnItems);
        };
    }, [map, setMap]);

    return null;
};

export default DrawControl;
