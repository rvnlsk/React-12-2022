
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import ChangeView from './ChangeView';
import { useState, useEffect } from "react";
import config from "../data/config.json";  

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25,41], 
  iconAnchor: [12,41],
  popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;

function Map(props) { 
  const [shops, setShops] = useState([]);

  useEffect(() => {
    fetch(config.shopsDbUrl)
    .then(res => res.json())
    .then(json => {
      setShops(json || []);
    });
  
  }, []);

  return (
  <div>

    <MapContainer className='map' center={props.mapCoordinaates.lngLat} zoom={props.mapCoordinaates.zoom} scrollWheelZoom={false}>
      <ChangeView center={props.mapCoordinaates.lngLat} zoom={props.mapCoordinaates.zoom} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {shops.map(element =>
        <Marker position={[element.xcoord, element.ycoord]}>
          <Popup>
            {element.name}. <br /> Avatud {element.time}
          </Popup>
        </Marker>)}

      {/* <Marker position={[59.4231, 24.7991]}>
        <Popup>
          Ülemiste keskus. <br /> Avatud 9-20
        </Popup>
      </Marker>
      <Marker position={[59.4277, 24.7193]}>
        <Popup>
          Kristiine keskus. <br /> Avatud 10-21
        </Popup>
      </Marker>
      <Marker position={[58.3779, 26.7308]}>
        <Popup>
          Tasku keskus. <br /> Avatud 10-21
        </Popup>
      </Marker>
      <Marker position={[58.3704, 24.5504]}>
        <Popup>
          Kaubamajakas. <br /> Avatud 9-21
        </Popup>
      </Marker>
    </MapContainer> */}
    </MapContainer>
  </div>)
}

export default Map; 