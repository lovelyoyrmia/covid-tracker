import L from 'leaflet';
import marker from '../../images/mapmarker.svg'

const iconPerson = new L.Icon({
    iconUrl: marker,
    iconRetinaUrl: marker,
    popupAnchor:  [-0, -0],
    iconSize: [50,62],     
});

export { iconPerson };