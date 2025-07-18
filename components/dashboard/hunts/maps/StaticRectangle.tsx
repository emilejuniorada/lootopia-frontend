import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';

type StaticRectangleProps = {
    bounds: [[number, number], [number, number]];
    options?: L.PathOptions;
};

const StaticRectangle = ({ bounds, options }: StaticRectangleProps) => {
    const map = useMap();

    useEffect(() => {
        const rectangle = L.rectangle(bounds, options || { color: 'red' }).addTo(map);
        map.fitBounds(bounds);

        return () => {
            map.removeLayer(rectangle);
        };
    }, [map, bounds, options]);

    return null;
};

export default StaticRectangle;